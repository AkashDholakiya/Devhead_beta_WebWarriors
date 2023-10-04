import React from 'react'
import Icon from '../components/images/gymicon.png'
// import { useState } from 'react'

const BodyPart = ({item,bodyPart,setBodyPart}) => {

  return (
    <div>
      <div className="container mx-4 scrollItem" style={{
        borderTop : BodyPart === item ? '4px solid white' : '',
        backgroundColor: 'black',
        width:'270px',
        height:'280px',
        cursor:'pointer',
        gap:'47px'
      }}
      onClick={() => setBodyPart(item)}
      >
        <img src={Icon} alt="GymIcon" style={{width:'80px', height:'80px',margin:'40px 40px'}}/>
        <p>{item}</p>
        </div>  
    </div>
  )
}
         
export default BodyPart
