import React, { useEffect } from 'react'
import ExerciseCard from './ExerciseCard'
import Spinner from "./Spinner";
import Data1 from "../routes/Data1";

const Exercises = ({exercise,setExercise,bodyPart,loading}) => {

  useEffect(() => {
    const fetchExercise = () => {
      let ExerciseData = []
      if(bodyPart === 'all'){
        ExerciseData = Data1;       
      }else{
        ExerciseData = Data1.filter((item) => item.bodyPart === bodyPart);
      }
      setExercise(ExerciseData)
    }
    window.scrollTo({ top: 1050, left: 100, behavior: 'smooth' });
    fetchExercise();
    //eslint-disable-next-line  
  }, [bodyPart])
         
  return (
    <div className='exercises'>
        <h1 style={{fontWeight:800,textAlign:'center',margin:'50px 40px'}}>Showing Results</h1>
        <div className="container ">
            {loading && <Spinner />}
        </div>
        <div className="mexer">
            {exercise.map((exer,index) => (
                <ExerciseCard key={index} exercise={exer}/>
            ))}
        </div>
    </div>
  )
}

export default Exercises
    