import React from "react";
import "../styles/MichelinCard.css";
import neumatico from "../images/cars/r1.jpg"; // Usá la imagen que desees

const MichelinCardMoto = () => {
  return (
<div className="michelin-card">
  <div className="michelin-card-content">
    <div className="michelin-info">
      <p className="michelin-subtitle">RENDIMIENTO DEPORTIVO</p>
      <h2 className="michelin-title">MAYOR CONTROL EN CUALQUIER CONDICIÓN</h2>
      <p className="michelin-description">
        Michelin Road 5 GT ofrece un excelente agarre en seco y mojado, diseñado para motos touring y de alta cilindrada. Más confianza en curvas, más durabilidad en cada viaje.
      </p>
    </div>

    <div className="michelin-card-box">
    <img src={"https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4xz9udot9km4x4h/mo-1111_tire_michelin_road-w-gt_ww_set_a_main_1-30_nopad.webp?t=resize&width=500"} alt="Michelin Defender" className="michelin-image" />
      <div className="michelin-label">
        <span className="brand">MICHELIN</span>
        <span className="model">ROAD 5 GT</span>
      </div>
    </div>
  </div>

  <div className="michelin-meta">
    <span className="type">🏍️ Sport Touring</span>
    <p className="luxury">Estabilidad, frenado y agarre superiores.</p>
    <a href="#" className="details-link">Ver detalles</a>
  </div>
</div>

  );
};

export default MichelinCardMoto;
