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
              <i
                alt="github"
                className="icon fa-brands fa-github"
                style={{ color: "black", fontSize: "30px" }}
              ></i>
            ) : (
              <i
                alt="github"
                className="icon fa-brands fa-github"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
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
            {theme === "light" ? (
              <i
                alt="linkedin"
                className="icon fa-brands fa-linkedin"
                style={{ color: "black", fontSize: "30px" }}
              ></i>
            ) : (
              <i
                alt="linkedin"
                className="icon fa-brands fa-linkedin"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              ></i>
            )}
          </a>
        </li>
        <li className="link">
          <a
            aria-label="Visit my Twitter"
            href="https://twitter.com/dev_RyanJMS"
            rel="noreferrer"
            target="_blank"
          >
            {theme === "light" ? (
              <i
                alt="twitter"
                className="icon fa-brands fa-twitter"
                style={{ color: "black", fontSize: "30px" }}
              ></i>
            ) : (
              <i
                alt="twitter"
                className="icon fa-brands fa-twitter"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              ></i>
            )}
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
                alt="email"
                className="icon fa-regular fa-envelope"
                style={{ color: "black", fontSize: "30px" }}
              ></i>
            ) : (
              <i
                alt="email"
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
