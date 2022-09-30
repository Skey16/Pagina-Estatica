
import avatar from "../assets/img/avatar.jpg"
import hp from "../assets/img/Harry.jpg"
import "../assets/style/personajes.css";


import Card from "./Card"

function Personajes() {

    const personajes=[{
         nombre:'Lorem ipsum dolor',
         profesion:'Lorem ipsum dolor',
         colorOjos:'Lorem ipsum dolor',
         imagen:avatar,
         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum facilis voluptatem, libero voluptas neque exercitationem eaque quasi ea dicta culpa excepturi voluptates autem molestiae facere ab tempora sint ipsa"
     },
     {
        nombre:'Lorem ipsum dolor',
        profesion:'Lorem ipsum dolor',
        colorOjos:'Lorem ipsum dolor',
        imagen:avatar,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum facilis voluptatem, libero voluptas neque exercitationem eaque quasi ea dicta culpa excepturi voluptates autem molestiae facere ab tempora sint ipsa"
    },
    {
        nombre:'Lorem ipsum dolor',
        profesion:'Lorem ipsum dolor',
        colorOjos:'Lorem ipsum dolor',
        imagen:avatar,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum facilis voluptatem, libero voluptas neque exercitationem eaque quasi ea dicta culpa excepturi voluptates autem molestiae facere ab tempora sint ipsa"
    }]

    return ( 
        <div className="contenedor">
            { personajes.map((personajes)=>(
                    <Card
                        nombre={personajes.nombre}
                        profesion={personajes.profesion}
                        colorOjos={personajes.colorOjos}
                        imagen={personajes.imagen}
                        descripcion={personajes.descripcion}
                    />
                ))
            }
        </div>
    )
}

export default Personajes;