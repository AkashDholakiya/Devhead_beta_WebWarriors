import './App.css';
import React,{useState} from 'react';
import Alert from './components/Alert';
import Home from './components/home';
import {
  Router,
  Routes,
  Route,
}from 'react-router-dom';

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
  }
  return (
    <div className="App">  
      <Router>
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<Home alert={showAlert}/>} />
      </Routes>
      </Router>
      <h1>FitPal</h1>
    </div>
  );
}

export default App;
