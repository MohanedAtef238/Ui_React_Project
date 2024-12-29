import { useState } from "react";
import Home  from "./Home";
import FAQs from './FAQs'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Index"; 
import TravelList from "./TravelList";
import Destination from "./Destination";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TravelList" element={<TravelList />} />
          <Route path="/destination/:title" element={<Destination />}/>
          <Route path="/FAQs" element={<FAQs />}/>  
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
