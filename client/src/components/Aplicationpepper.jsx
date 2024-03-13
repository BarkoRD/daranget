import React from 'react'

const Aplicationpepper = ({ src, description, link }) => (
  <a href={link}>
    <div className='pepper__apps-element'>
      {src}
      <p>{description}</p>
    </div>
  </a>
)

export default Aplicationpepper
