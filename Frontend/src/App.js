import "./styles.css";
import {Route , Routes} from "react-router-dom";
import Home from "../src/routes/Home";
import About from "./routes/About";
import Classes from "./routes/Classes";
import Contact from "./routes/Contact"

export default function App() {
  return (
    <div className="App">
     <Routes>
       <Route  path="/"  element={<Home />} />
       <Route  path="/about"  element={<About />} />
       <Route  path="/classes"  element={<Classes/>} />
       <Route  path="/contact"  element={<Contact/>} />
     </Routes> 
      
    
    </div>
  );
}
