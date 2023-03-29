import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import { removeFav } from '../../redux/action'

function Favorites({myFavorites, onClose, removeFav}) {
  function closeFavorite(id){
    onClose(id);
    removeFav(id);
  }
  return (
    <div>
      {
        myFavorites && myFavorites.map((element)=> { return(
        <Card 
        id = {element.id}
        name={element.name}
        status={element.status}
        species={element.species}
        gender={element.gender}
        origin={element.origin.name}
        image={element.image}
        onClose={()=> closeFavorite(element.id)}
        ></Card>
        );
      })
        
      }
    </div>
  )
}
function mapState(st) {
  return {
    myFavorites: st.myFavorites,
  };
}
function mapDispatch(d) {
  return {
    removeFav: (id) => d(removeFav(id)),
  };
}

export default connect(mapState, mapDispatch)(Favorites);
