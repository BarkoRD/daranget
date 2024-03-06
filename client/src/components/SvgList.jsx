const SvgList = ({ image }) => (
  <li>
    <img
      src={`./companies/${image}.svg`}
      alt={`Imagen de el logo de ${image}}`}
      //draggable="false"
    />
  </li>
);

export default SvgList;
