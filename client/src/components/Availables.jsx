import SvgList from './SvgList'
import '../styles/availables.css'
const Availables = () => {
  const redes = [
    { red: 'youtube', id: 1 },
    { red: 'facebook', id: 2 },
    { red: 'instagram', id: 3 },
    { red: 'tiktok', id: 4 },
    { red: 'x', id: 5 },
  ]

  return (
    <section className='availables'>
      <h2
        className='availables__title'
        style={{
          animation: 'float 5s ease-in-out infinite',
          animationDelay: `${Math.random() * 2.5}s`,
        }}
      >
        Can get videos from
      </h2>
      <ul className='availables__images'>
        {redes.map(({ id, red }) => (
          <SvgList key={id} image={red} />
        ))}
      </ul>
    </section>
  )
}

export default Availables
