import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { useForm } from './createActivity';
import './createActivities.css'

    
    const initialForm = {
        name: "",
        difficulty: "",
        duration: "",
        season: "", 
        countries: []  
    }
    
    const validationsForm = (form) => {
        let errors = {};
        let regexName =/^[a-zA-Z].*[\s.]*$/g;
        if (!form.name.trim()){
            errors.name = "Activity's name is required"
        } else if (!regexName.test(form.name)){
            errors.name = "Activity's name is incorrect"
        } else if (form.name.trim().length>30){
            errors.name = "Activity's name is too long" 
        } else if (!form.difficulty){
            errors.difficulty = "Difficulty's duration is required"
        } else if (!form.duration){
            errors.duration = "Activity's duration is required"
        } else if (form.season === "Select a season"){
            errors.season = "Activity's season is required"
        }
         
        return errors;
    }



    function CreateActivity() {   
    
    
    const dispatch = useDispatch();
    
    const countries = useSelector((state) => state.countries)

    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleSelect,
        handleDelete
    } = useForm(initialForm, validationsForm)


    useEffect(() => {
        if(!countries.length){
            dispatch(getCountries())
        }
    },[dispatch,countries.length])

  return (
    <div className='DivMay'>
        
        
            
            
        <div className='Box'>
            <h3 className='tit'>CREATE NEW ACTIVITY</h3>
            <form onSubmit={() =>handleSubmit()} className='Form'>
                                       
                    
                    
                    <div className='Inputs'>
                        <label>Activity's name:  </label>
                        <input  type="text" size="20" name="name" onChange={handleChange} value={form.name} onBlur={handleBlur} ></input>
                    </div>
                    {errors.name && <p className='Errors'>⛔  {errors.name}</p> }

                    
                    
                    
                    <div>
                        <label>Difficulty: </label>
                        < select className='IINputs' name="difficulty" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select a difficulty">Select a difficulty</option>
                                    <option value ="1">1-(Very Easy)</option>
                                    <option value="2">2-(Easy)</option>
                                    <option value="3">3-(Medium)</option>
                                    <option value="4">4-(Hard)</option>
                                    <option value="5">5-(Very Hard)</option>
                                </select>
                    </div>
                    {errors.difficulty && <p className='Errors'>⛔ {errors.difficulty}</p> }
                    
                    
                    
                    
                    <div className='Inputs'>
                        <label>Duration: </label>
                        <select className='IInputs'  name="duration" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select a duration">Select a duration</option>
                                    <option value ="1 hr">1 hr</option>
                                    <option value ="1:30 hr">1:30 hr</option>
                                    <option value="2 hr">2 hr</option>
                                    <option value="2:30 hr">2:30 hr</option>
                                    <option value="3 hr">3 hr</option>
                                    <option value="3:30 hr">3:30 hr</option>
                                    <option value="4 hr">4:00 hr</option>
                                    <option value="4:30 hr">4:30 hr</option>
                                    <option value="5:00 hr">5:00 hr</option>
                                    <option value="5:30 hr">5:30 hr</option>
                                    <option value="6:00 hr">6:00 hr</option>
                                    <option value="6:30 hr">6:30 hr</option>
                                    <option value="7:00 hr">7:00 hr</option>
                                    <option value="7:30 hr">7:30 hr</option>
                                    <option value="8:00 hr">8:00 hr</option>
                                    <option value="8:30 hr">8:30 hr</option>
                                    <option value="9:00 hr">9:00 hr</option>
                                    <option value="9:30 hr">9:30 hr</option>
                                    <option value="10:00 hr">10:00 hr</option>
                                    

                                </select>
                    </div>
                    {errors.duration && <p className='Errors'>⛔ {errors.duration}</p>}

                    
                    
                    
                    <div className='Inputs'>
                        <label>Season: </label>
                                <select className='IInputs' name="season" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select a season">Select a season</option>
                                    <option value ="Summer">Summer</option>
                                    <option value="Autumn">Autumn</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                </select>
                        {/* <input type="text" size="20" name="season" onChange={handleChange} value={form.season} onBlur={handleBlur}></input> */}
                    </div>
                    {errors.season && <p>⛔ {errors.season}</p>}

                    
                    
                    
                    <div className='Inputs'>
                        <label>Country: </label>              
                                <select className='IInputs' onChange={(e) => handleSelect(e)}>
                                    {countries?.map((c) => {
                                    return(
                                        <option size="20" key={c.id} name ={c.name} onBlur={handleBlur} >{c.name}</option>
                                    )
                                    })}                     
                                </select>
                    </div>
                    
                    
                    
                    
                    <div >              
                        <input disabled={errors & errors} className='Btn' value='Create' type="submit" onSubmit={handleSubmit}></input>             
                    </div>

            </form>


            <div className='CountrySelectContain'  >
                    
                        
                            {form.countries.map((e) => <ol key={e}  className='ContList'><li><button  onClick={()=>handleDelete(e)}>X</button>{e}</li></ol>)}
                        
                    
            </div>


        </div>
    </div>
  )
}

export default CreateActivity