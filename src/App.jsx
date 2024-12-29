import { useState } from "react";
import Home  from "./Home";
import FAQs from './FAQs'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Index"; 
import TravelList from "./TravelList";
import Destination from "./Destination";
import DestForm from "./DestForm";
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import Author from './components/Author';
import Gallery from './Gallery';
import Subgallery from './subgallery';
import Contact from './Contact';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TravelList" element={<TravelList />} />
          <Route path="/destination/:title" element={<Destination />}/>
          <Route path="/FAQs" element={<FAQs />}/> 
          <Route path="/Contact" element={<Contact />}/>  
          <Route path="/destination/:title" element={<Destination />}/>
          <Route path="/destinationForm" element={<DestForm/>}/>
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blog-author" element={<Author />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/subgallery" element={<Subgallery />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
