import React from 'react'
import img from './images/spinner.gif'

const Spinner = () => {
  return (
    <div>
      <img src={img} alt="Loading.." style={{height:'20px',width:'20px'}}/>
    </div>
  )
}

export default Spinner
