import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
export default function Feedback()
{

   return(
          <>
            <div className="container-fluid text-center p-5 bg-dark">
                  <div className="row bg-white p-5">
                      <h3 className="col-lg-12 text-center">How satisfied are you with our</h3>
                       <h3 className="col-lg-12 text-center">Customer support perfomance</h3>
                       <div className="col-lg-4">
                           
                            <Link to='/feed'> <FontAwesomeIcon icon={faFaceSadCry} className="text-warning fa-7x"/> </Link>  
                            <h3>Sad</h3>
                       </div>
                       <div className="col-lg-4">
                         <Link to='/feed'> <FontAwesomeIcon icon={faFaceSmile} className="text-warning fa-7x"/> </Link>
                         <h3>None</h3>
                       </div>
                       <div className="col-lg-4">
                       <Link to='/feed'> <FontAwesomeIcon icon={faFaceAngry} className="text-warning fa-7x"/> </Link>
                       <h3>Happy</h3>
                       </div>
                  </div>
            </div>
          </>
   );
}