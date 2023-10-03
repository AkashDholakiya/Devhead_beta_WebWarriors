import "../style/Homeclass.css";
function classdata(props){
     return (
        <div className="c-card">
          <div className="c-image">
           <img src={props.image} alt="image"/>
          </div>
          <h4>{props.heading}</h4>
        </div>
     )
}