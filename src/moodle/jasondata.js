import React,{useState,useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../organic/works.css'

export default function Jasondata()
{
    const [products,setProducts]=useState([])
    useEffect(()=>{
         fetch('https://fakestoreapi.com/products?limit=5')
         .then((mobile)=>mobile.json())
         .then((data)=>{
            
             setProducts(data)
         })
     },[])
     return(
    
        <>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-lg-12'>
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>price</th>
                            <th>category</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((value,index)=>(
                            
                           
                           <tr>
                                <td className='p-2'>
                                    <h4>{value.id}</h4>
                                </td>
                                <td  className='p-2'>
                                    <h4>{value.title}</h4>
                                </td>
                                <td className='p-2'>
                                    <h4>{value.price}</h4>
                                </td>
                                <td className='p-2'> 
                                    <h4>{value.category}</h4>
                                </td>
                                <td className='p-2'>
                                    <h4>{value.rating.rate}</h4>
                                </td>
                                </tr>
                        
                        ))
                       
                    }
                      </tbody>
                     </table>
                     </div>
                </div>
            </div>
        </>
     );
  
}