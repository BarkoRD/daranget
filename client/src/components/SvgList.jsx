const SvgList = ({ image }) => (
  <li>
    <img
      src={`./companies/${image}.svg`}
      alt={`Imagen de el logo de ${image}}`}
    />
  </li>
)

export default SvgList
