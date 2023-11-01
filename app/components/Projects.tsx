import data from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl mb-10">Projects</h1>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 ">
        {data.map((project, key) => (
          <ProjectCard
            key={key}
            title={project.title}
            image={project.image}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}
