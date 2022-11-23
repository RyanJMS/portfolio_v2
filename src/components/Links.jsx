import React from "react";
import "../App.css";

export default function Links() {
  return (
    <div>
      <ul className="links">
        <li className="link">
          <a href="https://github.com/RyanJMS" rel="noreferrer" target="_blank">
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            ></img>
          </a>
        </li>
        <li className="link">
          <a
            href="https://www.linkedin.com/in/ryanjmschock/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            ></img>
          </a>
        </li>
        <li className="link">
          <a
            href="https://twitter.com/dev_RyanJMS"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
