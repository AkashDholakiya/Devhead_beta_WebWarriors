import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/classes.css";
import {exerciseOptions, fetchData } from "./utils/fetchData";
import Horizontalbar from "./horizontalbar";
import Exercises from "../components/Exercises";
import Data1 from "./Data1";
// import Data2 from "./Data2";

function Classes(props){
  const [scroll, setScroll] = useState(false);
  const [load, setLoad] = useState(false);
  const [search,setSearch] = useState("");
  const [exercise,setExercise] = useState([]);
  const [bodyPart,setBodyPart] = useState('all');  
  const [bodyParts,setBodyParts] = useState([]);


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


    useEffect(() => {
      const fetchBodyParts = async () => {
        props.setProgress(0)
        const bodyPartData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions); 
        setLoad(true);
        // const bodyPartData = Data2;  
        setBodyParts(['all', ...bodyPartData]);
        setLoad(false);
        props.setProgress(100)
      } 
      let randomData = Data1.sort(() => Math.random() - 0.5);
      setExercise(randomData.slice(0, 8));
      fetchBodyParts();
      //eslint-disable-next-line
    },[])

    const handle = async () => {
      props.setProgress(50);
      if(search){
        setLoad(true);
        const exereciseData  = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=10000",exerciseOptions);
        // const exereciseData = Data1;

        const searchedExercise = exereciseData.filter(
          (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
          )
          window.scrollTo({ top: 1050, left: 100, behavior: 'smooth' });
          props.setProgress(100);
        setSearch("");
        setExercise(searchedExercise);
        setLoad(false);
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
          <Horizontalbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
          <Exercises exercise={exercise} setProgress={props.setProgress} setExercise={setExercise} bodyPart={bodyPart} loading={load}/>
      </div>
    )
  }
  export default Classes;
