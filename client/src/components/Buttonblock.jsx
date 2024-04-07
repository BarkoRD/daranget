import React, { useState } from 'react'
import Down from './Down'
const ButtonBlock = ({ onSelect }) => {
  const [get, setGet] = useState(false)

  return (
    <div className='form__buttons-container' onMouseEnter={() => setGet(true)} onMouseLeave={() => setGet(false)} >
      <span className='form__buttons-span'
      >GET <Down />
      </span>
      <button
        value="mp4"
        className="form__button"
        onClick={() => onSelect('mp4')}>.MP4</button>
      <button
        value="mp3"
        className="form__button"
        onClick={() => onSelect('mp3')}>.MP3</button>
    </div>
  )
}

export default ButtonBlock