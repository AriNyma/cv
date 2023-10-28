import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Curriculum from './components/Curriculum';
import omakuva from './images/Omakuva.png'
import Rating from './components/Rating';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

const card = [
    { type: 'picture', image: omakuva, title:"", infoFirst:"", infoSecond:"",infoThird:"",infoFourth:""},
    { type: 'bio', image:"", title: "Bio", infoFirst: "41 year old Civil enginer turned IT-enginer. Married with one 4 year old at home.", ratingFirst:"", explanationFirst:"", infoSecond :"I have worked in various roles in the construction industry, acquiring extensive experience and skills along the way. I'm motivated, hardworking, and ready to take on new challenges. I enjoy teamwork."},
    { type: 'quick-facts', title: "Quick facts", infoFirst: "Rank of lieutenant in the Finnish reserve forces", infoSecond: "RAP-qualifications (FISE) in construction", infoThird: "Second year of IT-studies ongoing"},
    { type: 'skills', title: "Skills", infoFirst: "React", ratingFirst: <Rating value = {2}/>, explanationFirst: "React course", infoSecond: "C", ratingSecond: <Rating value = {4}/>, explanationSecond: "Introduction to C-language", infoThird: "Cisco Networks", ratingThird: <Rating value = {5}/>, explanationThird: "CCNA-course", infoFourth: "Development (construction)", ratingFourth: <Rating value = {5}/>, explanationFourth: "14 years of experiense as a developer"},
    { type: 'work-merits', title: "Work merits", infoFirst: "Have been working for the past 14 years in Lakea developing 19 construction projects in Vaasa and Oulu area.", infoSecond: "Before joining Lakea Oy, I worked for 3 years in site supervision and as a site foreman in various industrial construction and renovation projects." , infoThird: "During my time at Lakea Oy, I have worked as a Project Manager in several different service apartment projects as well as residential building projects. These projects have ranged from residential real estate development, ARA-projects to Lakea's own financing models, and the contract types have in-cluded traditional, shared, and turnkey contracts. These projects have also included wooden apartment construction using Lakea's 'Sydänpuu' -concept. In addition to my role as a Project Manager, I have served as a site supervisor on several sites."}  
];

const link = {
    facebook: "https://www.facebook.com/ari.nyman", 
    linkedin: "https://www.linkedin.com/in/ari-pekka-nyman", 
    instagram: "https://www.instagram.com/ari.nyman/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"

};

return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <React.StrictMode>
        <Curriculum cards={card} links={link} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </React.StrictMode>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
