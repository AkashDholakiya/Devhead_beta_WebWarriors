import "./styles.css";
import {Route , Routes} from "react-router-dom";
import Home from "../src/routes/Home";
import About from "../src/routes/About";
import Classes from "../src/routes/Classes";
import Contact from "../src/routes/Contact";
import Login from "../src/routes/Login";

export default function App() {
  return (
    <div className="App">
     <Routes>
       <Route  path="/"  element={<Home />} />
       <Route  path="/about"  element={<About />} />
       <Route  path="/classes"  element={<Classes/>} />
       <Route  path="/contact"  element={<Contact/>} />
       <Route path="/login" element={<Login/>} />
     </Routes> 
      
    
    </div>
  );
}
