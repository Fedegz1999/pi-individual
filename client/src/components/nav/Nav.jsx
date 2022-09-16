import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { searchByName } from '../../redux/actions';
import './Nav.css'




const Nav = () => {
    const dispatch = useDispatch()
    const [busqueda, setBusqueda] = useState("")
    
    
    const search = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
    }
    
    const result = (e) => {
        e.preventDefault()
        dispatch(searchByName(busqueda))
    }
    

    return (
        <div className='buscador'>
        <form onSubmit={result}> 
        <input type="search" className='input' placeholder="Search country..."  onClick={(e) => search(e)}  onChange={(e) => search(e)} value={busqueda} > 
        </input> 
       <button className='boton'>Search</button> 
        </form>

    </div>
  )
}

export default Nav
