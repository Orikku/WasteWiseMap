import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">WasteWiseMap</h1>
      <div className="centered">
        <h2>AYUDANOS A RECICLAR</h2>
        <p>“La basura de unos es el tesoro de otros”</p>
      </div>
      <div className="content">
        <div className="left">
          <h3>¿Quiénes somos?</h3>
          <p>Nuestra página web está diseñada para ayudar a las personas a localizar puntos cercanos donde puedan llevar tanto materiales de reciclaje como residuos electrónicos, con el propósito de dirigirlos hacia organizaciones que se encarguen de su adecuado procesamiento y reciclaje</p>
        </div>
        <div className="right">
          <h3 className="right-title">¿Qué se puede reciclar?</h3>
          <ul>
            <li>Plásticos</li>
            <li>Vidrio</li>
            <li>Cartones</li>
            <li>Baterías</li>
            <li>Cables</li>
            <li>Aparatos electrónicos</li>
          </ul>
        </div>
      </div>
      <div className="map-container">
        <h2>Puntos de recolección</h2>
        <iframe 
          title="Mapa de Bogotá"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15984.175050867383!2d-74.07927175804522!3d4.656050887600506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a61b2287e15%3A0x2d5a8e6c5d537231!2sAv.%2070%20%2353-40%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1648510482867!5m2!1sen!2sus"
          width="1000"
          height="600"
          style={{ border: 0, marginTop: "25px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="button-container">
        <button>Acerca de</button>
        <button>Contacto</button>
        <button>Suscribirse</button>
      </div>
      <div className="footer">
        <p>Copyright © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
