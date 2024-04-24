import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar qué sección se muestra
  const [currentSection, setCurrentSection] = useState("inicio");

  return (
    <div className="App">
      <header className="Banner">
        <h1>WasteWiseMap</h1>
        <nav>
          <ul>
            <li><a href="#inicio" onClick={() => setCurrentSection("inicio")}>Inicio</a></li>
            <li><a href="#acerca" onClick={() => setCurrentSection("acerca")}>Acerca</a></li>
            <li><a href="#mapa" onClick={() => setCurrentSection("mapa")}>Mapa</a></li>
            <li><a href="#contacto" onClick={() => setCurrentSection("contacto")}>Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección de Inicio */}
{currentSection === "inicio" && (
  <section id="inicio">
    <h1>Reciclaje Electrónico</h1>
    <p>Bienvenido a WasteWiseMap, tu guía para el reciclaje de desechos electrónicos en Bogotá. En nuestra página web, encontrarás puntos de recolección cercanos para desechar tus dispositivos de manera responsable. Únete a nosotros en este esfuerzo por un futuro más limpio y sostenible. ¡Gracias por cuidar nuestro planeta!</p>
  </section>
)}


      {/* Sección de Acerca */}
      {currentSection === "acerca" && (
        <section id="acerca">
          <h2>Acerca</h2>
          <p>En nuestra misión por hacer de Bogotá una ciudad más sostenible y amigable con el medio ambiente, hemos creado este espacio para ayudarte a gestionar de manera adecuada tus desechos electrónicos. Sabemos lo importante que es disponer de estos residuos de forma responsable, evitando su impacto negativo en nuestro entorno.</p>
          <p>En esta plataforma, encontrarás un mapa interactivo de Bogotá con la ubicación exacta de puntos de recolección de desechos electrónicos. Desde centros de acopio hasta puntos de recogida especializados, te proporcionaremos la información necesaria para que puedas desechar tus dispositivos electrónicos de manera segura y responsable.</p>
          <p>Nuestro objetivo es facilitarte el proceso, brindándote acceso a recursos que te permitan contribuir activamente al cuidado del medio ambiente. Cada dispositivo electrónico reciclado es un paso más hacia un futuro más limpio y sostenible para todos.</p>
        </section>
      )}

      {/* Sección de Mapa */}
      {currentSection === "mapa" && (
        <section id="mapa">
          <iframe 
            title="Mapa de Bogotá"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15984.175050867383!2d-74.07927175804522!3d4.656050887600506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a61b2287e15%3A0x2d5a8e6c5d537231!2sAv.%2070%20%2353-40%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1648510482867!5m2!1sen!2sus"
            width="1000"
            height="600"
            style={{ border: 0, marginTop: "25px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      )}

      {/* Sección de Contacto */}
      {currentSection === "contacto" && (
        <section id="contacto">
          <div className="contacto-container">
            <div className="contacto-info">
              <p><strong>Información de contacto:</strong></p>
              <p>Teléfono: (+57) 321 9215008</p>
              <p>Correo electrónico: correoelectronico@gmail.com</p>
            </div>
            <div className="contacto-formulario">
              <h2>Contacto</h2>
              <form>
                <div className="campos">
                  <div className="campo">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                  </div>

                  <div className="campo">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" />
                  </div>

                  <div className="campo">
                    <label htmlFor="ciudad">Ciudad:</label>
                    <input type="text" id="ciudad" name="ciudad" />
                  </div>

                  <div className="campo">
                    <label htmlFor="comentario">Comentario:</label>
                    <textarea id="comentario" name="comentario"></textarea>
                  </div>
                </div>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
