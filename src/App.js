
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }
  const togglemode =()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode Enable","success")
      document.title='TextUtils - Light Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enable","success")
      document.title='TextUtils - Dark Mode'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
      <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert} />
        {/* <div className="container my-3">
          <Textform alert={showAlert} heading="Enter your String to Analyze" mode={mode} />
        </div> */}
        {/* <About/> */}


        <Routes>
          <Route exact path="/" element={<div className="container my-3">
          {/* <div className="container my-3"> */}
          <TextForm disp="Please enter the text below" mode={mode} showAlert={showAlert}/>
          {/* </div> */}
        </div>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
        
    </>
  );
}

export default App;


