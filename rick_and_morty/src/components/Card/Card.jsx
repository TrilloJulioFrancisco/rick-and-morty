import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/action";
export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  function superClouse() {
    onClose(id);
    dispatch(removeFav(id));
  }
  return (
    <div>
      <button onClick={superClouse}>X</button>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${id}`}>
        <h1 className="card-name">{name}</h1>
      </Link>
      <h2>Specie: {species}</h2>
      <img src={image} alt="name" />
    </div>
  );
}

// function mapStateToProp(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// function mapDispatchToProp(dispatch) {
//   return {
//     addFav: (ch) => dispatch(addFav(ch)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Card);
