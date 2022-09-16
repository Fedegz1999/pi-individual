import React from 'react'
import './Paginado.css'
import { useState } from 'react';

export const Paginado = ({pagina, setPagina, max}) => {
    const [input, setInput] = useState(1)

    const lastPage = () => {
       setInput(input - 1)  
        setPagina(pagina -1)
        };
    
    const nextPage = () => {
        setInput(input + 1)
        setPagina(pagina + 1)
    };

  return (
    <div className='flechas'>
    <button onClick={lastPage}disabled={pagina === 1 || pagina < 1}>LAST</button>
    <button onClick={nextPage}disabled={pagina === max}>NEXT</button>
    <p>{input} of {max}</p>
    </div>
  )
}

export default Paginado