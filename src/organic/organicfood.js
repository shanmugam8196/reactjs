import React from "react";
import organicfood from './organicfood.jpeg'
import Menu1 from "./menu1";
import './works.css'
export default function Organicfood()
{
    return(
        <>
        
         <div className="container-fluid p-5 mb-3">
           <div className="row">
              <div className="col-lg-4">
                <h3 className="text-success">ORGANIC FARM</h3>
                <h1 className="text-danger">OF ORGANIC FOOD</h1>
                <p>
                Examples of organic compounds are carbohydrates, fats (lipids), proteins, and nucleic acids, which are the basis for the molecules of life. Organic compounds also include petroleum and natural gas, which are the main components of fossil fuels.
                </p>
                 <button className="p-3 bg-danger text-white">LEARN MORE</button>
              </div>
              <div className="col-lg-7 p-5">
                  <img src={organicfood} className='container organicfood'/>
               </div>
           </div>
         </div>
        </>
    );
}