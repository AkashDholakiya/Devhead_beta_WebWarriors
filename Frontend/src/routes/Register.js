import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../style/HeroStyles.css'

const Register = (props) => {
    const navigate = useNavigate();
    const [val,setVal] = useState({username : '',email : '',password : ''});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/v1/auth/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            }, 
            body:JSON.stringify(val)
        }) 
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.token)
            props.showAlert("Signup Successful","success")
            navigate('/')
        }else{
            props.showAlert("Invalid Credentials","danger")
            console.log("Invalid Credentials");
        }
    }
    const HandleChange = (e) => {
        setVal({...val,[e.target.name]:e.target.value})
    }
  return (
                
    <div>
        <Navbar />
        <img className='hero' src="https://images.unsplash.com/photo-1606335544665-96055053b5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Fitness Img"/>
        <div className="hero-text">
            <h1>Signup</h1>
            <form className='myform' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label"><h3>Username :</h3></label>
                    <input type="username" className="form-control" value={val.username} onChange={HandleChange} id="username" name="username" aria-describedby="usernameHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><h3>Email :</h3></label>
                    <input type="email" className="form-control" value={val.email} onChange={HandleChange} id="email" name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"><h3>We'll never share your email with anyone else.</h3></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><h3>Password</h3></label>
                    <input type="password" className="form-control" value={val.password} onChange={HandleChange} id="password"  name='password'/>
                </div>
                <div className="container">
                    <button type="submit" className="show my-2">Signup</button>
                </div>
                <div className='my-2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <h3 className='mx-2'>Already Have an Account?</h3><p className='link' onClick={() => {
                    navigate('/Login')}} style={{marginTop:'7px'}}>Login</p>
                </div>
            </form>
            </div>
         </div>
  )
} 
 
export default Register;
