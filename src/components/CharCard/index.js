import "./style.css";

function CharCard({ name, image, species, status }) {
  return (
    <li className={status === "Dead" ? "dead" : "aliveOrUnknown"}>
      <h4>{name}</h4>
      <img alt="imagem" src={image}></img>
      <span>Specie:{species}</span>
    </li>
  );
}

export default CharCard;
