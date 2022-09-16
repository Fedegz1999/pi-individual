import React from 'react'
import {orderedCountries, filterContinents} from '../../redux/actions'
import { useDispatch } from 'react-redux';
import './Order.css'


const Order = () => {
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(orderedCountries(e.target.value))
    }

    
      function continente(e){
          dispatch(filterContinents(e.target.value))
      }

  return (
    <div className='botones'>
<select onChange={e => onSelectChange(e)}>
                    <option value="Order">Order A-Z</option>
                    <option value="ASCENDENT">Ascendent</option>
                    <option value="DESCENDENT">Descendent</option>
                </select>

<select onChange={e => onSelectChange(e)}>
                <option value="Order">Order by poblation</option>
                <option value="HIGHPOBLATION">High Poblation</option>
                <option value="LOWPOBLATION">Low Poblation</option>
            </select>

            <select onChange={e => continente(e)}>
                <option value="Order">Order by continent</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
            </select>
    </div>
  )
}

export default Order


    
        
    
        
    
