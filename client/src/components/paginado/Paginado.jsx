import React from 'react'
import './Paginado.css'

export const Paginado = ({pagina, setPagina, max}) => {
    

    const lastPage = () => {
       // setInput(input - 1)  
        setPagina(pagina -1)
        };
    
    const nextPage = () => {
      //  setInput(input + 1)
        setPagina(pagina + 1)
    };

  return (
    <div className='flechas'>
    <button onClick={lastPage}disabled={pagina === 1 || pagina < 1}>LAST</button>
    <button onClick={nextPage}disabled={pagina === max}>NEXT</button>
    </div>
  )
}

export default Paginado