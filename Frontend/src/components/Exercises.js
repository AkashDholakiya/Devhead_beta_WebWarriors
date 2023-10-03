import React from 'react'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercise,setExercise,bodyPart}) => {
  return (
    <div className='exercises'>
        <h1 style={{fontWeight:800,textAlign:'center',margin:'50px 40px'}}>Showing Results</h1>
        <div className="mexer">
            {exercise.map((exer,index) => (
                <ExerciseCard key={index} exercise={exer}/>
            ))}
        </div>
    </div>
  )
}

export default Exercises
    