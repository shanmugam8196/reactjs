import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Menu1 from "./menu1";
import './home.css';


export default function Home()
{
    return(
        <>     
        
        <div className="container-fluid home mb-3">
         <div className="row ">
         <div className="col-lg-4 ml-5">
        
            <h3 className="text-success ml-5">FRESH FOOD</h3>
            <h1 className="text-danger">Organic</h1>
            <p>Organic food, ecological food or biological food are food and drinks produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.</p>
             <button className="bg-success p-2">LEARN MORE</button>
        
         </div>
         </div>
      </div>
      </>

    );
}