import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

function ProjectVisual({ project }) {
  return (
    <div
      aria-hidden="true"
      className={`project-visual project-visual-${project.visual}`}
    >
      <div className="project-visual-topline">
        <span>PROJECT / {project.number}</span>
        <ArrowDownRight size={15} />
      </div>
      {project.visual === "sign" && (
        <div className="signal-preview">
          <div className="signal-ring signal-ring-outer" />
          <div className="signal-ring signal-ring-inner" />
          <div className="signal-hand">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="signal-label">GESTURE RECOGNIZED</span>
          <span className="signal-value">HELLO</span>
        </div>
      )}
      {project.visual === "house" && (
        <div className="house-preview">
          <span className="house-chip house-chip-one">MODEL · LINEAR REGRESSION</span>
          <span className="house-chip house-chip-two">PREDICTED VALUE</span>
          <div className="house-art" />
          <div className="house-value">
            <span>ESTIMATED PRICE</span>
            <b>ŷ = f(features)</b>
          </div>
          <div className="house-sparkline">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      {project.visual === "market" && (
        <div className="market-preview">
          <div className="market-caption">
            <div>
              <span>AMAZON / STOCK ANALYSIS</span>
              <b>Historical data · Linear regression</b>
            </div>
            <span className="market-status"><i /> EVALUATED</span>
          </div>
          <div className="market-chart">
            <div className="chart-grid-lines">
              <span />
              <span />
              <span />
            </div>
            <svg
              aria-hidden="true"
              className="market-chart-line"
              preserveAspectRatio="none"
              viewBox="0 0 420 150"
            >
              <defs>
                <linearGradient id="chart-area-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8b79ff" stopOpacity=".26" />
                  <stop offset="100%" stopColor="#8b79ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="chart-fill"
                d="M0 126 C28 115 39 134 67 103 S98 116 126 86 S159 102 188 62 S222 95 250 60 S282 73 311 44 S340 70 364 31 S399 49 420 13 L420 150 L0 150Z"
              />
              <path
                className="chart-stroke"
                d="M0 126 C28 115 39 134 67 103 S98 116 126 86 S159 102 188 62 S222 95 250 60 S282 73 311 44 S340 70 364 31 S399 49 420 13"
              />
            </svg>
          </div>
          <div className="market-labels"><span>TRAINING DATA</span><span>TEST SET</span><span>PREDICTION ↗</span></div>
        </div>
      )}
      <div className="visual-glow" />
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="project-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.09,
        ease: [0.2, 0.7, 0.25, 1],
      }}
    >
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <div className="project-kicker">
          <span>{project.category}</span>
          <span className="project-index">0{project.number}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-features">
          {project.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-card-actions">
          <a
            className="github-project-link"
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Code2 size={15} aria-hidden="true" />
            GitHub repository
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <span
            aria-label="Live demo not published"
            className="live-demo-unavailable"
            title="A live demo has not been published for this project."
          >
            Demo not published
          </span>
        </div>
      </div>
    </motion.article>
  );
}
