import React from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import HoverInfo from './components/HoverInfo';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className='container'>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
    </Router>
    <HoverInfo /> 
    <Form />
    </div>
  );
}


export default App;
