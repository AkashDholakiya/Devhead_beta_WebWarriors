import React from 'react';

import HorizontalScrollbar from '../routes/horizontalbar';
import Loader from './Spinner';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div >
    <section  style={{fontWeight:"700",color : "#000" }}>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </section>
    <div direction="row" style={{ padding: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </div>
    <section  style={{fontWeight:"700",color : "#000" }}>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </section>
    <div direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </div>
  </div>
);

export default SimilarExercises;