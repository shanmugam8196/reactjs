import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Increment()
{
    const [increment,setincrement]=useState(0)

    function Decrement()
    {
        setincrement(increment-1)
    }
   
    return (
        <>
        <div className='container-fluid p-5 bg-danger'>
           <div className='row text-center'>
             <h1 className='col-12 text-white'>{increment}</h1>
            <input className='col-4 ' type="button" value="Increment" onClick={()=>setincrement(increment+1)}/>
            <button className='col-4' onClick={Decrement}>Decrement</button>
            <input className='col-4' type="button" value="Reset" onClick={()=>setincrement(0)}/>
            </div>
        </div>
         
        </>
    );
} 