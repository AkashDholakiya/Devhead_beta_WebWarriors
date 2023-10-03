import { useEffect, useState } from "react";
import "../style/NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const  Navbar = (props) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const handleClick = () =>{
    setClicked(!clicked)
  }
  const Logout = () => {
    localStorage.removeItem('token');
    props.showAlert("Logged out Successfully","success")
    setIsLoggedin(false);
    navigate('/Login');
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    document.getElementById('2').style.display = localStorage.getItem('token') ? 'block' : 'none';
    if(token){
      setIsLoggedin(true);
    }
  },[])
    
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">FitPal</h1>
       <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
       </div>

       <ul className={clicked ? "nav-menu active" : "nav-menu"}>
         {MenuItems.map((item,index)=>{
           return(
           <li key={index} id={index}>
           <Link className ={item.cName} to={item.url}>
             <i className={item.icon}>
              </i>{item.title}</Link>
           </li>

           )
         })}
         {!isLoggedin && <button onClick={() => navigate('/Signup')}>Sign Up</button>}
          {isLoggedin && <button onClick={Logout} >Logout</button>}
         </ul>
      </nav>
    )
}
export default Navbar;