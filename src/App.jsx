import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  PanelsTopLeft,
  Send,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Reveal from "./components/Reveal.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import { portfolio } from "./data/portfolio.js";

const skillIcons = {
  Code2,
  BrainCircuit,
  PanelsTopLeft,
  ChartNoAxesCombined,
  WandSparkles,
  Sparkles,
};

const focusAreas = ["Python", "Machine Learning", "NLP", "Computer Vision", "Power BI"];

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const intervalId = window.setInterval(() => {
      setFocusIndex((index) => (index + 1) % focusAreas.length);
    }, 2400);
    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <section className="hero-section scroll-section" id="home">
      <div aria-hidden="true" className="hero-background">
        <div className="hero-orb hero-orb-blue" />
        <div className="hero-orb hero-orb-violet" />
        <div className="hero-grid-pattern" />
      </div>
      <div className="hero-layout content-shell">
        <div className="hero-content">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-overline"
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="availability-dot" />
            {portfolio.availability}
          </motion.p>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            <span className="hero-hello">Hello, I’m</span>
            <span className="hero-name">{portfolio.name}</span>
            <span className="hero-role">{portfolio.headline}</span>
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-summary"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.37, duration: 0.6 }}
          >
            {portfolio.summary}
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-skill-line"
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.48, duration: 0.5 }}
          >
            <span className="hero-skill-prefix">Areas I work with</span>
            <span aria-live="polite" className="hero-skill-rotator">
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  initial={{ opacity: 0, y: 8 }}
                  key={shouldReduceMotion ? "Python" : focusAreas[focusIndex]}
                  transition={{ duration: 0.2 }}
                >
                  {shouldReduceMotion ? "Python" : focusAreas[focusIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            transition={{ delay: 0.57, duration: 0.5 }}
          >
            <a className="button button-primary" href="#projects">
              View my projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              download="PAPANAIDU_PADAKANDLA_Resume.pdf"
              href={portfolio.resume}
            >
              Download resume <Download size={15} aria-hidden="true" />
            </a>
            <a className="hero-contact-link" href="#contact">
              Contact me <ArrowDown size={14} aria-hidden="true" />
            </a>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="hero-socials"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              aria-label="GitHub profile"
              href={portfolio.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="social-brand social-brand-github">gh</span>
              <span>GitHub</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <span className="social-divider" />
            <a
              aria-label="LinkedIn profile"
              href={portfolio.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="social-brand social-brand-linkedin">in</span>
              <span>LinkedIn</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="hero-portrait-wrap"
          initial={{ opacity: 0, scale: 0.94 }}
          transition={{ delay: 0.32, duration: 0.7, ease: [0.2, 0.7, 0.25, 1] }}
        >
          <div className="portrait-halo" />
          <div className="portrait-ring portrait-ring-outer" />
          <div className="portrait-ring portrait-ring-inner" />
          <div className="portrait-card">
            <div className="portrait-card-top">
              <span className="portrait-dot" />
              <span>PROFILE / 001</span>
              <span className="portrait-card-line" />
            </div>
            <img
              alt={`Professional portrait of ${portfolio.name}`}
              className="profile-photo"
              decoding="async"
              fetchPriority="high"
              height="1402"
              src={portfolio.photo}
              width="1122"
            />
            <div className="portrait-caption">
              <span>{portfolio.name}</span>
              <span>{portfolio.location}</span>
            </div>
          </div>
          <div className="portrait-float-card portrait-float-ai">
            <span className="float-icon"><Sparkles size={14} /></span>
            <span><b>AI &amp; ML</b><small>BUILDING WITH DATA</small></span>
          </div>
          <div className="portrait-float-card portrait-float-python">
            <span className="float-icon float-icon-python"><Code2 size={15} /></span>
            <span><b>Python</b><small>MY PRIMARY LANGUAGE</small></span>
          </div>
          <div aria-hidden="true" className="portrait-orbit-dot" />
        </motion.div>
      </div>
      <a aria-label="Scroll to about me" className="hero-scroll" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="content-section scroll-section" id="about">
      <div className="content-shell">
        <SectionHeading
          accent="with purpose."
          eyebrow="A little about me"
          number="01"
          title="I build"
        />
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-lead">{portfolio.about[0]}</p>
            <p>{portfolio.about[1]}</p>
            <div className="about-location">
              <MapPin size={15} aria-hidden="true" />
              <span>{portfolio.location}</span>
              <span className="location-separator">·</span>
              <span>Open to relocation &amp; remote</span>
            </div>
          </Reveal>
          <Reveal className="about-highlight-list" delay={0.1}>
            <article className="about-highlight">
              <span className="highlight-icon"><GraduationCap size={18} /></span>
              <span className="highlight-text"><b>B.Tech · AI &amp; ML</b><small>Computer Science &amp; Engineering</small></span>
              <span className="highlight-date">2025</span>
            </article>
            <article className="about-highlight">
              <span className="highlight-icon"><BriefcaseBusiness size={17} /></span>
              <span className="highlight-text"><b>Three internships</b><small>Machine Learning &amp; Data Science</small></span>
              <span className="highlight-date">03</span>
            </article>
            <article className="about-highlight">
              <span className="highlight-icon"><Award size={17} /></span>
              <span className="highlight-text"><b>AWS certified</b><small>Machine Learning &amp; Data Analytics</small></span>
              <span className="highlight-date">02</span>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="content-section skills-section scroll-section" id="skills">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            accent="in practice."
            description="A snapshot of the tools and concepts I’ve worked with."
            eyebrow="Technical toolkit"
            number="02"
            title="Skills"
          />
        </Reveal>
        <div className="skills-grid">
          {portfolio.skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon] ?? Code2;
            return (
              <Reveal className="skill-card-reveal" delay={(index % 3) * 0.06} key={skill.title}>
                <article className="glass-card skill-card">
                  <span className="skill-icon"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-tags">
                    {skill.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="content-section projects-section scroll-section" id="projects">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            description="Real projects from my GitHub. Each repository link opens the original project in a new tab."
            eyebrow="Selected work"
            number="03"
            title="Built, tested,"
            accent="shared."
          />
        </Reveal>
        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <ProjectCard index={index} key={project.number} project={project} />
          ))}
        </div>
        <Reveal className="github-more-wrap">
          <a
            className="github-more"
            href={portfolio.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            More work on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="content-section education-section scroll-section" id="education">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            accent="foundation."
            eyebrow="Education"
            number="04"
            title="A strong"
          />
        </Reveal>
        <Reveal>
          <article className="education-card glass-card">
            <div className="education-card-icon"><GraduationCap size={24} aria-hidden="true" /></div>
            <div className="education-card-copy">
              <div className="education-card-top">
                <span className="education-type">Bachelor of Technology</span>
                <span className="education-year">{portfolio.education.completion}</span>
              </div>
              <h3>{portfolio.education.degree}</h3>
              <p>{portfolio.education.institution}</p>
              <div className="education-card-bottom">
                <span><Sparkles size={14} aria-hidden="true" /> {portfolio.education.focus}</span>
                <span><Award size={14} aria-hidden="true" /> {portfolio.education.result}</span>
              </div>
            </div>
            <div aria-hidden="true" className="education-card-orbit" />
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="content-section experience-section scroll-section" id="experience">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            description="Hands-on internship experience in machine learning, predictive modeling, and applied data science."
            eyebrow="Professional experience"
            number="05"
            title="Learning by"
            accent="building."
          />
        </Reveal>
        <div className="experience-list">
          {portfolio.experience.map((experience, index) => (
            <Reveal delay={index * 0.07} key={`${experience.company}-${experience.role}`}>
              <article className="experience-entry">
                <div className="experience-timeline">
                  <span className="timeline-node"><span /></span>
                  {index < portfolio.experience.length - 1 && <span className="timeline-line" />}
                </div>
                <div className="experience-card glass-card">
                  <div className="experience-main">
                    <div className="experience-heading">
                      <div>
                        <p className="experience-kind">INTERNSHIP / {String(index + 1).padStart(2, "0")}</p>
                        <h3>{experience.role}</h3>
                        <p className="experience-company">{experience.company}</p>
                      </div>
                      <span className="experience-icon"><BriefcaseBusiness size={19} aria-hidden="true" /></span>
                    </div>
                    {experience.location && (
                      <p className="experience-location"><MapPin size={13} aria-hidden="true" />{experience.location}</p>
                    )}
                    <ul>
                      {experience.description.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="experience-tags">
                      {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="content-section certification-section scroll-section" id="certifications">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            description="Certifications listed in my resume. Issuing organization is shown; dates and credential URLs were not provided."
            eyebrow="Certifications"
            number="06"
            title="Proof of"
            accent="progress."
          />
        </Reveal>
        <div className="certification-grid">
          {portfolio.certifications.map((certification, index) => (
            <Reveal delay={(index % 3) * 0.05} key={certification.name}>
              <article className="certification-card glass-card">
                <span className="certification-icon"><Award size={18} aria-hidden="true" /></span>
                <span className="certification-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                <span className="certification-rule" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formError, setFormError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setFormError("Please complete your name, email, and message.");
      return;
    }

    if (!event.currentTarget.reportValidity()) return;

    setFormError("");
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-section scroll-section" id="contact">
      <div aria-hidden="true" className="contact-glow" />
      <div className="content-shell contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-index">07</span> Let’s connect</p>
          <h2 className="contact-heading">
            Have an opportunity
            <br />
            <span>in mind?</span>
          </h2>
          <p className="contact-description">
            I’m open to global opportunities in software engineering, AI, machine learning, and data analytics. I’d be glad to hear from you.
          </p>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            <span className="contact-email-icon"><Mail size={17} aria-hidden="true" /></span>
            <span><small>EMAIL ME DIRECTLY</small><b>{portfolio.email}</b></span>
            <ArrowUpRight className="contact-email-arrow" size={17} aria-hidden="true" />
          </a>
          <div className="contact-location"><MapPin size={14} aria-hidden="true" />{portfolio.location} · Open to relocation</div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.1}>
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span className="form-icon"><Send size={17} aria-hidden="true" /></span>
              <span><b>Send a message</b><small>Opens a draft in your email app.</small></span>
            </div>
            <label htmlFor="contact-name">Your name</label>
            <input autoComplete="name" id="contact-name" maxLength="100" name="name" placeholder="How should I address you?" required />
            <label htmlFor="contact-email">Email address</label>
            <input autoComplete="email" id="contact-email" maxLength="254" name="email" placeholder="you@company.com" required type="email" />
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" maxLength="5000" name="message" placeholder="Tell me a little about the opportunity..." required rows="4" />
            <p aria-live="polite" className="form-notice">
              Your email app will open with the message filled in. It will not be sent until you review and send it.
            </p>
            {formError && <p aria-live="assertive" className="form-error">{formError}</p>}
            <button className="button button-primary contact-submit" type="submit">
              Open email draft <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a aria-label={`${portfolio.name}, back to home`} className="brand-mark footer-brand" href="#home">
          <span>p.</span><span className="brand-period" aria-hidden="true">•</span>
        </a>
        <p>Thoughtful software. Meaningful impact.</p>
        <div className="footer-socials">
          <a aria-label="Email" href={`mailto:${portfolio.email}`}><Mail size={15} aria-hidden="true" /></a>
          <a aria-label="GitHub" href={portfolio.github} rel="noopener noreferrer" target="_blank"><span aria-hidden="true" className="social-brand social-brand-github">gh</span></a>
          <a aria-label="LinkedIn" href={portfolio.linkedin} rel="noopener noreferrer" target="_blank"><span aria-hidden="true" className="social-brand social-brand-linkedin">in</span></a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} {portfolio.name}</span>
        <a aria-label="Back to top" className="back-to-top" href="#home"><ArrowUp size={16} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
