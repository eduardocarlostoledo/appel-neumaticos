export const VehicleTypeSection = () => (
    <div className="vehicle-types">
      <h2>Neumáticos para Todo Tipo de Vehículo</h2>
      <div className="vehicle-grid">
        <div className="vehicle-card">
          <img src="/autos.jpg" alt="Neumáticos para autos en Encarnación"/>
          <h3>Para Autos</h3>
        </div>
        {/* Repetir para camionetas, motos, etc. */}
      </div>
    </div>
  );