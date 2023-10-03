import Hero from "../components/Hero";

import Footer from "../components/Footer"
import Homeabout from '../components/Homeabout';
import Navbar from "../components/Navbar";

function Home(){

  return(
    <>
    <Navbar showAlert={props.showAlert}/>
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1606335544665-96055053b5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    title="BUILD UP YOUR"
    text="STRENGTH"
    text2="Build Your Body and Fitness with Proffesional Touch"
    buttonText="Join Us"
    url ="/Signup"
    btnClass="show"
    />
    <Homeabout/>
  
    <Footer/>
    </>
  );
}
export default Home;