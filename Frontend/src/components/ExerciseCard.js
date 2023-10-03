import React from 'react'
import { Link } from 'react-router-dom'


const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
        <div class="card" style={{width: "18rem"}}>
            <img src={exercise.gifUrl} class="card-img-top" alt={exercise.name} loading='lazy'/>
            <div className="card-body"> 
                <h5 className="card-title">{exercise.name}</h5>
                <button className='btn btn-outline-primary'>{exercise.bodyPart}</button>
                <button className='btn btn-outline-primary'>{exercise.target}</button>
            </div>
        </div>
    </Link>
  )
}

export default ExerciseCard
