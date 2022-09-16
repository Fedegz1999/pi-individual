import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountryDetail } from '../../redux/actions'
import './countryDetails.css'


function CountryDetails(props) {
let url = props.match.params.id;
    let detail = useSelector(state => state.countryDetail)
    let dispatch = useDispatch();
   
console.log(detail.activities)
let coincidencias = detail.activities

    useEffect(() => {
        dispatch(getCountryDetail(url))        
    },[dispatch, url])
    

    return (
        <div className='Background'>
            
            <div className="asd">
            
                <div className="Cardback">

                
                    <div className="Name">
                        <h4>{detail.name}</h4>
                    </div>

                
                    <div className="Img">
                        <img src={detail.img} alt="IMG NOT FOUND"/>
                    </div>


                    <div className="ID">
                        <span>{detail.id}</span>
                    </div>


                    <div className="Capital">
                        <span>Capital: {detail.capital}</span>
                    </div>


                    <div className="Continent">
                        <span>Continent: {detail.continent}</span>
                    </div>


                    <div className="Subregion">
                        <span>Subregion: {detail.subregion}</span>
                    </div>


                    <div className="Area">
                        <span>Area: {detail.area}</span>
                    </div>


                    <div className="Population">
                        <span>Population: {detail.population}</span>
                    </div>

                    </div>
                    


                        {detail.activities ? 
                    <div className='activities2'>
                                <h1>TOURIST ACTIVITIES:</h1> 
                                {coincidencias?.map((act)=> { 
                                    return(
                                 <p>
                                  <p>Activity's name: {act.name} </p>                        
                                  <p>Difficulty: {act.difficulty}</p> 
                                  <p>Duration: {act.duration}</p> 
                                  <p>Season: {act.season}</p> 
                                  <hr className='hr' />
                                  </p>
                                    )                                                                                                     
                                                             
            }
                  )}                                               
                    </div>
                    : ""
}               
</div>
            </div>   
                    
    )
    }
    
                    
                    

export default CountryDetails