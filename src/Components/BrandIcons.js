import React from "react";
import { Link } from "react-router-dom";

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
      <Link className="icon-link">
        <FontAwesomeIcon className="icon twt" icon={faTwitter} />
      </Link>
      <Link className="icon-link">
        <FontAwesomeIcon className="icon gh" icon={faGithub} />
      </Link>
      <Link className="icon-link">
        <FontAwesomeIcon className="icon lin" icon={faLinkedin} />
      </Link>
      <Link className="icon-link">
        <FontAwesomeIcon className="icon med" icon={faMediumM} />
      </Link>
      <Link className="icon-link">
        <FontAwesomeIcon className="icon dev" icon={faDev} />
      </Link>
    </>
  );
};

export default BrandIcons;
