import "../style/HeroStyles.css";
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
      </div>
    </div>
    </>
  );
}
export default Hero;