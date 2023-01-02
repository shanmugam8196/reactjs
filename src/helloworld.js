import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Menu from "./menu";
export default function Hello()
{
    return(
        <>
        <Menu/>
      
        <div className="d-flex flex-row justify-content-center shadow pt-5 w-100">
            <div className="p-5">
            <h1 className="mt-5">Hello World Welcome to React Js</h1>
            </div>
            

        </div>
       
        </>
    );
}