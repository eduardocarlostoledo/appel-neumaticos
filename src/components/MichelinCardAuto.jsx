import React from "react";
import "../styles/MichelinCard.css";
import neumatico from "../images/cars/supra.webp"; // Usá la imagen que desees

const MichelinCardAuto = () => {
  return (
   <div className="michelin-card">
  <div className="michelin-card-content">
    <div className="michelin-info">
      <p className="michelin-subtitle">EN DESTACADO:</p>
      <h2 className="michelin-title">MÁXIMA SEGURIDAD PARA TU AUTO</h2>
      <p className="michelin-description">
        La línea Michelin Defender está diseñada para brindar una conducción silenciosa, eficiente y segura en ciudad y ruta. Ideal para sedanes, hatchbacks y autos familiares.
      </p>
    </div>

    <div className="michelin-card-box">
     <img src={"https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4qm46hfs6jpdf8y/4w-1122_3528705000912_tire_michelin_defender-ltx-platinum_lt-275-slash-65-r20-126-slash-123s_a_main_1-30_nopad.webp?t=resize&width=500"} alt="Michelin Defender" className="michelin-image" />
      <div className="michelin-label">
        <span className="brand">MICHELIN</span>
        <span className="model">DEFENDER LTX PLATINUM</span>
      </div>
    </div>
  </div>

  <div className="michelin-meta">
    <span className="type">🛣️ Touring</span>
    <p className="luxury">Conducción silenciosa y eficiente.</p>
    <a href="#" className="details-link">Ver detalles</a>
  </div>
</div>

  );
};

export default MichelinCardAuto;
