import React from "react";
import './works.css'
import Menu1 from "./menu1";
import work4 from './work4.jpg'

export default function About()
{
    return(
        <>
          
          <div className="container-fluid mb-3">
            <div className="row">
            <div className="col-lg-6 pt-5 text-white about">
                  <img src={work4}className="container"/>
            </div>

            <div className="col-lg-5 pt-5 ml-5 mt-5">
                 <h3 className="text-success ml-5">ORGANIC FARM</h3>
                 <h1 className="text-danger">Our Promise</h1>
                 <p>Although organic compounds make up only a small percentage of Earth's crust, they are of central importance because all known life is based on organic compounds. Living things incorporate inorganic carbon compounds into organic rk of processes (the carbon cycle)</p>
                  <button className="p-3 bg-warning text-white">LEARN MORE</button>
            </div>
            </div>

          </div>
        </>
    );
}