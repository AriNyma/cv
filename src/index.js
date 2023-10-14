import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Curriculum from './components/Curriculum';
import { Button } from 'react-bootstrap';

const card = [
    { image: "https://firebasestorage.googleapis.com/v0/b/react-cv-ae862.appspot.com/o/omakuva.png?alt=media&token=b5952b63-ac84-495f-a164-9cb819a399cb&_gl=1*1hm1xsl*_ga*NjE0NzMxMzM5LjE2OTYyNDkzNjI.*_ga_CW55HF8NVT*MTY5NzE5NzEzMy40LjEuMTY5NzE5ODM1OS4yNC4wLjA.", title: "", info: "", button: "" },
    { image: "", title: "Bio", info: "41 year old Civil enginer turned IT-enginer. Married with one 4 year old at home", button: "" },
    { image: "", title: "Quick facts", info: "", button: "" },
    { image: "", title: "Skills", info: "", button: <Button variant="primary">More</Button> },
    { image: "", title: "Work merits", info: "Spent the past 14 years developing 19 different multi appartement buildings in Vaasa and Oulu area", button: "" }  
];
const link = [
    {facebook: "https://www.google.com", linkdin: "", instagram: ""}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Curriculum cards = {card} links ={link}/>
    </React.StrictMode>
);

