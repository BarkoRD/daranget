import React from "react";

const Aplication = ({ src, description }) => (
  <div className="container__apps-element">
    {src}
    <p>{description}</p>
  </div>
);

export default Aplication;
