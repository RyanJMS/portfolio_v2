import React from "react";
import "../App.css";

export default function ProjectCard({
  title,
  image,
  description,
  liveLink,
  repoLink,
}) {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={title} />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a
        className="project-link"
        rel="noopener"
        target="_blank"
        href={repoLink}
      >
        Github Repo
      </a>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <a
        className="project-link"
        rel="noopener"
        target="_blank"
        href={liveLink}
      >
        Live Demo
      </a>
    </div>
  );
}
