import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExerOfDay = (props) => {
    const navigate = useNavigate();
  return (
    <div>
      {props.setter && <div style={{fontSize:"20px",position:"absolute",left:"5px",top:"170px" ,height:"30px", width:"30vw"}}>
        <div class="alert alert-success alert-dismissible  fade show" style={{textAlign:"center"}} role="alert">
        Take me to the Exercises of the day! <span onClick={() => navigate('/classes')} style={{cursor:"pointer",textDecoration:"underline"}}>now</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>}
    </div>
  )
}

export default ExerOfDay
