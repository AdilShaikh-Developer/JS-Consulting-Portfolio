import React from "react";

const Testimonial = ({ testimonial, name, company, image }) => {
  return (
    <div className="testimonial-card">
      <p>"{testimonial}"</p>
      <div className="testimonial-details">
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <h4>{company}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
