import "../style/HeroStyles.css";
import { Link } from "react-router-dom";
import chatbot from "./images/chatbot.png";
import ExerOfDay from "./ExerOfDay";

function Hero(props){
  return(
    <>
    <div className={props.cName}>
      <img alt="homeImg" src={props.heroImg} />
        {localStorage.getItem("token") && <ExerOfDay setter={props.setter}/>}
      <div className='hero-text'>
        <h2>{props.title}</h2>
        <h1>{props.text}</h1>
        <h3>{props.text2}</h3>
        {!localStorage.getItem('token') && <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>}
        {localStorage.getItem('token') && <Link to="/classes" className={props.btnClass}>Go to classes</Link>}
      </div>
        {localStorage.getItem('token') && <Link to="https://motivational-coach-ai-chatbot-37e50e.zapier.app/motivational-coach-ai-chatbot" target="_blank" className="chatbot">
        {props.botvisible && <div class="chat-bubble">
            <p>Ask me for help... Do you have query regarding nutrition plan?</p>
        </div>}
          <img src={chatbot} alt="ChatBot" />
          </Link>}
    </div>
    </>
  );
}
export default Hero;