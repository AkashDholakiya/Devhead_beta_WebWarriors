import "../style/HeroStyles.css";

function Hero(props){
  return(
    <>
    <div className={props.cName}>
      <img alt="homeImg" src={props.heroImg} />
      <div className='hero-text'>
        <h2>{props.title}</h2>
        <h1>{props.text}</h1>
        <h3>{props.text2}</h3>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
    </>
  );
}
export default Hero;