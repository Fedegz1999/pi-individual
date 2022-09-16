import { useDispatch, useSelector } from 'react-redux'
import { getActivities } from '../../redux/actions'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Activities.css'
import imagen from '../media/Countries.jpg';

function ActivityFilter() {  
    const a = useSelector((state) => state.activities)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])


      

    const actividades = a.map(e =>{
        return {
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season
        }
    })

      


    return (
           
       <div className='activitiesContainer'>
        <img className='img' src={imagen} alt="" />
        <Link to = {'/countries'}> <button className='CO'> COUNTRIES </button> </Link>
        <Link to = {'/activities/create'}> <button className='En'> CREATED ACTIVITY </button> </Link>
                                    <h3 className='titulo'>ACTIVITIES</h3>
                                   <div className="a">
                                    {actividades?.length > 0 ? actividades?.map(e => {
                                        
                                        return  (
                                            <div key={e.id}>
                                                <p>Name: {e.name}</p>
                                                <p>Difficulty: {e.difficulty}</p>
                                                <p>Duration: {e.duration}</p>
                                                <p>Season: {e.season}</p>
                                                <hr></hr>
                                            </div>
                                        )
                                        
                                    })
                                    
                                    : <p>Without activities</p>}
                                    </div>

                                    
</div>
    )
    
}

export default ActivityFilter
