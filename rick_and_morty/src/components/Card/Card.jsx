import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/action";
 function Card(props)
{
   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;
   const [isFav, setIsFav] = useState(false);
   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav(props);

      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <Link to={`/detail/${id}`} >
            <h1 className="card-name">{name}</h1>
         </Link>
         <h2>Specie: {species}</h2>
         <img src={image} alt='name'/> 
      </div>
   );
}

function mapStateToProp(state) {
   return {
     myFavorites: state.myFavorites
   };
 }

function mapDispatchToProp(dispatch){
   return{
      addFav: (ch) => dispatch(addFav(ch)),
      removeFav:(id)=> dispatch(removeFav(id))
   }
}

export default connect(mapStateToProp, mapDispatchToProp)(Card) 