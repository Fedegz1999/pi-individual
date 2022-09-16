import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './countries.css';
import Paginado from '../paginado/Paginado';
import {orderedCountries, getCountries} from '../../redux/actions'
import Order from '../Order/Order';
import CountryCard from '../countryCard/CountryCard';
import Nav from '../nav/Nav';
import imagen from '../media/Countries.jpg';
import { Link } from 'react-router-dom';

function Country(props){
    let paises = useSelector(state => (state.sortCountries)) 
    const dispatch = useDispatch()

    const [pagina, setPagina] = useState(1)
    const [paginado, setPaginado] = useState(9)

    
    const max = Math.round(paises.length / paginado);
    const indxLastCountry = pagina * paginado;
    const indxFirstCountry = indxLastCountry - paginado;
    const paginasOrdenadas = paises.slice(indxFirstCountry, indxLastCountry)

   
    
    //console.log(busquedas.length)

    function onClick(e){
        e.preventDefault()
        dispatch(getCountries())
      }
    

    useEffect(() => {
        if(!paises.length){
        dispatch(orderedCountries())
        dispatch(getCountries())
        }
    }, [dispatch, paises.length])
    
    
    
    return (
        <div className='countriesContainer'>
            <img src={imagen} alt="!" className='imga'/>       
            <Nav/>
            <Link to = {'/activities'}> <button className='ACT'> ACTIVITIES </button> </Link>
          

         <div className='Botones'>
            <span><Order/>
            </span>
               <button onClick={onClick} className='reset'> RESET COUNTRIES </button>
            </div>

        <div className='cards'>
            {paginasOrdenadas.map(a => {
                return <CountryCard
                key = {a.id}
                name = {a.name}
                id = {a.id}
                continent = {a.continent}
                population = {a.population}
                img = {a.img}       
                />             
            })
        }
            </div >
            <Paginado className='flechas' pagina={pagina} setPagina={setPagina} max={max || paises.length - 1 || paises.length  }></Paginado>
        
        </div>
    )
}

export default Country