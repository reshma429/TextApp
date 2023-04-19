import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onSwitchAction = () => {
      setIsSwitchOn(!isSwitchOn);
    };

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
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextApp" mode={mode} toggleMode={toggleMode} onSwitchAction={onSwitchAction} isSwitchOn={isSwitchOn} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about" element={<About mode={mode} />}>

            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextApp - word counter, character counter, remove extra spaces" mode={mode} />}>

            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
