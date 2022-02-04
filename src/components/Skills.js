import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJsSquare, faCss3Alt, faReact } from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5">Skills</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="box">
             <div className="circleOne" ><FontAwesomeIcon className="iconOne" icon={ faJsSquare} size="4x" /></div>
                <h3>Vanilla JS</h3>
                <p></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
              <div className="circleTwo" ><FontAwesomeIcon className="iconTwo" icon={ faHtml5 } size="4x" /></div>
                <h3>HTML</h3>
                <p></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
              <div className="circleThree" ><FontAwesomeIcon className="iconThree" icon={ faCss3Alt } size="4x" /></div>
                <h3>CSS</h3>
                <p></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
              <div className="circleFour" ><FontAwesomeIcon className="iconFour" icon={ faReact } size="4x" /></div>
                <h3>MERN</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Skills;
