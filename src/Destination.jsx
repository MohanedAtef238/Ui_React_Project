import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Sources/css/Destinations.css";
import { useParams } from 'react-router-dom';

import UKFlag from "./assets/Sources/img/Flags/UK.png";
import Sponsor2 from "./assets/Sources/img/Sponsors/sponsor 2.png";
import Sponsor3 from "./assets/Sources/img/Sponsors/sponsor 3.png";
import Sponsor1 from "./assets/Sources/img/Sponsors/sponsor 1.png";
import GalleryPic1 from "./assets/Sources/img/Gallery/pic1.jpg";
import GalleryPic2 from "./assets/Sources/img/Gallery/pic2.jpg";
import GalleryPic3 from "./assets/Sources/img/Gallery/pic3.jpg";
import GalleryPic4 from "./assets/Sources/img/Gallery/pic4.jpg";

function Destination() {
    const { title } = useParams();
    function expandYapping(e){
        let yap=document.getElementById('vertical3')
        {console.log(yap)};
        if(e.target.innerText=='Expand')
        {
            yap.style.height="fit-content";
            e.target.innerText='Collapse';
        }
        else{
                yap.style.height='400px';
                e.target.innerText='Expand';
        }
    }
    return (
        <div id="RealBody">
            <div id="vertical1">
                <div id="left1">
                    <h1 id="title">{title}</h1>
                    <div style={{ width: "80%" }}>
                        <img src={UKFlag} style={{ width: "100%" }} alt="UK Flag" />
                        <p style={{ fontSize: "1.5em" }}><b>11/12/2024 - 11/3/2025</b></p>
                    </div>
                </div>

                <div id="right1">
                    <div id="SponsorsPics" style={{ marginTop: "30px" }}>
                        <img src={Sponsor2} style={{ width: "47%", float: "left" }} alt="visit England logo" />
                        <img src={Sponsor3} style={{ width: "47%", float: "right", marginTop: "-5px" }} alt="Instapay logo" />
                        <img src={Sponsor1} style={{ width: "100%", marginTop: "-50px" }} alt="Egyptair logo" />
                    </div>
                </div>
            </div>

            <div id="vertical2">
                <div className="FlexItem">
                    <img src={GalleryPic1} className="GalleryImg" alt="Gallery Pic 1" />
                </div>

                <div className="FlexItem">
                    <img src={GalleryPic2} className="GalleryImg" alt="Gallery Pic 2" />
                </div>

                <div className="FlexItem">
                    <img src={GalleryPic3} className="GalleryImg" alt="Gallery Pic 3" />
                </div>

                <div className="FlexItem">
                    <img src={GalleryPic4} className="GalleryImg" alt="Gallery Pic 4" />
                </div>
            </div>

            <div id="vertical3">
                <h1 id="btitle">Brief</h1>
                <div id="yapping">
                    England, part of the United Kingdom, is a country rich in history and culture. It's known for its iconic landmarks like the Tower of London, Buckingham Palace, and the historic city of Bath. England has a diverse landscape, from the rolling hills of the Cotswolds to the rugged coastline of Cornwall. London, the capital, is a global city with a vibrant arts scene, world-class museums, and a mix of modern and historic architecture. England is also famous for its contributions to literature, music, and sports, particularly football and cricket. Whether you're exploring the countryside or the bustling cities, England offers a unique blend of tradition and modernity.
                    England's cultural contributions are immense. It is the birthplace of Shakespeare, whose works continue to influence literature and theater worldwide. The music scene has produced legendary bands like The Beatles and The Rolling Stones, shaping the global music landscape.

                    The English culinary scene has evolved significantly, offering a diverse range of cuisines. Traditional dishes like fish and chips, roast dinners, and afternoon tea remain popular, while vibrant food markets and Michelin-starred restaurants showcase the country's culinary innovation.

                    Sports play a significant role in English life, with football being the most popular. The Premier League is one of the most-watched football leagues globally. Cricket, rugby, and tennis also have a strong following, with events like Wimbledon drawing international attention.

                    England's festivals and events, such as the Notting Hill Carnival, Glastonbury Festival, and the Chelsea Flower Show, celebrate its diverse culture and creativity. The country's commitment to preserving its history is evident in its numerous museums, galleries, and heritage sites.

                    Whether you're exploring the bustling streets of London, the historic charm of York, or the coastal beauty of Cornwall, England offers a unique blend of tradition and modernity that captivates visitors and residents alike.
                </div>
            </div>
            <div id="expand" onClick={expandYapping}>
                Expand
            </div>
        </div>
    );
}

export default Destination;