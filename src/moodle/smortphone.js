
import React,{useState,useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../organic/works.css'
import StarRatings from "react-star-ratings";
export default function Smartphone()
{

   const[phonedetail,setPhonedetail]=useState([])
   useEffect(()=>{
        fetch('http://localhost:3000/smartphone.json')
        .then((mobile)=>mobile.json())
        .then((data)=>{
           
            setPhonedetail(data)
        })
    },[])

    return(
          <>
            <div className="container-fluid bg-primary p-5">
            <div className="row justify-content-between">
                {  
                   
                    phonedetail.map((value,index)=>(
                        <div className="card col-lg-3 m-2 rounded pb-3">
                            <img src={value.brand} className="rounde phone container card-img-top"/>
                            <div className="card-body">
                               <h5 className="card-title text-danger">{value.name}</h5>
                               <h6 className="card-title">Price :{value.price}</h6>
                               <p className="card-text phonedes">{value.description}</p>
                            </div>
                            <h1><StarRatings rating={value.star} starDimension="25px" starSpacing="2px" starRatedColor="gold"/></h1>
                            <input type="button" value="View More" className="btn btn-primary position-bottom"/>

                        </div>

                    ))
                  
                }
                      </div>
                </div>
          
          </>
    );
}