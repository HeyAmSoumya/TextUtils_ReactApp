
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route

// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light') // this for crating sate.. --> "mode"
  const [alert, setAlert] = useState(null)



  // in here i take an function while ahve two parameter msg nad type
  // this function set the alert message 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  // ==========[ this for the {dark,light} theme ] =====  // 

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#393939';
      showAlert("Dark mode is enabled ", "success")
      document.title = "TextUtil - Dark Mode"


      // =====  [ This For the change the title an interval of time..]   ========= //

      // setInterval(() => {
      //   document.title = "Virus Waring!!!"

      // }, 2000);

      // setInterval(() => {
      //   document.title = "Dowanloade TextUtils Now"

      // }, 1500);

      // =====  [ This For the change the title an interval of time..]   ========= //

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled ", "success")
      document.title = "TextUtil - Light Mode"

    }
  }

  // ==========[ this for the {testing} theme ] =====  // 
  // const toggleMode1 = () => {
  //   if (mode === 'light') {
  //     setmode('dark')
  //     document.body.style.backgroundColor = '#381D2A';
  //     showAlert("Dark mode is enabled ", "success")
  //   }
  //   else {
  //     setmode('light')
  //     document.body.style.backgroundColor = '#FFA552';
  //     showAlert("Light mode is enabled ", "success")

  //   }
  // }


  // ==========[ this for the {dark,light} theme ] =====  // 


  // ==========[ this for the {blue , dark blue} theme ] =====  // 

  // const toggleMode2 = () => {
  //   if (mode === 'light') {
  //     setmode('dark')
  //     document.body.style.backgroundColor = '#65433F';
  //     showAlert("Dark mode is enabled ", "success")
  //   }
  //   else {
  //     setmode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode is enabled ", "success")

  //   }
  // }



  return (
    <>
      {/* <Router> */}
      {/* need to add-->>   // toggleMode1={toggleMode1} toggleMode2={toggleMode2} */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About /> */}
        {/* </Route>
            <Route exact path="/"> */}
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}></TextForm>
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>


  );
}

export default App;
