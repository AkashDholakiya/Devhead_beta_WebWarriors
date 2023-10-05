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
import ExerciseDetail from "./routes/ExerciseDetail";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const [alert,setAlert] = useState(null);
  const [botvisible, setBotvisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [setter,setSetter] = useState(true);
    setTimeout(() => {
        setBotvisible(false);
      }, 2000);
    setTimeout(() => {
      setSetter(false);
    }, 3000);
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
      <LoadingBar 
          height={4}
          color='blue'
          progress={progress}
      />
        <Routes>
          <Route  path="/" element={<Home setProgress={setProgress} showAlert={showAlert} setter={setter} botvisible={botvisible}/>} />
          <Route  path="/about" element={<About setProgress={setProgress} />} />
          <Route  path="/classes"  element={<Classes setProgress={setProgress}/> } />
          <Route  path="/contact"  element={<Contact setProgress={setProgress}/>} />
          <Route path="/Login" element={<Login showAlert={showAlert} setProgress={setProgress}/>} />
          <Route path="/Signup" element={<Signup showAlert={showAlert} setProgress={setProgress}/>} />
          <Route path="/exercise/:id" element={<ExerciseDetail setProgress={setProgress}/>} />
        </Routes> 
        <div className="alert">
            <Alert alert={alert}/>
        </div>
    </div>  
    </>
  );
}
