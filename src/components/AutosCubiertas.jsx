import React, { useEffect } from "react";
import "../styles/AutosCubiertas.css";
import SEO from "../components/maxSeo/SEO.jsx";
import MichelinCardAuto from "./MichelinCardAuto.jsx";

const AutosCubiertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="Cubiertas para Autos en Encarnación | Appel Neumáticos"
        description="Cubiertas nuevas, deportivas, all-season y más. Envíos a todo Paraguay. Calidad garantizada."
        canonicalUrl="https://appelneumaticos.com/autos/cubiertas"
      />

  <span className="badge">Alta Tecnología en Cubiertas</span>
    <section className="autos-cubiertas">
        <h1>Cubiertas para Autos</h1>
        <p>
          Las cubiertas para autos, también conocidas como neumáticos, son piezas de caucho con forma de anillo que se colocan sobre las llantas de un vehículo.
          Su función principal es permitir que el auto tenga contacto con la carretera y garantizar una conducción segura.
          Además de facilitar el movimiento, las cubiertas también amortiguan los impactos y absorben las irregularidades del camino.
        </p>
<MichelinCardAuto />
        <h2>Elementos de una cubierta</h2>
        <ul>
          <li><strong>Banda de rodadura:</strong> La parte exterior que entra en contacto directo con el asfalto.</li>
          <li><strong>Flancos:</strong> Las paredes laterales que se unen a la llanta.</li>
          <li><strong>Cubierta o Carcasa:</strong> Estructura interna que mantiene la forma y soporta la carga.</li>
          <li><strong>Cámara:</strong> En algunos casos, retiene el aire dentro del neumático.</li>
          <li><strong>Componentes internos:</strong> Capas de tela o acero que refuerzan la cubierta.</li>
        </ul>

        <h2>Importancia de las cubiertas</h2>
        <ul>
          <li><strong>Agarre y tracción:</strong> Permiten que el vehículo pueda acelerar, frenar y girar con seguridad.</li>
          <li><strong>Amortiguación:</strong> Absorben vibraciones e impactos, mejorando la comodidad.</li>
          <li><strong>Seguridad:</strong> Afectan el frenado y la estabilidad, sobre todo en lluvia o carreteras.</li>
          <li><strong>Durabilidad:</strong> Una elección adecuada y buen mantenimiento prolongan su vida útil.</li>
        </ul>

        <h2>Tipos de cubiertas</h2>
        <ul>
          <li><strong>Verano:</strong> Buen agarre en superficies secas, diseñadas para climas cálidos.</li>
          <li><strong>Invierno:</strong> Compuestos blandos que mejoran el agarre en hielo y nieve.</li>
          <li><strong>All-season:</strong> Equilibradas para todas las condiciones climáticas.</li>
          <li><strong>Deportivo:</strong> Mayor agarre y control para vehículos de alto rendimiento.</li>
          <li><strong>Run-flat:</strong> Permiten rodar a baja velocidad tras perder presión.</li>
        </ul>
      </section>
    </>
  );
};

export default AutosCubiertas;
