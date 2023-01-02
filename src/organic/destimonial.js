import React from "react";
import destimonial from './destimonial.jpg'
import destimonial1 from './destimonial1.jpeg'
import destimonial2 from './destimonial2.jpg'
import './works.css';
import Menu1 from "./menu1";

export default function Destimonial()
{
    return(
        <>
         
         <div className="container-fluid destimonial-main pb-5 pt-5 mb-3">
         <div className="card-deck">
  <div className="card">
    <img src={destimonial} className='destimonial-div container'/>
    <div className="card-body text-center">
      <h5 className="card-title">Fresh Fruits</h5>
      <p className="card-text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms</p>
       <button className="bg-white">Learn More</button>
    </div>
    
  </div>
  <div className="card">
    <img src={destimonial1} className='destimonial-div container'/>
    <div className="card-body text-center">
      <h5 className="card-title">Vegetables</h5>
      <p className="card-text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms</p>
      <button className="bg-white">Learn More</button>

    </div>
    
  </div>
  <div className="card">
    <img src={destimonial2} className='destimonial-div container'/>
    <div className="card-body text-center">
      <h5 className="card-title">Salad Leaves</h5>
      <p className="card-text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms</p>
      <button className="bg-white">Learn More</button>

    </div>
    
  </div>
</div>
         </div>
        </>
    );
}