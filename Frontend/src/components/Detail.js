import React from 'react';
import "../style/Exerdetail.css"

const Detail = ({ exerciseDetail }) => {
  const { bodyPart,instructions, gifUrl, name, target } = exerciseDetail;

  return (
    <div className='mainDetail'>
      <h1 style={{fontFamily:"fantasy",letterSpacing:"0.11rem"}}>Exercise Detail</h1>
    <div className='detailclass'>
      <img src={gifUrl} alt={name} loading="lazy" style={{borderRadius:"40px",width:"450px",height:"450px",marginRight:"200px"}}/>
      <div className='flexydetail'>
          <h1 className='flexydetail'>BodyPart : {bodyPart}</h1>
        <section className='flexydetail'>
          <h3>Exercise Name : {name}</h3>
        </section>
          <p>&rarr; {instructions}</p>
          <p>&rarr; Exercises keep you strong.{' '} {name} bup is one of the best exercises to target your {target}. It will help you improve your{' '} mood and gain energy.</p>
      </div>
    </div>
  </div>
  );
};

export default Detail;