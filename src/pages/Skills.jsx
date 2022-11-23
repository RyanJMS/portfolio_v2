import React from "react";
import "../App.css";
import Card from "../components/Card";
import data from "../data/skills_data.json";

export default function Skills() {
  return (
    <div>
      <h1 className="page-title">Skills</h1>
      <div className="grid-container">
        {data.map((skill) => (
          <Card
            className="card grid-item"
            title={skill.title}
            image={skill.image}
          />
        ))}
      </div>
    </div>
  );
}
