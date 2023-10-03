import React from 'react'
import { Link } from 'react-router-dom'


const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
        <div class="card" style={{width: "18rem"}}>
            <img src={exercise.gifUrl} class="card-img-top" alt={exercise.name} loading='lazy'/>
            <div class="card-body">
                <h5 class="card-title">{exercise.name}</h5>
                <button className='btn btn-outline-primary'>{exercise.bodyPart}</button>
                <button className='btn btn-outline-primary'>{exercise.target}</button>
            </div>
        </div>
      {/* <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/> */}
    </Link>
  )
}

export default ExerciseCard
