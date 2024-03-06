import React from 'react'
import Aplication from './Aplication'

const Header = () => {
  const apps = [
    {
      src: './apps-imgs/githublogo.svg',
      alt: 'github logo',
      description: 'GitHub',
    },
    {
      src: './apps-imgs/discordbot.svg',
      alt: 'bot image',
      description: 'Discord Bot',
    },
    {
      src: './apps-imgs/extension.svg',
      alt: 'extension image',
      description: 'Extension',
    },
  ]

  return (
    <header className='container'>
      <div className='container__img-logo'>
        <img src='./daranget-logo.png' alt='daranget logo' />
      </div>
      <div className='container__apps-container'>
        {apps.map((app, e) => (
          <Aplication
            key={e}
            src={app.src}
            alt={app.alt}
            description={app.description}
          />
        ))}
      </div>
    </header>
  )
}

export default Header
