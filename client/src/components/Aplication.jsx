import React from 'react'

const Aplication = ({ src, alt, description }) => (

  <div className="container__apps-element">
    <img src={src} alt={alt} />
    <p>{description}</p>
  </div>
)

export default Aplication