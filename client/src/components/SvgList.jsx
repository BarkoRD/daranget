const SvgList = ({ image }) => (
  <li>
    <img
      src={`./companies/${image}.svg`}
      alt={`Imagen de el logo de ${image}}`}
      draggable='false'
      style={{
        animation: 'float 5s ease-in-out infinite',
        animationDelay: `${Math.random() * 2.5}s`,
      }}
    />
  </li>
)

export default SvgList
