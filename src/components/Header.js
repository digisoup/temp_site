import React from "react";
import Typed from "react-typed";
const Header = () => {
  return (
    <div id="header" className="header-wrapper">
      <div className="main-info">
        <h1>Digital Soup</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Mobile Development",
            "Digital Marketing",
            "Social Media Management",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
