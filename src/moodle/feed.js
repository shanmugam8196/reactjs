import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default function Feed()
{
    return(
        <>
          <div className="container-fluid bg-success p-5">
                <div className="bg-white text-center p-5">
                   <FontAwesomeIcon icon={faHeart} className="text-danger fa-10x"/>
                   <h3>Thank You</h3>
                   <p>We will Use you feedback to improve our customer support perfomance</p>
                </div>
          </div> 
        </>
    );
}