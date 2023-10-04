import React from 'react';

// import BodyPartImage from '../assets/icons/body-part.png';
// import TargetImage from '../assets/icons/target.png';
// import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target } = exerciseDetail;

//   const extraDetail = [
//     {
//       icon: BodyPartImage,
//       name: bodyPart,
//     },
//     {
//       icon: TargetImage,
//       name: target,
//     },
//     {
//       icon: EquipmentImage,
//       name: equipment,
//     },
//   ];

  return (
    <div >
      <img src={gifUrl} alt={name} loading="lazy" style={{width:"200px",height:"200px"}}/>
      <div >
        <section style={{fontWeight:"700",textTransform:"capitalize"}}>
          {name}
        </section>
        <section style={{ fontSize: "20px", color:"#4F4C4C"}}>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </section>
        {/* {extraDetail?.map((item) => (
          <div key={item.name} direction="row" gap="24px" alignItems="center">
            <button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </button>
            <section textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </section>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Detail;