import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
import Alert from './components/Alert';
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
const [mode, setMode] = useState('light');// Whether dark mode is enable or set
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
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}

  return (
    <>
    <Router>
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} aboutText="About "/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
  <Routes >
    <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to  below" mode={mode} toggleMode={toggleMode}/>} />
    <Route exact path="/about" element={<About />} />
  </Routes>

      </div>
    </Router>
      </>
  );
};

export default App;
