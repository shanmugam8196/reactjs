import React from "react";
import img from './img.png';
import img1 from './img1.png';
import img2 from './img2.png';
import Menu from "./menu";
import './congratscard.css'
export default function Congratscard()
{
    return (
      <>
      <Menu/>
        <div class="back">
          
          <h1>Congratulations</h1> <br/>
          <div class="child">
          <img src={img1}/>
          <h3>Kiran V</h3>
          <p>
            Vishnu institute of computer Education and Technology, Bhimavaram
          </p>
          <img src={img2}/>
          </div>
        </div>
        </>
    );
}