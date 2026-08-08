import "./hero-right.css";

function HeroRight() {
  return (
    <div className="resumen-card">

      {/* Título */}
      <h2 className="resumen-titulo">
        Resumen
      </h2>

      {/* Áreas */}
      <div className="resumen-grid">

        {/* Desarrollo Web */}
        <div className="resumen-item">
          <div className="resumen-icono">
            {/* Icono */}
          </div>

          <p className="resumen-item-titulo">
            Desarrollo Web
          </p>

          <div className="resumen-barra">
            <span />
          </div>
        </div>

        {/* Data Science */}
        <div className="resumen-item">
          <div className="resumen-icono">
            {/* Icono */}
          </div>

          <p className="resumen-item-titulo">
            Data Science
          </p>

          <div className="resumen-barra">
            <span />
          </div>
        </div>

        {/* Inteligencia Artificial */}
        <div className="resumen-item">
          <div className="resumen-icono">
            {/* Icono */}
          </div>

          <p className="resumen-item-titulo">
            Inteligencia Artificial
          </p>

          <div className="resumen-barra">
            <span />
          </div>
        </div>

        {/* Aprendizaje Continuo */}
        <div className="resumen-item">
          <div className="resumen-icono">
            {/* Icono */}
          </div>

          <p className="resumen-item-titulo">
            Aprendizaje Continuo
          </p>

          <div className="resumen-barra">
            <span />
          </div>
        </div>

      </div>

      {/* Frase */}
      <div className="resumen-frase">

        <span className="resumen-comillas">
          “
        </span>

        <p>
          Me apasiona crear soluciones que combinan
          diseño, datos y tecnología para resolver
          problemas reales.
        </p>

      </div>

    </div>
  );
}

export default HeroRight;