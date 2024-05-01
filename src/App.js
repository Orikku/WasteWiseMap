import React, { useState } from 'react';
import './App.css';

function App() {
  const [mapType, setMapType] = useState('paper'); 

  const changeToPaperMap = () => {
    setMapType('paper');
  };

  const changeToPlasticMap = () => {
    setMapType('plastic');
  };

  const changeToGlassMap = () => {
    setMapType('glass');
  };

  const changeToElectronicMap = () => {
    setMapType('electronic');
  };

  return (
    <div className="App">
      <h1 className="title">WasteWiseMap</h1>
      <div className="centered">
        <h2>AYÚDANOS A RECICLAR</h2>
        <p>“La basura de unos es el tesoro de otros”</p>
      </div>
      <div className="content">
        <div className="left">
          <h3>¿Quiénes somos?</h3>
          <p>Nuestra página web está diseñada para ayudar a las personas a localizar puntos cercanos donde puedan llevar tanto materiales de reciclaje como residuos electrónicos, con el propósito de dirigirlos hacia organizaciones que se encarguen de su adecuado procesamiento y reciclaje.</p>
        </div>
        <div className="right">
          <h3 className="right-title">¿Qué se puede reciclar?</h3>
          <ul>
            <li>Papel</li>
            <li>Plásticos</li>
            <li>Vidrio</li>
            <li>Aparatos electrónicos</li>
          </ul>
        </div>
      </div>
      <div className="map-container">
        <h2>Puntos de recolección</h2>
        {mapType === 'paper' && (
          <iframe 
            title="Mapa de reciclaje de papel"
            src="https://www.google.com/maps/d/u/0/embed?mid=1bj00Aa7xW6qXitPj8SFcYnGTIM2hkcc&ehbc=2E312F&noprof=1"
            width="100%"
            height="600"
            style={{ border: 0, marginTop: "25px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
        {mapType === 'plastic' && (
          <iframe 
            title="Mapa de reciclaje de plástico"
            src="https://www.google.com/maps/d/u/0/embed?mid=1rtUGGB9MJNFbMfbmrXEPZ_uibgtuSP4&ehbc=2E312F&noprof=1"
            width="100%"
            height="600"
            style={{ border: 0, marginTop: "25px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
        {mapType === 'glass' && (
          <iframe 
            title="Mapa de reciclaje de vidrio"
            src="https://www.google.com/maps/d/u/0/embed?mid=16vHtavctHK5pGtRDX1vSwvn-t_fumOc&ehbc=2E312F&noprof=1"
            width="100%"
            height="600"
            style={{ border: 0, marginTop: "25px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
        {mapType === 'electronic' && (
          <iframe 
            title="Mapa de reciclaje de aparatos electrónicos"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ART3MGKWFMeGnhfCwMymm_tKoBIA0BE&ehbc=2E312F&noprof=1"
            width="100%"
            height="600"
            style={{ border: 0, marginTop: "25px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
      </div>
      {/* Botones para cambiar entre tipos de mapas */}
      <div className="map-buttons">
        <button onClick={changeToPaperMap}>Papel</button>
        <button onClick={changeToPlasticMap}>Plástico</button>
        <button onClick={changeToGlassMap}>Vidrio</button>
        <button onClick={changeToElectronicMap}>Electrónicos</button>
      </div>
      <div className="contact-form">
        <h2>Contacto de Cliente</h2>
        <form>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Nombre" />
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="comment"></label>
            <textarea id="comment" name="comment" maxLength={500} placeholder="Escribe tu comentario aquí..."></textarea>
          </div>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
      <div className="footer">
        <p>Copyright © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;