import { useEffect } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "MEDANPARK Dashboard",
    category: "Admin Dashboard",
    description:
      "Dashboard administrasi untuk memantau aktivitas parkir, verifikasi jukir, kendaraan, pendapatan, dan riwayat transaksi.",
    tech: ["React", "Node.js", "Express"],
    desktop: "/projects/dashboard-web.png",
    mobile: null,
    demo: "https://medanpark-dashboard.vercel.app/",
    github: "https://github.com/TAMAM3/medanpark-dashboard",
  },
  {
    number: "02",
    title: "MEDANPARK Mobile",
    category: "Mobile Web App",
    description:
      "Aplikasi mobile untuk jukir dengan pencatatan kendaraan, riwayat parkir, foto kendaraan, dan pemindaian plat nomor.",
    tech: ["React", "Responsive UI", "OCR"],
    desktop: null,
    mobile: "/projects/jukir-mobile.png",
    demo: "https://medanpark-mobile.vercel.app/",
    github: "https://github.com/TAMAM3/medanpark-mobile",
  },
  {
    number: "03",
    title: "Movie Streaming",
    category: "Entertainment Website",
    description:
      "Website eksplorasi film dan series dengan pencarian, detail film, popular movies, series, dan desain responsive.",
    tech: ["React", "API", "CSS"],
    desktop: "/projects/movie-web.png",
    mobile: "/projects/movie-mobile.png",
    demo: "https://movix-eight-rosy.vercel.app/",
    github: "https://github.com/TAMAM3/movix",
  },
  {
    number: "04",
    title: "Haren Coffee",
    category: "Business Website",
    description:
      "Website coffee modern dengan katalog produk, tampilan responsive, dan sistem pemesanan melalui WhatsApp.",
    tech: ["React", "CSS", "WhatsApp"],
    desktop: "/projects/haren-web.png",
    mobile: "/projects/haren-mobile.png",
    demo: "https://haren-coffee.vercel.app/",
    github: "https://github.com/TAMAM3/haren-coffee",
  },
];

const experiences = [
  {
    number: "01",
    company: "LPK KOLEGIUM THT-BKL",
    position: "Admin CRM & Broadcasting",
    description:
      "Managed participant databases containing more than 70,000 general practitioners and 2,000 ENT specialists. Handled segmented WhatsApp and email broadcasting, event promotion, social media communication, and participant inquiries.",
    tags: [
      "CRM",
      "Database Management",
      "Broadcasting",
      "WhatsApp",
      "Email Campaign",
      "Social Media",
    ],
  },
  {
    number: "02",
    company: "DINAS KETAHANAN PANGAN & HORTIKULTURA",
    position: "Administrative Intern",
    description:
      "Handled data entry and recapitulation using Excel, performed data validation and spreadsheet matching, assisted with activity proposals, and managed document scanning and archiving.",
    tags: [
      "Microsoft Excel",
      "Data Entry",
      "Data Validation",
      "Administration",
    ],
  },
  {
    number: "03",
    company: "BKKBN",
    position: "Data Entry Project",
    description:
      "Entered and matched family data from physical documents into Excel and internal systems while validating information to maintain accuracy and consistency.",
    tags: [
      "Data Entry",
      "Excel",
      "Data Verification",
      "Data Management",
    ],
  },
];

