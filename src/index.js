import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Curriculum from './components/Curriculum';


const card = [
    { title: "Picture", nimi: "Ari Nyman", osoite: "Hehkukuja 10, 65300 Vaasa", email: "ari.nyman@gmail.com", puh: "+358401766440"},
    { title: "Bio", nimi: "Ari Nyman", osoite: "Hehkukuja 10, 65300 Vaasa", email: "ari.nyman@gmail.com", puh: "+358401766440"},
    { title: "Quick facts", nimi: "Ari Nyman", osoite: "Hehkukuja 10, 65300 Vaasa", email: "ari.nyman@gmail.com", puh: "+358401766440"},
    { title: "Skill summary", nimi: "Ari Nyman", osoite: "Hehkukuja 10, 65300 Vaasa", email: "ari.nyman@gmail.com", puh: "+358401766440"},
    { title: "Work merits", nimi: "Ari Nyman", osoite: "Hehkukuja 10, 65300 Vaasa", email: "ari.nyman@gmail.com", puh: "+358401766440"},  
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Curriculum cards = {card}/>
    </React.StrictMode>
);

