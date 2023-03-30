import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import {
  removeFav,
  filterCards,
  orderCards,
  resetCards,
} from "../../redux/action";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  function closeFavorite(id) {
    onClose(id);
    dispatch(removeFav(id));
  }
  function handleOrder(event) {
    const { value } = event.target; //!opcion con destructuring
    dispatch(orderCards(value));
  }
  function handleFilter(event) {
    dispatch(filterCards(event.target.value)); //!opcion sin destructuring
  }
  function resetFunct() {
    dispatch(resetCards());
  }
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="DEFAULT" disable>
          Select Order
        </option>
        <option value="Ascendente">Ascendete</option>
        <option value="Descendente">Descendete</option>
      </select>
      <select onChange={handleFilter}>
        <option value="DEFAULT" disable>
          Select Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={resetFunct}>Reset</button>
      {myFavorites &&
        myFavorites.map((element) => {
          return (
            <Card
              id={element.id}
              name={element.name}
              status={element.status}
              species={element.species}
              gender={element.gender}
              origin={element.origin.name}
              image={element.image}
              onClose={() => closeFavorite(element.id)}
            ></Card>
          );
        })}
    </div>
  );
}
// function mapState(st) {
//   return {
//     myFavorites: st.myFavorites,
//   };
// }
// function mapDispatch(d) {
//   return {
//     removeFav: (id) => d(removeFav(id)),
//   };
// }

// export default connect(mapState, mapDispatch)(Favorites);
