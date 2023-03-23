import { Link } from "react-router-dom";
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>
         <h2>specie: {species}</h2>
         <img src={image} alt='name'/> 
      </div>
   );
}
