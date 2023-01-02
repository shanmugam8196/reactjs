import React from "react";
import cow from './cow.jpg';
import './works';
import Menu1 from "./menu1";
export default function Products()
{
    return(
        <>
        
          <div className="container-fluid row mb-3">
            <div className="col-lg-6">
              <img src={cow} className='container cow'/>
            </div>
            <div className="col-lg-6 mt-5 p-5">
                <h3 className="text-success ml-5">HAPPY FARMING</h3>
                <h1 className="text-danger">Happy animals</h1>
                <p>
                "Cattle" can only be used in the plural and not in the singular: it is a plurale tantum.[31] Thus one may refer to "three cattle" or "some cattle", but not "one cattle". "One head of cattle" is a valid though periphrastic way to refer to one animal of indeterminate or unknown age and sex; otherwise no universally used single-word singular form of cattle exists in modern English, other than the sex- and age-specific terms such as cow, bull, steer and heifer. Historically, "ox" was not a sex-specific term for adult cattle, but generally this is now used only for working cattle, especially adult castrated males. The term is also incorporated into the names of other species,
                </p>
                <button className="p-3 text-white bg-warning">LEARN MORE</button>
            </div>
          </div>
        </>
    );
}