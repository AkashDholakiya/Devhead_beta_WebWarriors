import "./style/styles.css";
import "./style/HeroStyles.css";
import {Route , Routes} from "react-router-dom";
import Home from "../src/routes/Home";
import About from "./routes/About";
import Classes from "./routes/Classes";
import Contact from "./routes/Contact"
import { useState } from "react";
import Alert from "./components/Alert";
import Login from "./routes/Login";
import Signup from "./routes/Register";

export default function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <div className="App">
        <Routes>
          <Route  path="/"  element={<Home showAlert={showAlert}/>} />
          <Route  path="/about"  element={<About />} />
          <Route  path="/classes"  element={<Classes/>} />
          <Route  path="/contact"  element={<Contact/>} />
          <Route path="/Login" element={<Login showAlert={showAlert}/>} />
          <Route path="/Signup" element={<Signup showAlert={showAlert}/>} />
        </Routes> 
        <div className="alert">
            <Alert alert={alert}/>
        </div>
    </div>  
    </>
  );
}
