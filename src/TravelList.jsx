import {useState, useEffect} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line
import { useNavigate } from 'react-router-dom'; // Add this line
import "./assets/Sources/css/TravelList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./assets/Sources/img/Destinations/London2.jpg";
import image2 from "./assets/Sources/img/Destinations/Giza.jpg";
import image3 from "./assets/Sources/img/Destinations/NewYork.jpeg";
import image4 from "./assets/Sources/img/Destinations/Paris.jpeg";
import image5 from "./assets/Sources/img/Destinations/Tokyo.jpeg";
import image6 from "./assets/Sources/img/Destinations/Sydney.jpeg";
import image7 from "./assets/Sources/img/Destinations/Rome.jpeg";

const cardsList = [
  { title: "London, UK", imgSrc: image1, alertTag: "New!" },
  { title: "Giza, Egypt", imgSrc: image2, alertTag: "Hot!" },
  { title: "New York, USA", imgSrc: image3, alertTag: "New!" },
  { title: "Paris, France", imgSrc: image4, alertTag: "Hot!" },
  { title: "Tokyo, Japan", imgSrc: image5, alertTag: "New!" },
  { title: "Sydney, Australia", imgSrc: image6, alertTag: "Hot!" },
  { title: "Rome, Italy", imgSrc: image7, alertTag: "New!" }
]
if(!localStorage.getItem('cards')){localStorage.setItem('cards',JSON.stringify(cardsList))};

function Modal({title}) {
    return (
        <div className="modal fade" id={title} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                    </div>
                    <div className="modal-body">
                        <p> <b>Date: </b> 11/12/2024 - 11/3/2025 </p>
                        <p> <b>Sponsors:</b> <a href="https://www.visitengland.com/">Visit England</a>, <a href="https://www.instapay.eg/">Instapay</a>, Sportofolio ,<a href="https://www.egyptair.com/en/Pages/HomePage.aspx">Egypt Air</a></p>
                        <p> <b>Brief's brief:</b></p>
                        <p>
                            London, the capital city of England, is a vibrant metropolis known for its rich history, diverse culture, and iconic landmarks.
                        </p>
                        <a className="btn btn-outline-primary" id="ModalButton" href="http://127.0.0.1:5500/Pages/Destinations/London.html" role="button"> Full Page </a>
                    </div>
                </div>
            </div>
        </div>   
    );
}

function SearchKit({searchFilter,checkFilter}) {
    const [locationValue,setLocationValue] = useState('All');
    function changeHandleLocation(e){
        setLocationValue(e.target.value);
        searchFilter(e.target.value);
    }

    const [searchValue,setSearchValue] = useState('');
    function changeHandleSearch(e){
        {console.log(e.target.value)}
        setSearchValue(e.target.value);
        searchFilter(e.target.value);
    }

    const[checkAll,setCheckAll] = useState(true);
    const[checkHot,setCheckHot] = useState(false);
    const[checkNew,setCheckNew] = useState(false);

    function changeHandleCheck(e){
        if(e.target.value=='All'){setCheckAll(true);setCheckHot(false);setCheckNew(false);} 
        if(e.target.value=='Hot'){setCheckHot(true);setCheckAll(false);setCheckNew(false);} 
        if(e.target.value=='New'){setCheckNew(true);setCheckAll(false);setCheckHot(false);} 
        checkFilter(e.target.value)
    }

    return(
    <div id='SearchKit'>
            <div id="LSDiv">
                    <select id="LocationSelect" onChange={changeHandleLocation}>
                        <option>All</option>
                        <option>UK</option>
                        <option>USA</option>
                    </select>
                </div>
                <div className="SBContainer">
                    <input type="text"  id="SearchBox" value={searchValue} placeholder="Search For destination . . ." onInput={changeHandleSearch} />
                </div>
                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" value="All" onChange={changeHandleCheck} checked={checkAll}/>
                    <label className="btn btn-outline-primary" htmlFor="btncheck1" >All</label>
              
                    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" value="Hot" onChange={changeHandleCheck} checked={checkHot}/>
                    <label className="btn btn-outline-primary" htmlFor="btncheck2">Hot</label>
              
                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" value="New" onChange={changeHandleCheck} checked={checkNew}/>
                    <label className="btn btn-outline-primary" htmlFor="btncheck3">New</label>
                </div>
    </div>
    );
}

function Card({ title, imgSrc, alertTag }) {
    const navigate = useNavigate(); // Add this line

    function redirectTo(){
        navigate(`/destination/${title}`);
    }

    return (
        <div>
            <div className="wholeCard" onClick={redirectTo}>
                <div className="alert alert-primary" role="alert">
                    <p>{alertTag}</p>
                </div>
                <div className="card">
                    <img src={imgSrc} className="card-img-top" alt={title + " image"} />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    </div>
                </div>
            </div>
        </div>
  );
}

function AddCard(){
    return(
        <button onClick={()=>{location.href='/destinationForm'}} style={{width:'14em',height:'14em',borderRadius:'20px',textAlign:'center',marginTop:'25px'}}>Add Destination</button>
    );
}

function TravelList() {
  let parsed = JSON.parse(localStorage.getItem('cards'));  
  const [cards,setCards] = useState(parsed);
  function SearchFilter(value){
    {console.log(value)};
    if(value === 'All' || value === '') {
        setCards(parsed);
    }
    else{
        let newCards = parsed.filter(card => card.title.toLowerCase().includes(value.toLowerCase()));
        {console.log(newCards)};
        setCards(newCards);
    }
  }

  function CheckFilter(value){
    {console.log(value)};
    if(value === 'All') {
        setCards(parsed);
    }
    else{
        let newCards = parsed.filter(card => card.alertTag.toLowerCase().includes(value.toLowerCase()+"!"));
        {console.log(newCards)};
        setCards(newCards);
    }
  }

  return (
    <div>
        <SearchKit searchFilter={SearchFilter} checkFilter={CheckFilter}  />
        <div className="CardsContainer">
            <div className="CardsFlex">
                {cards.map((card, index) => (
                <div key={index}>
                    <Card title={card.title} imgSrc={card.imgSrc} alertTag={card.alertTag} />
                    <Modal title={card.title} />
                </div>
                ))}
                <AddCard/>
            </div>
        </div>
    </div>
  );
}

export default TravelList;