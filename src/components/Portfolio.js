import React from "react";
import Pizza from "../run4.png";
import Budget from "../budget.png";
import Fitness from "../fitness.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
  const openPopupPizza = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Pizza} alt="run for pizza" />
        <p>This is an app for creating fun run events.</p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/chefbrams/project3", "_blank")}
        >
          https://github.com/chefbrams/project3
        </a>{" "}
        <br />
        <b>Deployed Site:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://run4app.herokuapp.com/", "_blank")}
        >
          https://run4app.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigPizza = {
    titleBar: {
      enable: true,
      text: "Fun Run Event Project"
    },
    fadeIn: true,
    fadInSpeed: 500
  };
  const openPopupFitness = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Fitness} alt="run for pizza" />
        <p>This is an app to track and chart your fitness progress.</p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/chefbrams/fitnessTracker", "_blank")}
        >
          https://github.com/chefbrams/fitnessTracker
        </a>{" "}
        <br />
        <b>Deployed Site:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://arcane-harbor-72010.herokuapp.com/stats", "_blank")}
        >
         https://arcane-harbor-72010.herokuapp.com/stats
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigFitness = {
    titleBar: {
      enable: true,
      text: "Fitness Tracker that charts your progress"
    },
    fadeIn: true,
    fadInSpeed: 500
  };
  const openPopupBudget = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Budget} alt="Budget Tracker" />
        <p>This is a basic budget tracking app that utilizes a server side database as well as an in-browser db that gives it offline functionality.</p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/chefbrams/budgetTracker", "_blank")}
        >
          https://github.com/chefbrams/budgetTracker
        </a>{" "}
        <br />
        
        <b>Deployed Site:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://sleepy-retreat-09837.herokuapp.com/ ","_blank")}
        >
         https://sleepy-retreat-09837.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigBudget = {
    titleBar: {
      enable: true,
      // text: "Basic online/offline budget tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupPizza}>
            <img className="portfolio-image" src={Pizza} alt="run for pizza" />

            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupFitness}>
        
            <img
              className="portfolio-image"
              src={Fitness}
              alt="Fitness Tracker"
            />

            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupBudget}>
       
            <img
              className="portfolio-image"
              src={Budget}
              alt="Budget Tracker"
            />

            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigBudget } /> 
      {/* <PopupboxContainer  /> 
      <PopupboxContainer /> */}
    </div>
  );
};

export default Portfolio;
