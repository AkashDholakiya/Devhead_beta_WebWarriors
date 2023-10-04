import React from 'react'
import BodyPart from '../components/BodyPart'


const horizontalbar = ({data,setBodyPart,bodyPart}) => {
  return (
    <div className='makehorizontal'>
        {data.map((item) => (
            <section key={item || item.id}  title={item || item.id} itemID={item || item.id} ><BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/></section>
        ))}
    </div> 
  )
}

export default horizontalbar
