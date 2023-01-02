import React from "react";
import Home from "./home";
import Works from "./works";
import About from './about'
import Ourform from './ourform'
import Products from './products'
import Destimonial from './destimonial'
import Organicfood from './organicfood'

export default function Responsive()
{
    return(
        <>
         <div className="container-fluid">
         
          <Home/>
          <Works/>
          <About/>
          <Ourform/>
          <Products/>
          <Destimonial/>
          <Organicfood/>
          
         </div>
        </>
    );
}