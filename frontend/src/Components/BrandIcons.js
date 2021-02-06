import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faMediumM,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

const BrandIcons = () => {
  return (
    <>
      <a className="icon-link" href="https://twitter.com/WhoAdityaShukla" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon twt" icon={faTwitter} />
      </a>
      <a className="icon-link" href="https://github.com/aditya278" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon gh" icon={faGithub} />
      </a>
      <a className="icon-link" href="https://linkedin.com/in/aditya278" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon lin" icon={faLinkedin} />
      </a>
      <a className="icon-link" href="https://medium.com/@aditya.shukla278" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon med" icon={faMediumM} />
      </a>
      <a className="icon-link" href="https://dev.to/aditya278" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon dev" icon={faDev} />
      </a>
    </>
  );
};

export default BrandIcons;
