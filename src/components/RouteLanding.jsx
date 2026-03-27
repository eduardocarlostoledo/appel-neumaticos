import { motion } from "framer-motion";
import "../styles/homepage.css";

const RouteLanding = ({
  badge,
  title,
  description,
  points = [],
  metrics = [],
  showcase = [],
  ctaPrimary,
  ctaSecondary,
  children,
}) => {
  return (
    <section className="hp-section">
      <motion.div
        className="hp-shell"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="hp-inner">
          <div className="hp-grid split">
            <div>
              {badge ? <span className="hp-badge">{badge}</span> : null}
              <h1 className="hp-title">{title}</h1>
              <p className="hp-text">{description}</p>

              {points.length > 0 ? (
                <div className="hp-pills">
                  {points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              ) : null}

              {(ctaPrimary || ctaSecondary) && (
                <div className="hp-cta-row">
                  {ctaPrimary ? (
                    <a href={ctaPrimary.href} className="hp-btn hp-btn-primary" target={ctaPrimary.target} rel={ctaPrimary.rel}>
                      {ctaPrimary.label}
                    </a>
                  ) : null}
                  {ctaSecondary ? (
                    <a href={ctaSecondary.href} className="hp-btn hp-btn-secondary" target={ctaSecondary.target} rel={ctaSecondary.rel}>
                      {ctaSecondary.label}
                    </a>
                  ) : null}
                </div>
              )}
            </div>

            {metrics.length > 0 ? (
              <div className="hp-metrics">
                {metrics.map((metric) => (
                  <div className="hp-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {children ? <div style={{ marginTop: "1.5rem" }}>{children}</div> : null}

          {showcase.length > 0 ? (
            <div className="hp-track cols-3" style={{ marginTop: "1.5rem", paddingBottom: "0.25rem" }}>
              {showcase.map((item) => (
                <article className="hp-card" key={item.title}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div className="hp-card-body">
                    <span className="hp-badge" style={{ width: "fit-content" }}>
                      {item.badge || "Destacado"}
                    </span>
                    <h2 className="hp-card-title">{item.title}</h2>
                    <p className="hp-card-copy">{item.copy}</p>
                    {item.cta ? (
                      <div className="hp-cta-row" style={{ marginTop: "0.25rem" }}>
                        <a
                          href={item.cta.href}
                          className="hp-btn hp-btn-primary"
                          target={item.cta.target}
                          rel={item.cta.rel}
                        >
                          {item.cta.label}
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
};

export default RouteLanding;
