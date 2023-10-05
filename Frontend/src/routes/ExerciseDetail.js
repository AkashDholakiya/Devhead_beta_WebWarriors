import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import { exerciseOptions, fetchData } from './utils/fetchData';
import Detail from '../components/Detail';
import Data1 from "./Data1";

const ExerciseDetail = (props) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  props.setProgress(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    props.setProgress(50)
    const fetchExercisesData = async () => {
      // const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseDetailData = Data1.filter((item) => item.id === id);
      const exerciseDetail = exerciseDetailData.length > 0 ? exerciseDetailData[0] : null;
      setExerciseDetail(exerciseDetail);
      console.log(exerciseDetail);
      props.setProgress(100)
    };

    fetchExercisesData();
    //eslint-disable-next-line
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;
  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
    </div>
  ); 
};

export default ExerciseDetail;