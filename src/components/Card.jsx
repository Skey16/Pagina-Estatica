import "../assets/style/card.css";

function Card({ nombre, profesion, colorOjos, imagen, descripcion }) {
  return (

      <div className="personaje personaje1">
        <img src={imagen} />
        
        <h2>Personaje:</h2>

        <p>
          {nombre} <br />
          {profesion} <br />
          {colorOjos} <br />
          {descripcion} <br />
        </p>
      </div>
  ); 
}

export default Card;
