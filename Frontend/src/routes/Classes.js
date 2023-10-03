import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/classes.css";
// import {exerciseOptions, fetchData } from "./utils/fetchData";
import Horizontalbar from "./horizontalbar";
import Exercises from "../components/Exercises";
import Data1 from "./Data1";
import Data2 from "./Data2";

function Classes(){
  const [scroll, setScroll] = useState(false);
  const scrollup = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    })
  }
  window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
      setScroll(true)
    }else{
      setScroll(false)
    }
    })

    const [search,setSearch] = useState("");
    const [exercise,setExercise] = useState([]);
    const [bodyPart,setBodyPart] = useState('all');  
    const [bodyParts,setBodyParts] = useState([]);

    useEffect(() => {
      const fethBodyPart = async () => {
        // cosnt bodyPartData = await fetchData("https://exercisedb.p.rapidapi.com/bodyparts",exerciseOptions); 
        const bodyPartData = Data2;  
        setBodyParts(['all', ...bodyPartData]);
      }
      let randomData = Data1.sort(() => Math.random() - 0.5);
      setExercise(randomData.slice(0, 48));
      fethBodyPart();
    },[])

    const handle = async () => {
      if(search){
        // const exereciseData  = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=100",exerciseOptions);
        const exereciseData = Data1;
        console.log(exereciseData);

        const searchedExercise = exereciseData.filter(
          (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
          )
          
        // console.log(searchedExercise);
        setSearch("");
        setExercise(searchedExercise);
      }
    }


    return(
      <div className="clink">
        {scroll && <i onClick={scrollup} className={`scroller fade-in-scroller fa-solid fa-arrow-up`}></i>}
        <Navbar />
        <div className="section">
          <h1 className="inside-head">Classes</h1>
        </div>
        <div className="form-section my-5">
            <input className="finput" type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercises here" aria-label="Search" />
            <button className="btn btn-outline-primary" onClick={handle}>Search</button>
          </div>
          <p style={{textAlign:'center',fontSize:'20px'}}> Select the options from the below Horizontalbar to check it's corresponding exercises as per your wish or you can search on the above searching bar</p>
          <Horizontalbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          <Exercises exercise={exercise} setExercise={setExercise} bodyPart={bodyPart}/>
      </div>
    )
  }
  export default Classes;
