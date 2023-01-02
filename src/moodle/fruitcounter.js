import React,{useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import mango from './mango.jpeg';
import banana from './banana.jpeg';

export default function Fruitcounter()
{
     const [increment,setincrement]=useState(0)
     const [bananainc,setbananainc]=useState(0)

    return(
          <>
            <div className='container-fluid text-center p-5 bg-warning'>
                 
                  <div className='row  bg-white'>
                  <div className=" col-lg-12">
                      <h1>Bob ate <span className="text-warning"> {increment}</span> Mangoes <span className="text-warning">{bananainc}</span> Bananas</h1>
                     
                  </div>
                     <div className='col-lg-6 p-4'>
                         <img src={mango} className=""/> <br/>
                         <input type="button" className="mt-5 btn-primary p-3" value="Eat Mango" onClick={()=>setincrement(increment+1)}/>

                     </div>
                     <div className='col-lg-6 p-4'>
                         <img src={banana} className="mb-3"/> <br/>
                         <input type="button" value="Eat Banana" className="btn-primary p-3" onClick={()=>setbananainc(bananainc+1)}/>  

                     </div>
                        

                       
                  </div>
            </div>
          
          </>
    );
}