import React from 'react'
import BodyPart from '../components/BodyPart'


const horizontalbar = (props) => {
  return (
    <div className='makehorizontal'>
        {props.data.map((item) => (
            <section key={item || item.id}  title={item || item.id} itemID={item || item.id} ><BodyPart item={item} bodyPart={props.BodyPart} setBodyPart={props.setBodyPart}/></section>
        ))}
    </div>
  )
}

export default horizontalbar
