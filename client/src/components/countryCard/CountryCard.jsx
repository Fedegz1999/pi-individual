import { Link } from 'react-router-dom'
import './countryCard.css'

const CountryCard = ({name, continent, img, id, population }) => {
 return (
        <Link to={`/countries/${id}`}>
            
    <div className='Cardback'>

        <div className="Nombre">
            <span >{name}</span>
        </div>


        <div className='Continente'>
            <p>{"Continent: "}{continent}</p>        
        </div>

        <div className='Population'>
            <p>{"Population: "}{population}</p>        
        </div>

        <div className='Image'>
            <img width={275} height={175} src={img} alt={"IMG NOT FOUND"}/>
        </div>


    </div>
        </Link>
  )
}

export default CountryCard