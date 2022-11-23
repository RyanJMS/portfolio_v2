import React from "react";
import "../App.css";

export default function Links() {
  return (
    <div>
      <ul className="links">
        <li className="link">
          <a
            aria-label="Visit my Github"
            href="https://github.com/RyanJMS"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="github"
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            ></img>
          </a>
        </li>
        <li className="link">
          <a
            aria-label="Visit my Linkedin"
            href="https://www.linkedin.com/in/ryanjmschock/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="linkedin"
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            ></img>
          </a>
        </li>
        <li className="link">
          <a
            aria-label="Visit my Twitter"
            href="https://twitter.com/dev_RyanJMS"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="twitter"
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
