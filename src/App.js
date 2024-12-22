import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>

      {/* <Navbar title="textutils" aboutText="About Us" /> */}
      {/*<Navbar />*/}
      {/* Navbar.defaultProps functionality is remove in react 18v */}

      {/* <Router> */}
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}

            {/* 
            use "exact", Otherwise it match first component and show and we couldn't find why it do.
            1. /users --> Component 1
            2. /users/home --> Component 2
             */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
          {/* </Routes> */}

          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
