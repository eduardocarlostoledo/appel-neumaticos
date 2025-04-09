// Ejemplo en NeumaticosMichelin.jsx
import { Helmet } from 'react-helmet-async';

function NeumaticosMichelin() {
  return (
    <>
      <Helmet>
        <title>Neumáticos Michelin en Encarnación | Appel Neumáticos</title>
        <meta 
          name="description" 
          content="Ofertas especiales en neumáticos Michelin para autos y camionetas. Envíos a todo Paraguay y Argentina. ¡Las mejores marcas al mejor precio!" 
        />
        <meta 
          property="og:title" 
          content="Neumáticos Michelin | Appel Neumáticos" 
        />
      </Helmet>
      
      {/* Resto del componente */}
    </>
  );
}