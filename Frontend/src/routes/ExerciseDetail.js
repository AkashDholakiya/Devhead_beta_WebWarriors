import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import { exerciseOptions, fetchData } from './utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilerExercises';
import Data1 from "./Data1";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = () => {
    //   const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

    //   const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseDetailData = Data1.filter((item) => item.id === id);
      const exerciseDetail = exerciseDetailData.length > 0 ? exerciseDetailData[0] : null;
      setExerciseDetail(exerciseDetail);
      console.log(exerciseDetail);

    //   const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      const targetMuscleExercisesData = exerciseDetail.target;

      setTargetMuscleExercises(targetMuscleExercisesData);
      console.log(targetMuscleExercisesData);

    //   const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      const equimentExercisesData = exerciseDetail.equipment;
      setEquipmentExercises(equimentExercisesData);
      console.log(equimentExercisesData);
    };

    fetchExercisesData();
    //eslint-disable-next-line
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  );
};

export default ExerciseDetail;