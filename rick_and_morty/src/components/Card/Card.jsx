import { Link } from "react-router-dom";
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
            <h1 className="card-name">{name}</h1>
         </Link>
         <h2>Specie: {species}</h2>
         <img src={image} alt='name'/> 
      </div>
   );
}
