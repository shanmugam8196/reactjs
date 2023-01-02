import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../organic/works.css'
export default function Fakeapi()
{

    const [products,setProducts]=useState([])
        useEffect(()=>
        {
            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(data=>setProducts(data))
},[])


    return(
            <>
            <div className="container-fluid p-5">
            <div className="row justify-content-center">
                {
                    products.map((value,index)=>(

                        <div className="card col-lg-3 m-2 fakeapi-card pb-3 ">
                            <img src={value.image} className="rounde phone container card-img-top"/>
                            <div className="card-body">
                               <h5 className="card-title text-danger">{value.title}</h5>
                               <h6 className="card-title text-center">Price :{value.price}</h6>
                            </div>
                            <h1 className="text-center"><StarRatings rating={value.rating.rate} starDimension="25px" starSpacing="2px" starRatedColor="gold"/></h1>
                            <Link to={`/fakeapi/${value.id}`}><a className="btn btn-primary col-lg-12">View More...</a></Link>
                        </div>
                    ))
                }
                </div>












                </div>
            </>
    );
}