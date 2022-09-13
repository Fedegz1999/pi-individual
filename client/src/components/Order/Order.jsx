import React from 'react'
import {orderedCountries, getCountries} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import './Order.css'


const Order = () => {
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(orderedCountries(e.target.value))
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
    </div>
  )
}

export default Order


    
        
    
        
    
