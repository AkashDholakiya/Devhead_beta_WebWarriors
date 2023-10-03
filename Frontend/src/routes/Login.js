import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  "../style/login.css";

const Login = (porps) => {
    const navigate = useNavigate();
    const [val,setVal] = useState({username : '',email:'',password : ''});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/v1/auth/login',{
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
            navigate('/')
        }else{
            console.log("Invalid Credentials");
        }
    }
    const HandleChange = (e) => {
        setVal({...val,[e.target.name]:e.target.value})
    }
  return (
    <div className='login-container'>
            <h1 className='my-4'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username/Email : </label>
                    <input type="name" className="form-control" value={val.username} onChange={HandleChange} id="username" name="username" aria-describedby="usernameHelp" />
                        <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={val.password} onChange={HandleChange} id="password"  name='password'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}

export default Login
