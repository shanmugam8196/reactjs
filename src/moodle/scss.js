import React from "react";
import testimonial from '../organic/testimonial.jpeg'
import testimonial1 from '../organic/testimonial1.jpeg'
import testimonial2 from '../organic/destimonial2.jpg'
import '../moodle/sample.scss'


export default function Destimonialscss()
{
    return(
        <>
        
         <div className="container-fluid destimonialbg pb-5 pt-5 mb-3">
         <div className="card-deck">
  <div className="card desti-card">
    <img src={testimonial} className=' rounded-circle container'/>
    <div className="card-body text-center">
      <h5 className="card-title">Fresh Fruits</h5>
      <p className="card-text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms</p>
       <button className="btnbg">Learn More</button>
    </div>
    
  </div>
  <div className="card desti-card">
    <img src={testimonial1} className=' rounded-circle container'/>
    <div className="card-body text-center">
      <h5 className="card-title">Vegetables</h5>
      <p className="card-text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms</p>
      <button className="btnbg">Learn More</button>

    </div>
    
  </div>
  <div className="card desti-card">
    <img src={testimonial2} className='rounded-circle container'/>
    <div className="card-body text-center">
      <h5 className="card-title">Salad Leaves</h5>
      <p className="card-text">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms</p>
      <button className="btnbg">Learn More</button>

    </div>
    
  </div>
</div>
         </div>
        </>
    );
}