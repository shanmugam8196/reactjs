import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './works.css';
import wor from './work.jpg';
import Menu1 from "./menu1";
import work2 from './work2.jpg';
import work4 from './work4.jpg';
import work5 from './work5.jpg';

export default function Works()
{
    return(
        <>
            
        <div className="container-fluid bg-success work mb-3 pb-4">
          <h1 className="col-12 text-center text-white">How It Works?</h1>
          <p className="col-12 text-center text-white">In chemistry, organic compounds are generally any chemical compounds that contain carbon-hydrogen or carbon-carbon bonds. Due to carbon's ability to catenate (form chains with other carbon atoms), millions of organic compounds are known. The study of the properties, reactions, and syntheses of organic compounds comprise the discipline known as organic chemistry.</p>
           <div className="row">
            <div className="col-lg-4">
                <img className="container" src={wor}/>
            </div>
            <div className="col-lg-4 container">
            
                <p className="col-lg-12 bg-white p-4">Although organic compounds make up only a small percentage of Earth's crust, they are of central importance because all known life is based on organic compounds. Living things incorporate inorganic carbon compounds into organic compounds through a network of processes (the carbon cycle) that begins with the conversion of carbon dioxide and a hydrogen source like water into simple sugars and.</p>
        
            </div>
            <div className="col-lg-4">
                <img className="container" src={work2}/>
            </div>

           </div>

           <div className="row mt-3">
            <div className="col-lg-4">
                <img className="container" src={work4}/>
            </div>
            <div className="col-lg-4 container">
                <p className=" bg-white p-3">Although organic compounds make up only a small percentage of Earth's crust, they are of central importance because all known life is based on organic compounds. Living things incorporate inorganic carbon compounds into organic compounds through a network of processes (the carbon cycle) that begins with the conversion of carbon dioxide and a hydrogen source like water into simple sugars and other organic molecules by autotrophic organisms using light (photosynthesis) or other sources of energy.</p>
            </div>
            <div className="col-lg-4">
                <img className="container" src={work5}/>
            </div>

           </div>
        </div>
        </>
    );
}