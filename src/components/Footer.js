import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Washington, D.C.</p>
            </div>
            <div className="d-flex">
              <a href="tel:571-296-0154">(571)296-0154</a>
            </div>
            <div className="d-flex">
              <p>allan.digitalsoup@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <br />

                <br />
              </div>
              <div className="col">
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://chefbrams.github.io/jobPortfolio/"}
                quote={"Fullstack Developer"}
                hashtag="#abwebdev"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://chefbrams.github.io/jobPortfolio/"}
                quote={"Fullstack Developer"}
                hashtag="#abwebdev"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://chefbrams.github.io/jobPortfolio/"}
                quote={"Fullstack Developer"}
                hashtag="#abwebdev"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://chefbrams.github.io/jobPortfolio/"}
                quote={"Fullstack Developer"}
                hashtag="#abwebdev"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;webDev358 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
