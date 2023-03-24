import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Detail() {
    const {id} = useParams();//useParams nos trae especificamente el parametro con el que trabaja el link o route
    const [character, setCharacter] = useState({}); //es necesario crear otro character ya que con axios los traemos de a uno.
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
return (
    <div>
        <h1>Detail</h1>
        <h2>Name: {character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin?.name}</h2>
        <img src={character.image} alt='character.name'/> 
    </div>
);
}