function ProjectVisual({ project }) {
  if (project.desktop && project.mobile) {
    return (
      <div className="combo-preview">
        <div className="browser-frame">
          <div className="browser-bar">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <img src={project.desktop} alt={`${project.title} desktop`} />
        </div>

        <div className="phone-frame">
          <div className="phone-notch"></div>
          <img src={project.mobile} alt={`${project.title} mobile`} />
        </div>
      </div>
    );
  }

  if (project.desktop) {
    return (
      <div className="desktop-only">
        <div className="browser-frame">
          <div className="browser-bar">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <img src={project.desktop} alt={project.title} />
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-only">
      <div className="mobile-glow"></div>

      <div className="phone-frame phone-center">
        <div className="phone-notch"></div>
        <img src={project.mobile} alt={project.title} />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand">
          TAMAM AULIYA HABIB<span>.</span>
        </a>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
          <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero reveal" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span></span>
              Available for opportunities
            </div>

            <h1>
              Hello, I'm
              <br />
              <strong>Tamam Auliya Habib.</strong>
              <br />
              I build digital <span>experiences.</span>
            </h1>

            <p className="hero-description">
              Information Technology graduate focused on responsive web
              development, data, clean interfaces, and functional digital
              products.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore Projects
                <span>↓</span>
              </a>

              <a
                href="/CV-Tamam-Auliya-Habib.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Download CV
                <span>↗</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <b>04</b>
                <span>Selected Projects</span>
              </div>

              <div className="stat-card">
                <b>WEB</b>
                <span>Development</span>
              </div>

              <div className="stat-card">
                <b>DATA</b>
                <span>Management</span>
              </div>
            </div>
          </div>

          <div className="hero-preview">
            <div className="coffee-glow glow-one"></div>
            <div className="coffee-glow glow-two"></div>

            <div className="coffee-browser">
              <div className="coffee-browser-top">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="coffee-url">
                  haren-coffee.vercel.app
                </div>
              </div>

              <img src="/projects/haren-web.png" alt="Haren Coffee" />
            </div>

            <div className="featured-label">
              <span>Featured Project</span>
              <strong>HAREN COFFEE</strong>
            </div>
          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <div className="section-heading">
            <span>SELECTED WORK</span>

            <h2>Projects I've built.</h2>

            <p>
              A selection of projects focused on functionality, clean design,
              responsiveness, and real use cases.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <ProjectVisual project={project} />
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section reveal" id="about">
          <div>
            <span className="section-label">ABOUT ME</span>

            <h2>
              Technology, data,
              <br />
              and digital experience.
            </h2>
          </div>

          <div className="about-right">
            <div className="about-copy">
              <p>
                I'm an Information Technology graduate interested in web
                development, data management, and digital products.
              </p>

              <p>
                Beyond building web applications, I have professional
                experience in CRM administration, database management,
                broadcasting, data entry, and digital communication.
              </p>
            </div>

            <div className="education-card">
              <div className="education-icon">🎓</div>

              <div>
                <small>EDUCATION</small>

                <strong>Information Technology</strong>

                <span>
                  Universitas Muhammadiyah Sumatera Utara
                </span>

                <p>2021 — 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="experience-section reveal"
          id="experience"
        >
          <div className="experience-header">
            <span className="section-label">EXPERIENCE</span>

            <h2>Work experience.</h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card"
                key={experience.number}
              >
                <div className="experience-number">
                  {experience.number}
                </div>

                <div className="experience-info">
                  <span>{experience.company}</span>

                  <h3>{experience.position}</h3>

                  <p>{experience.description}</p>

                  <div className="experience-tags">
                    {experience.tags.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section reveal" id="skills">
          <div className="skills-heading">
            <span className="section-label">SKILLS & TOOLS</span>

            <h2>What I work with.</h2>
          </div>

          <div className="skills-groups">
            <div className="skill-group">
              <span className="skill-title">DEVELOPMENT</span>

              <div className="skills-list">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Git</span>
              </div>
            </div>

            <div className="skill-group">
              <span className="skill-title">
                DATA & DATABASE
              </span>

              <div className="skills-list">
                <span>Python</span>
                <span>SQL</span>
                <span>Microsoft Excel</span>
                <span>Tableau</span>
                <span>Data Entry</span>
                <span>Data Validation</span>
                <span>Database Management</span>
              </div>
            </div>

            <div className="skill-group">
              <span className="skill-title">
                DIGITAL & TOOLS
              </span>

              <div className="skills-list">
                <span>CRM</span>
                <span>WhatsApp Broadcasting</span>
                <span>Email Campaign</span>
                <span>Social Media</span>
                <span>Figma</span>
                <span>Microsoft Office</span>
                <span>WMS / Odoo</span>
              </div>
            </div>

            <div className="skill-group">
              <span className="skill-title">
                PROFESSIONAL
              </span>

              <div className="skills-list">
                <span>Problem Solving</span>
                <span>Teamwork</span>
                <span>Communication</span>
                <span>Discipline</span>
                <span>Responsibility</span>
                <span>Adaptability</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div>
            <span className="section-label">
              LET'S CONNECT
            </span>

            <h2>
              Have an opportunity
              <br />
              or project?
            </h2>
          </div>

          <div className="contact-copy">
            <p>
              Feel free to reach out for collaboration,
              opportunities, or interesting projects.
            </p>
          </div>

          <div className="contact-buttons">
            <a
              href="https://wa.me/62895618114639"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <div>
                <small>WhatsApp</small>
                <strong>0895 6181 14639</strong>
              </div>

              <span>↗</span>
            </a>

            <a
              href="mailto:tamamhabib123@gmail.com"
              className="contact-email"
            >
              <div>
                <small>Email</small>
                <strong>
                  tamamhabib123@gmail.com
                </strong>
              </div>

              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © 2026 Tamam Auliya Habib.
        </span>

        <div className="footer-links">
          <a
            href="https://github.com/TAMAM3"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/tamam-habib"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <span>
          Designed & built with React.
        </span>
      </footer>
    </div>
  );
}

export default App;