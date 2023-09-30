import "./style/styles.css";
import {Route , Routes} from "react-router-dom";
import Home from "../src/routes/Home";
import About from "./routes/About";
import Classes from "./routes/Classes";
import Contact from "./routes/Contact"
import Login from "./routes/Login";
import Signup from "./routes/Register";

export default function App() {
  return (
    <div className="App">
     <Routes>
       <Route  path="/"  element={<Home />} />
       <Route  path="/about"  element={<About />} />
       <Route  path="/classes"  element={<Classes/>} />
       <Route  path="/contact"  element={<Contact/>} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Signup" element={<Signup />} />
     </Routes> 
    </div>  
  );
}
