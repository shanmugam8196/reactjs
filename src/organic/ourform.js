import React from "react";
import testimonial from './testimonial.jpeg';
import testimonial1 from './testimonial1.jpeg';
import testimonial2 from './testimonial2.jpeg';
import testimonial3 from './testimonial3.jpeg';
import './works.css'
import Menu1 from "./menu1";
export default function Ourform()
{
    return(
        <>
        
      
        <div className="conainer-fluid pt-5 ourform mb-3">
              <h1 className="col-12 text-center text-white">About Our Farm</h1>
             <p className="col-12 text-center text-white">Vitalism survived for a short period after the formulation of modern ideas about the atomic theory and chemical elements. It first came under question in 1824, when Friedrich Wöhler synthesized oxalic acid, a compound known to occur only in living organisms</p>
        
             <div className="container ourform-card card-group">
  <div className="card col-lg-3 m-2 ">
  <div className="card-body">
      <h5 className="card-title">VEGETABLES</h5>
      <p className="card-text">Search from 8111441 Organic Food stock photos, pictures and royalty-free images from iStock.</p>

    </div>

    <img src={testimonial} className='ourform1'/>
  </div>
  <div className="card col-lg-3 m-2">
  <div className="card-body">
      <h5 className="card-title">HOW IT WORKS</h5>
      <p className="card-text">Search from 8111441 Organic Food stock photos, pictures and royalty-free images from iStock.</p>

    </div>

    <img src={testimonial1} className='ourform1'/>
  </div>
  <div className="card col-lg-3 m-2">
  <div className="card-body">
      <h5 className="card-title">FLEXIBILITY</h5>
      <p className="card-text">Search from 8111441 Organic Food stock photos, pictures and royalty-free images from iStock.</p>

    </div>

    <img src={testimonial2} className='ourform1'/>
    
  </div>
 <div className="card col-lg-3 m-2">
 <div className="card-body">
      <h5 className="card-title">FORM PRODUCTS</h5>
      <p className="card-text">Search from 8111441 Organic Food stock photos, pictures and royalty-free images from iStock.</p>

    </div>

    <img src={testimonial3} className='ourform1'/>
    
  </div>

</div>
        
        </div>
        
        </>
    );
}