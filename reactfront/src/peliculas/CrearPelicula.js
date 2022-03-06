// Axios => Libreria de JS para conectar front end con back end => envia datos en direcciones opuestas.
//react-router-dom: libreria para colocar rutas del backend
import axios from 'axios';
import { useState, UseEffect } from 'react/cjs/react.production.min';
import {Link} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';

const URL = 'http://localhost:3000/movie/'

const ComponenteCrearPelicula=()=>{
   
    const[movies, setMovie] = useState([]);
    useEffect(()=>{
        getMovies()
    },[]);

    const getMovies = async()=>{
        const res=await axios.get(URL)
    }

}

export default ComponenteCrearPelicula;