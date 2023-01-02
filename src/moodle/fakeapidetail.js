import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Fakeapidetail()
{
    const [product,setproduct]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(res=>res.json())
        .then(data=>setproduct(data))
        console.log(product)
    })

    return(
        <>
           
<div class="container-fluid card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={product.image} alt="..." className="container"/>
    </div>
    <div class="col-md-8">
      <div class="card-body text-center">
        <h5 class="card-title text-center text-danger">{product.title}</h5>
       
        <p class="card-text">{product.description}</p>
        <p class="card-text">{product.category}</p>
        <h6 className="card-title">Price :{product.price}</h6>
        <button className=" bg-warning mt-3 p-2 rounded border-none">Add Card</button>
        <button className=" bg-warning mt-3 p-2 rounded border-none ml-3">Buy Now</button>


      </div>
    </div>
  </div>
</div>

        



        </>
    );
}
