import { useState } from "react";
import Home  from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Index"; 
import TravelList from "./TravelList";
import Destination from "./Destination";
import DestForm from "./DestForm";
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import Author from './components/Author';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TravelList" element={<TravelList />} />
          <Route path="/destination/:title" element={<Destination />}/>
          <Route path="/destinationForm" element={<DestForm/>}/>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blog-author" element={<Author />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
