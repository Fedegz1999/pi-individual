import React from 'react'
import './landingEstilo.css'
import video from '../media/videoLanding.mp4';
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
      <div className="landingContainer">
        <video className="video" src={video} autoPlay loop muted />
              
              <p >THE COUNTRY WEB APP</p> 
          <Link to = {'/countries'}> <button className='BOTON'> START! </button> </Link>
        </div>  
    )
  }
  
  export default LandingPage