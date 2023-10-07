import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CV from './CV';
import reportWebVitals from './reportWebVitals';

const card = [
    { nimi: "Ari Nyman", osoite: "Hehkukuja 10, 65300 Vaasa", email: "ari.nyman@gmail.com", puh: "+358401766440"}
   
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CV cards = {card}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
