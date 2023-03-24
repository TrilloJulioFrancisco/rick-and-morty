import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import FormLogin from './components/Form/FormLogin.jsx';
/* 
const [state, setState] = useState(initialState);
Donde initialState es el valor inicial que deseas asignar al estado y 
state y setState son la variable de estado y la función para actualizarla respectivamente.
*/
function App() {
   //! use states, variables:
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const EMAIL = '123';
   const PASSWORD = '123';


   //! HOOKS:
   React.useEffect(() => {
      !access && navigate('/');
   }, [access]);
   const { pathname } = useLocation(); //useLocation trae muchos datos, entre ellos pathname el cual nos dice en cual / estamos ubicados. traemos solo ese dato 
                                       //porque ese es el que necesitamos aca

   //! FUNCIONES:
   function onSearch(id) {
      if(id>0 && id<827)
      {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         const characterExists = characters.some((char) => char.id === data.id);
         if(!characterExists)
         {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         } else 
         {
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
   
   function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   } else{
      alert("Datos incorrectos");
   }
};

   //! aca esta el return
   return (
      <div className='App'>
         {pathname !== "/" && <NavBar onSearch={onSearch}     />}
         <Routes>
            {/* <Route path="/" element={home} /> */}
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/" element={<FormLogin login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
         </Routes>
         
      </div>
   );
}

export default App;
