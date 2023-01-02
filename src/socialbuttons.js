import React from "react";
import Menu from "./menu";
import './socialbutton.css';
export default function Socialbuttons()
{
    return(
        <div>
        <Menu/>
        <div class="pare2">
         
           <div>
               <h1>Social Buttons</h1>
               <input class="but" type="button" value="like"/>
               <input class="but1" type="button" value="comment"/>
               <input class="but2" type="button" value="Share"/>

           </div>
        </div>
        </div>
    );
}