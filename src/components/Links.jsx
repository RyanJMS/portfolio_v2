import React from "react";
import "../App.css";

export default function Links({ theme }) {
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
            {theme === "light" ? (
              <img
                alt="github"
                className="icon github"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              ></img>
            ) : (
              <i
                alt="github"
                className="github devicon-github-original-wordmark"
              ></i>
            )}
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
        <li className="link">
          <a
            aria-label="Send me an email"
            href="mailto:ryanjms613@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            {theme === "light" ? (
              <i
                className="icon fa-regular fa-envelope"
                style={{ color: "black", fontSize: "30px" }}
              ></i>
            ) : (
              <i
                className="icon fa-regular fa-envelope"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              ></i>
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}
