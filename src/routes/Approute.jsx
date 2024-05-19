import React from 'react';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Starts from "../pages/Starts";
import Pricing from '../pages/Pricing';
import Contacts from "../pages/Contacts";
import axios from 'axios';

function App() {
  axios.get('http://localhost:8080/api/endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  return (
   
    <BrowserRouter>
            <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/starts" element={<Starts/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/contact" element={<Contacts/>}/>
           </Routes>
    </BrowserRouter>       
  );
}

export default App;
