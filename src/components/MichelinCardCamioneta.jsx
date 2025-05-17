import React from "react";
import "../styles/MichelinCard.css";
import neumatico from "../images/cars/r1.jpg"; // Usá la imagen que desees


const MichelinCardCamioneta = () => {
  return (
<div className="michelin-card">
  <div className="michelin-card-content">
    <div className="michelin-info">
      <p className="michelin-subtitle">PREPARADO PARA TODO TERRENO</p>
      <h2 className="michelin-title">MAYOR CARGA, MÁS TRACCIÓN</h2>
      <p className="michelin-description">
        Michelin Agilis CrossClimate es ideal para pickups y vehículos utilitarios. Excelente tracción en seco, barro o lluvia. Refuerzo lateral para mayor resistencia en condiciones extremas.
      </p>
    </div>

    <div className="michelin-card-box">
              <img src={"https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4q7qtudcxys3yxw/msp-959_3528704609437_tire_michelin_pilot-alpin-na01_16-slash-61-16_a_main_1-30_nopad.webp?t=resize&height=500"} alt="Michelin Defender" className="michelin-image" />
      <div className="michelin-label">
        <span className="brand">MICHELIN</span>
        <span className="model">AGILIS CROSSCLIMATE</span>
      </div>
    </div>
  </div>

  <div className="michelin-meta">
    <span className="type">🚚 All-Terrain</span>
    <p className="luxury">Carga, tracción y resistencia.</p>
    <a href="#" className="details-link">Ver detalles</a>
  </div>
</div>

  );
};

export default MichelinCardCamioneta;
