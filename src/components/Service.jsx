import React from "react";

const Service = ({ title, description, details }) => {
  return (
    <div className="service-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li className="heading">Details:</li>
        {details.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
