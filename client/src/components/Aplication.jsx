import React from "react";

const Aplication = ({ src, description, link }) => (
  <a href={link}>
    <div className="container__apps-element">
      {src}
      <p>{description}</p>
    </div>
  </a>
);

export default Aplication;
