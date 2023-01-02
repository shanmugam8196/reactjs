import React from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import '../src/organic/works.css'
export default function Menu()
{
    return(
      
         
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mainpage">
         <span className="navbar-brand text-white"><FontAwesomeIcon icon={faIdCard} className=''/> Card Details</span>
         <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav container-fluid">
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/congratscard'>congratscard </Link>
          </li>
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/superoverleague'>Superoverleague </Link>
          </li>
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/socialbutton'>Socialbuttons </Link>
          </li>
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/nodification'>Nodification </Link>
          </li>
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/login'>Login </Link>
          </li>
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/technology card'>Technology_Card </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-2 text-white" to='/helloworld'>Helloworld</Link>
          </li>
          <li className="nav-item">
            <Link className="ml-2 text-white nav-link" to='/responsive'>Responsive</Link>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>

          <li className="nav-item">
          </li>

          <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu">
        <Link className="ml-2 text-dark nav-link" to='/feedback'>FeedBack</Link>

        <Link className="ml-2 text-dark nav-link" to='/increment'>Increment</Link>

        <Link className="ml-2 text-dark nav-link" to='/frootcounter'>Froutcounter</Link>

        <Link className="ml-2 text-dark nav-link" to='/datefunction'>Datefunction</Link>

        <Link className="ml-2 text-dark nav-link" to='/smartphone'>SmartPhone</Link>

        <Link className="ml-2 text-dark nav-link" to='/fakeapi'>Fakeapi</Link>

        <Link className="ml-2 text-dark nav-link" to='/jasondata'>Jasondata</Link>

        <Link className="ml-2 text-dark nav-link" to='/scss'>Destimonialscss</Link>

        </div>
      </li>


        </ul>
     </div>
    </nav>
       
    );
}