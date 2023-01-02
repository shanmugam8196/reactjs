import React from "react"

import club from './club.png';
import club1 from './club1.png';
import Menu from "./menu";
import '../src/superoverleague.css'
export default function Superoverleague()
{
    return(
    <div>
      <Menu/>
 <div class="par1">
  
 <h1 className="col-12 text-center">Super Over League</h1>
 <div class="text-center">
    
       <img class="ime1" src={club}/>
       <img class="ime1" src={club1}/>
       
   </div>

 </div>
 </div>
 );
}