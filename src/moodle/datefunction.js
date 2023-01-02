import React,{useState} from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Datefunction()
{
    function datefun1()
    {
        document.getElementById("result").innerHTML="";
    }

    function datefun()
    {
        var dat=document.getElementById("dat").value;
        var dat1=new Date(dat)
        dat1.setDate(dat1.getDate()+90)
        document.getElementById("result").innerHTML=dat1.getDay()+"/"+dat1.getMonth()+"/"+dat1.getFullYear();
        document.getElementById("dat").value="";
    }
  
    return(
        <>
            <div className="container-fluid p-5 text-center bg-success">
           <h1 id="result" className="col-12 text-center"></h1>
            <input type="date" id="dat" className="p-2" name="dat" onClick={datefun1}/>
            <input type='button' className="btn-primary ml-4 p-2" value='Datecalculate' onClick={datefun}/>
           </div>
        </>
    );
}










