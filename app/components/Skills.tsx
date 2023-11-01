import SkillCard from "./SkillCard";
import data from "../data/skills_data.json";

export default function Skills() {
  return (
    <div className="mt-8 text-center">
      <h1 className="text-4xl mb-10">Skills</h1>
      <div className="grid grid-cols-3 mx-auto lg:max-w-lg">
        {data.map((skill, key) => (
          <SkillCard title={skill.title} key={key} image={skill.image} />
        ))}
      </div>
    </div>
  );
}
