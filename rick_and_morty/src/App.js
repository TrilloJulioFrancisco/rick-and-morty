// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
import NavBar from './components/NavBar'
import React, { useState } from 'react';
import axios from 'axios';

/* 
const [state, setState] = useState(initialState);
Donde initialState es el valor inicial que deseas asignar al estado y 
state y setState son la variable de estado y la función para actualizarla respectivamente.
*/
function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      if(id>0 && id<827)
      {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      } else{
         window.alert('NO EXISTE');
      }
   }
   function onClose (id){
      const deletedChar = characters.filter((character)=> character.id !== id);
      setCharacters(deletedChar);
   }
   
   return (
      <div className='App'>
         <NavBar onSearch={onSearch}     />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
