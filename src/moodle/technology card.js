import React from "react";
import Menu from "../menu";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import datascience from '../moodle/image/datascientist.png';
import datascience1 from '../moodle/image/datascientist1.png'
import datascience2 from '../moodle/image/datascientist2.png';
import datascience3 from '../moodle/image/datascientist3.png';
import '../moodle/technologycard.css';
export default function Technology_Card()
{
    return(
      <div>
        <Menu/>
        <div className="container-fluid technology-parent pb-5">
           <h1 className="col-lg-12 text-center">Learn 4.0 Technologies</h1>
           <p className="col-lg-12 text-center mt-5">As the world’s most ambitious project, NEOM aims to be an accelerator of human progress. Home to an international community of dreamers and doers, with exceptional livability. Read News. See Media Gallery. Sign Up For Updates.</p>
           
           <div class="row">
  <div class="col-sm-6 ">
    <div class="card technology-cord1">
      <div class="card-body ">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Working as a data scientist can be intellectually challenging, analytically satisfying, and put you at the forefront of new advances in technology. Data scientists have become more common and in demand.</p>
        <img src={datascience} className='datascience'/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card technology-cord2">
      <div class="card-body">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">IoT (Internet of Things) is undoubtedly one of the trending technologies in the present time. It has reduced the gap between the real and virtual world, making the objects interact each other in real time.</p>
        <img src={datascience3} className='datascience'/>
      </div>
    </div>
</div>
           </div>

           <div class="row mt-4">
  <div class="col-sm-6 ">
    <div class="card technology-cord3">
      <div class="card-body ">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, but an AR developer uses mobile apps to create a layer of digital experience in our reality.</p>
        <img src={datascience1} className='datascience'/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card technology-cord4">
      <div class="card-body">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">A machine learning engineer (ML engineer) is a person in IT who focuses on researching, building and designing self-running artificial intelligence (AI) systems to automate predictive models.</p>
        <img src={datascience2} className='datascience'/>
      </div>
    </div>
</div>
           </div>
        
        </div>
        </div>
    );
}