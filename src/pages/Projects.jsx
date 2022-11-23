import React from "react";
import data from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1 className="page-title">Projects</h1>
      {data.map((project, key) => (
        <ProjectCard
          key={key}
          className="grid-item"
          title={project.title}
          image={project.image}
          description={project.description}
          repoLink={project.repoLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  );
}
