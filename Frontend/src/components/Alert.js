
import "./styles.css";
import {Route , Routes} from "react-router-dom";
import Home from "../src/routes/Home";
import About from "../src/routes/About";
import Classes from "../src/routes/Classes";
import Contact from "../src/routes/Contact";
import Login from "../src/routes/Login";
import React from 'react'


function Alert(props) {
    const capitali = (word) => {
        if(word === "danger")word = "error";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (

    <div className="App">
     <Routes>
       <Route  path="/"  element={<Home />} />
       <Route  path="/about"  element={<About />} />
       <Route  path="/classes"  element={<Classes/>} />
       <Route  path="/contact"  element={<Contact/>} />
       <Route path="/login" element={<Login/>} />
     </Routes> 
      
    

    <div style={{textAlign: 'center'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitali(props.alert.type)}</strong>: {props.alert.msg}
      </div>}

    </div>
  )
}

export default Alert