import "../style/HeroStyles.css";
import ChatBot from "../components/images/chatbot.png"
import { Link } from "react-router-dom";

function Hero(props){
  return(
    <>
    <div className={props.cName}>
      <img alt="homeImg" src={props.heroImg} />
      <div className='hero-text'>
        <h2>{props.title}</h2>
        <h1>{props.text}</h1>
        <h3>{props.text2}</h3>
        {!localStorage.getItem('token') && <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>}
        {localStorage.getItem('token') && <Link to="/classes" className={props.btnClass}>Go to classes</Link>}
      </div>
        {localStorage.getItem('token') && <Link to="https://motivational-coach-ai-chatbot-37e50e.zapier.app/motivational-coach-ai-chatbot" target="_blank" className="chatbot"><img src={ChatBot} alt="ChatBot" className="chatbot"/></Link>}
    </div>
    </>
  );
}
export default Hero;