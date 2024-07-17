import React from "react";

const Project = ({ title, description, thumbnail }) => {
  return (
    <div className="project-card">
      <img src={thumbnail} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#">
        <button>Discover How We Helped</button>
      </a>
    </div>
  );
};

export default Project;
