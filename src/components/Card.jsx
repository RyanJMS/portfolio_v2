import React from "react";

export default function Card({ title, image }) {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <img className="card-image" src={image} alt={title} />
    </div>
  );
}
