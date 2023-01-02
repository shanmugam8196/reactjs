import React from 'react';
import '../moodle/login.css';
import login from '../moodle/image/login1.png';
import Menu from '../menu';
export default function Login()
{
    return(
      <div>
        <Menu/>
      <div className='par  container-fluid'>
          <div className='row con'>
              
                <div className='col-lg-6  d-flex flex-row justify-content-center'>
                    <div className='im'>
                   <img src={login} className='container mt-5'/>
                   </div>
                </div>
              <div className='col-lg-6 d-flex flex-row justify-content-center'>
                <div className='second pb-3'>
                  <form>
                    <div className='col-lg-12'>

                        <h1 className='text-center mb-4'>Member Login</h1>
                        <input type="text" placeholder="Email" className='col-lg-12 mb-4 in p-2' />  <br/>
                        <input type="password" className='col-lg-12 mb-4 in p-2' /> 
                        <input type="button" className='btn btn-success col-lg-12 in' value="Login"/>
                    </div>
                      <p className='mt-5 ml-5'>Forgot :<a href='' className='text-success'>Username / Password</a></p>
                      <a href='' className='ml-5 text-success'>Create your accound</a>
                  </form>
                 
                  </div>
                 
              </div>
             

            </div>
      </div>
      </div>
    );
}