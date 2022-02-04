import React from "react";
import Allan from "../allan.jpeg";
const AboutMe = () => {
  return (
      <div id="aboutMe" className="aboutMe">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="photo-wrap mb-5 mt-5">
            <img className="profile-img" src={Allan} alt="allan..." />
          </div>
        </div>

        <div className="col">
          <h1 className="about-heading  mt-5">About Me</h1>
          <div className="info-wrap mb-5 ">
            <p>
              Hello, my name is Allan, and I'm a full stack developer. I was
              formerly an executive culinary chef who decided to make a career
              switch after having to shut down my business due to the pandemic.
              I recently graduated from a 6 month boot-camp style program at The
              George Washington University. There I learned the MERN stack and
              have become proficient with Vanilla JavaScript. I continue this
              path of education as I embark on a new career in software
              engineering by continuing to build projects, watch tutorials, and
              take more online classes. I am currently learning disciplines such
              as cloud engineering, mobile development with ReactNative, and
              other server side languages.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
