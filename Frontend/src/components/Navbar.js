import { useEffect, useState } from "react";
import "../style/NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import {Link, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom"


const  Navbar = (props) => {
  const navigate = useNavigate();
  const locate = useLocation();
  const [clicked, setClicked] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const handleClick = () =>{
    setClicked(!clicked)
  }
  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
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
           <Link className ={`${item.cName} ${locate.pathname === item.url ? "makeactive" : ''}`} to={item.url}>
             <i className={item.icon}>
              </i>{item.title}</Link>
           </li>

           )
         })}
         {!isLoggedin && <button onClick={() => navigate('/Signup')}>Sign Up</button>}
         {isLoggedin && <div className="dropdown">
          <Link className="nav-links" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user"></i>{localStorage.getItem('username')}</Link>
          <ul className="dropdown-menu dropd">
            <li><Link className="dropdown-item dropd-item" to="">Profile</Link></li>
            <li><Link className="dropdown-item dropd-item" to="#">Favourite Excercises</Link></li>
            <li><Link className="dropdown-item dropd-item" onClick={Logout} >Logout</Link> </li>
          </ul>
        </div>}
         </ul>
      </nav>
    )
}
export default Navbar;