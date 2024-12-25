import { useState } from "react";
import Home  from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Index"; 
import TravelList from "./TravelList";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TravelList" element={<TravelList />} />
          {/*<Route path="/BlogList" element={<BlogList />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
