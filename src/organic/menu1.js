import React from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Menu1()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <span className="navbar-brand text-success"><FontAwesomeIcon icon={faLeaf} className='ml-5'/> ORGANIC</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav1">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link ml-5" to='/home'>Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link ml-5" to='/works'>Works</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link ml-5" to='/about'>About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link ml-5" to='/ourform'>Ourform</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link ml-5" to='/products'>Products</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link ml-5" to='/destimonial'>Destimonial</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link ml-5" to='/organicfood'>organicfood</Link>
      </li>
    </ul>
  </div>
</nav>







        </div>
    );
}