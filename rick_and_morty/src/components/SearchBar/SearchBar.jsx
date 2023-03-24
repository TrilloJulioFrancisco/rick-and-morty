import React, {useState} from 'react';
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   function handleChange(event){
     setId(event.target.value);
   }
   return (
      <div className="searchbar-container">
         <input onChange={handleChange} type='search' value = {id} className="searchbar-input" />
         <button onClick={() => onSearch(id)} className="searchbar-button">Agregar</button>
         <button onClick={() => onSearch(Math.floor(Math.random()*826)+1)} className="searchbar-button-rndm">Agregar personaje aleatorio</button>
      </div>
   );
}
