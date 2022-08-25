import React from 'react';
import HttpsRedirect from 'react-https-redirect'
import Form from './components/Form';
import Navbar from './components/Navbar';
import HoverInfo from './components/HoverInfo';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <HttpsRedirect>
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
    </HttpsRedirect>
  );
}


export default App;
