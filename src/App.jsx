import { useEffect, useRef } from "react";
import "./App.css";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "AI Recruitment Automation",
    category: "AI & Automation",
    description:
      "Workflow recruitment automation berbasis n8n yang memproses CV, membuat qualification summary dengan Gemini, menyimpan data ke Google Sheets, dan menghubungkan HR melalui Telegram.",
    tech: ["n8n", "Gemini AI", "Google Sheets", "Telegram", "Railway"],
    image: "/projects/ai-recruitment-workflow.png",
    demo: "https://n8n-production-0312c.up.railway.app/form/b5121603-8e6f-4c55-af70-972ae0eface9",
    github: "https://github.com/TAMAM3/ai-recruitment-automation",
    featured: true,
  },

  {
    number: "02",
    title: "MEDANPARK Mobile",
    category: "Mobile Web App",
    description:
      "Aplikasi mobile untuk jukir dengan pencatatan kendaraan, riwayat parkir, foto kendaraan, dan pemindaian plat nomor menggunakan OCR.",
    tech: ["React", "Node.js", "OCR", "Railway"],
    image: "/projects/jukir-mobile.png",
    demo: "https://medanpark-mobile.vercel.app/",
    github: "https://github.com/TAMAM3/medanpark-mobile",
  },

  {
    number: "03",
    title: "MEDANPARK Dashboard",
    category: "Admin Dashboard",
    description:
      "Dashboard administrasi untuk memantau aktivitas parkir, verifikasi jukir, kendaraan, pendapatan, dan riwayat transaksi.",
    tech: ["React", "Node.js", "Express", "API"],
    image: "/projects/dashboard-web.png",
    demo: "https://medanpark-dashboard.vercel.app/",
    github: "https://github.com/TAMAM3/medanpark-dashboard",
  },

  {
    number: "04",
    title: "Movix",
    category: "Entertainment Website",
    description:
      "Website eksplorasi film dan series dengan pencarian, detail film, popular movies, series, dan tampilan responsive.",
    tech: ["React", "API", "CSS"],
    image: "/projects/movie-web.png",
    demo: "https://movix-eight-rosy.vercel.app/",
    github: "https://github.com/TAMAM3/movix",
  },

  {
    number: "05",
    title: "Haren Coffee",
    category: "Business Website",
    description:
      "Website coffee modern dengan katalog produk, tampilan responsive, dan sistem pemesanan melalui WhatsApp.",
    tech: ["React", "CSS", "WhatsApp"],
    image: "/projects/haren-web.png",
    demo: "https://haren-coffee.vercel.app/",
    github: "https://github.com/TAMAM3/haren-coffee",
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    year: "2026",
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
    ],
  },

  {
    year: "2024",
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
    year: "2022 - now",
    company: "BKKBN",
    position: "Data Entry Project",
    description:
      "Entered and matched family data from physical documents into Excel and internal systems while validating information to maintain accuracy and consistency.",
    tags: ["Data Entry", "Excel", "Data Verification", "Data Management"],
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  },
  {
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express/FFFFFF",
  },
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css/663399",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "Pandas",
    icon: "https://cdn.simpleicons.org/pandas/FFFFFF",
  },
  {
    name: "scikit-learn",
    icon: "https://cdn.simpleicons.org/scikitlearn/F7931E",
  },
{
  name: "XGBoost",
  icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
},
  {
    name: "n8n",
    icon: "https://cdn.simpleicons.org/n8n/EA4B71",
  },
  {
    name: "Gemini AI",
    icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },
  {
    name: "Google Sheets",
    icon: "https://cdn.simpleicons.org/googlesheets/34A853",
  },
  {
    name: "Excel",
    icon: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",
  },
{
  name: "Tesseract OCR",
  icon: "https://img.icons8.com/fluency/96/scan-stock.png",
},
  {
    name: "REST API",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
  },
  {
    name: "Railway",
    icon: "https://cdn.simpleicons.org/railway/FFFFFF",
  },
  {
    name: "Telegram",
    icon: "https://cdn.simpleicons.org/telegram/26A5E4",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""}`}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <div className="project-overlay"></div>

        <span className="project-number">{project.number}</span>

        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-demo"
          >
            View Project
            <span>↗</span>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {

const skillsSliderRef = useRef(null);

const skillControl = useRef({
  dragging: false,
  startX: 0,
  startScroll: 0,
});

useEffect(() => {
  const slider = skillsSliderRef.current;

  if (!slider) return;

  let animationFrame;

  const autoScroll = () => {
    if (!skillControl.current.dragging) {
      // BESARKAN ANGKA INI KALAU MAU LEBIH CEPAT
      slider.scrollLeft += 0.8;
    }

    const halfWidth =
      slider.scrollWidth / 2;

    // SUDAH SAMPAI COPY KEDUA
    // BALIK KE POSISI YANG SAMA
    if (
      halfWidth > 0 &&
      slider.scrollLeft >= halfWidth
    ) {
      slider.scrollLeft -= halfWidth;
    }

    // KALAU DIGESER KE KIRI TERLALU JAUH
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft += halfWidth;
    }

    animationFrame =
      requestAnimationFrame(autoScroll);
  };

  animationFrame =
    requestAnimationFrame(autoScroll);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, []);


const startDrag = (e) => {
  const slider =
    skillsSliderRef.current;

  if (!slider) return;

  skillControl.current.dragging = true;

  skillControl.current.startX =
    e.clientX;

  skillControl.current.startScroll =
    slider.scrollLeft;

  slider.classList.add("dragging");

  slider.setPointerCapture?.(
    e.pointerId
  );
};


const dragSkills = (e) => {
  if (!skillControl.current.dragging) {
    return;
  }

  const slider =
    skillsSliderRef.current;

  if (!slider) return;

  const distance =
    e.clientX -
    skillControl.current.startX;

  slider.scrollLeft =
    skillControl.current.startScroll -
    distance;
};


const stopDrag = (e) => {
  const slider =
    skillsSliderRef.current;

  skillControl.current.dragging = false;

  if (slider) {
    slider.classList.remove(
      "dragging"
    );

    slider.releasePointerCapture?.(
      e.pointerId
    );
  }
};

  const heroRef = useRef(null);

  useEffect(() => {
    /* Scroll reveal */

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

    /* Navbar */

    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar?.classList.add("navbar-scrolled");
      } else {
        navbar?.classList.remove("navbar-scrolled");
      }

      /* Hero parallax */

      if (heroRef.current && window.innerWidth > 800) {
        const amount = window.scrollY * 0.12;

        heroRef.current.style.setProperty(
          "--hero-parallax",
          `${amount}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="site">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar">
        <a href="#home" className="brand">
          TAH<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </nav>

        <a
          href="/CV-Tamam-Auliya-Habib.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Download CV
          <span>↓</span>
        </a>
      </header>

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section
          className="hero"
          id="home"
          ref={heroRef}
        >
          <div className="hero-photo">
            <img
              src="/tamam-night.png"
              alt="Tamam Auliya Habib"
            />

            <div className="hero-photo-overlay"></div>
          </div>

          <div className="hero-noise"></div>

          <div className="hero-copy">

            <h1>
              Hi, I'm
              <strong>
                TAMAM AULIYA
                <span> HABIB</span>
              </strong>
            </h1>

            <div className="hero-roles">
              <span>AI AUTOMATION</span>
              <i>•</i>
              <span>WEB DEVELOPMENT</span>
              <i>•</i>
              <span>DATA</span>
            </div>

            <h2>
              I build systems that
              <br />
              <span>automate, connect,</span> and create impact.
            </h2>

            <p className="hero-description">
              Information Technology graduate interested in building
              functional digital products, automation workflows,
              web applications, and turning data into useful solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Projects
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-side-note">
            <span>BUILD.</span>
            <span>LEARN.</span>
            <span>IMPROVE.</span>
            <span>REPEAT.</span>
          </div>

          <a href="#projects" className="scroll-indicator">
            <span>↓</span>
            Scroll to explore
          </a>
        </section>

        {/* ===================================================
            STATS
        ==================================================== */}

        <section className="stats-strip reveal">
          <div className="stat-item">
            <strong>05</strong>
            <span>Selected Projects</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>AI</strong>
            <span>Automation</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>WEB</strong>
            <span>Development</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <strong>DATA</strong>
            <span>Management</span>
          </div>
        </section>

        {/* ===================================================
            PROJECTS
        ==================================================== */}

        <section
          className="projects-section reveal"
          id="projects"
        >
          <div className="section-top">
            <div>
              <span className="section-label">
                FEATURED PROJECTS
              </span>

              <h2>
                Building ideas into
                <br />
                <span>real products.</span>
              </h2>
            </div>

            <p>
              A selection of projects I've built across AI automation,
              web applications, mobile experiences, and digital products.
            </p>
          </div>

<div className="portfolio-board">

  {/* LEFT PROJECT INDEX */}
  <aside className="project-index">
    <span className="index-active">01</span>
    <span>02</span>
    <span>03</span>
    <span>04</span>
    <span>05</span>
  </aside>

  <div className="portfolio-projects">

    {/* =========================================
        AI RECRUITMENT
    ========================================== */}

    <article className="featured-row featured-ai">

      <div className="featured-copy">
        <span className="featured-eyebrow">
          FEATURED PROJECT
        </span>

        <div className="featured-number">
          01
        </div>

        <h3>
          AI Recruitment
          <br />
          Automation
        </h3>

        <p>
          Workflow recruitment automation berbasis n8n yang
          memproses CV, membuat qualification summary dengan
          Gemini, menyimpan data ke Google Sheets, dan
          menghubungkan HR melalui Telegram.
        </p>

        <div className="featured-tech">
          <span>n8n</span>
          <span>Gemini AI</span>
          <span>Google Sheets</span>
          <span>Telegram</span>
          <span>Railway</span>
        </div>

        <div className="featured-actions">
          <a
            href="https://n8n-production-0312c.up.railway.app/form/b5121603-8e6f-4c55-af70-972ae0eface9"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-primary"
          >
            View Live Project
            <span>↗</span>
          </a>

          <a
            href="https://github.com/TAMAM3/ai-recruitment-automation"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-secondary"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="featured-visual ai-visual">

        <div className="visual-glow"></div>

        <div className="floating-tech tech-n8n">
          <img
            src="https://cdn.simpleicons.org/n8n/EA4B71"
            alt="n8n"
          />
          <span>n8n</span>
        </div>

        <div className="floating-tech tech-gemini">
          <img
            src="https://cdn.simpleicons.org/googlegemini/8E75B2"
            alt="Gemini"
          />
        </div>

        <div className="floating-tech tech-sheets">
          <img
            src="https://cdn.simpleicons.org/googlesheets/34A853"
            alt="Google Sheets"
          />
        </div>

        <div className="floating-tech tech-telegram">
          <img
            src="https://cdn.simpleicons.org/telegram/26A5E4"
            alt="Telegram"
          />
        </div>

        <div className="project-browser ai-browser">
          <div className="project-browser-top">
            <div className="browser-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <span>
              automation.workflow
            </span>
          </div>

          <div className="project-browser-image">
            <img
              src="/projects/ai-recruitment-workflow.png"
              alt="AI Recruitment Automation"
            />
          </div>
        </div>

        <span className="visual-note">
          Real workflow.
          <br />
          Real impact.
        </span>

      </div>
    </article>


    {/* =========================================
        HAREN COFFEE
    ========================================== */}

    <article className="featured-row featured-coffee">

      <div className="featured-visual coffee-visual">

        <div className="coffee-light"></div>

        <div className="floating-tech coffee-react">
          <img
            src="https://cdn.simpleicons.org/react/61DAFB"
            alt="React"
          />
        </div>

        <div className="floating-tech coffee-whatsapp">
          <img
            src="https://cdn.simpleicons.org/whatsapp/25D366"
            alt="WhatsApp"
          />
        </div>

        <div className="project-browser coffee-browser">
          <div className="project-browser-top">
            <div className="browser-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <span>
              haren-coffee.vercel.app
            </span>
          </div>

          <div className="project-browser-image">
            <img
              src="/projects/haren-web.png"
              alt="Haren Coffee"
            />
          </div>
        </div>

        <span className="coffee-note">
          Good coffee.
          <br />
          Better days.
        </span>

      </div>

      <div className="featured-copy">

        <span className="featured-eyebrow">
          BUSINESS WEBSITE
        </span>

        <div className="featured-number">
          02
        </div>

        <h3>
          Haren
          <br />
          Coffee
        </h3>

        <p>
          Website coffee modern dengan katalog produk,
          tampilan responsive, dan sistem pemesanan
          langsung melalui WhatsApp.
        </p>

        <div className="featured-tech">
          <span>React</span>
          <span>CSS</span>
          <span>Responsive UI</span>
          <span>WhatsApp</span>
        </div>

        <div className="featured-actions">
          <a
            href="https://haren-coffee.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-primary"
          >
            View Project
            <span>↗</span>
          </a>

          <a
            href="https://github.com/TAMAM3/haren-coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-secondary"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>

      </div>
    </article>


    {/* =========================================
        SMALL PROJECTS
    ========================================== */}

<div className="compact-projects">

  {/* =========================================
      MEDANPARK MOBILE
  ========================================== */}

  <article className="compact-card compact-mobile-card">

    <div className="compact-visual compact-mobile-visual">

      <div className="compact-mobile-glow"></div>

      <div className="mini-phone">
        <div className="mini-phone-speaker"></div>

        <div className="mini-phone-screen">
          <img
            src="/projects/jukir-mobile.png"
            alt="MEDANPARK Mobile"
          />
        </div>
      </div>

      <span className="compact-project-number">
        03
      </span>

      <div className="compact-floating-logo compact-react-logo">
        <img
          src="https://cdn.simpleicons.org/react/61DAFB"
          alt="React"
        />
      </div>

    </div>

    <div className="compact-content">

      <span className="compact-category">
        MOBILE WEB APP
      </span>

      <h3>
        MEDANPARK Mobile
      </h3>

      <p>
        Aplikasi mobile untuk jukir dengan pencatatan
        kendaraan, riwayat parkir, foto kendaraan,
        dan pemindaian plat nomor menggunakan OCR.
      </p>

      <div className="compact-tech-list">
        <span>React</span>
        <span>OCR</span>
        <span>Responsive UI</span>
        <span>API</span>
      </div>

      <div className="compact-actions">

        <a
          href="https://medanpark-mobile.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="compact-primary"
        >
          View Project
          <span>↗</span>
        </a>

        <a
          href="https://github.com/TAMAM3/medanpark-mobile"
          target="_blank"
          rel="noopener noreferrer"
          className="compact-secondary"
        >
          GitHub
          <span>↗</span>
        </a>

      </div>

    </div>

  </article>


  {/* =========================================
      MEDANPARK DASHBOARD
  ========================================== */}

  <article className="compact-card">

    <div className="compact-visual">

      <span className="compact-project-number">
        04
      </span>

      <div className="compact-browser">

        <div className="compact-browser-top">
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>

          <span>
            medanpark-dashboard.vercel.app
          </span>
        </div>

        <div className="compact-browser-screen">
          <img
            src="/projects/dashboard-web.png"
            alt="MEDANPARK Dashboard"
          />
        </div>

      </div>

    </div>

    <div className="compact-content">

      <span className="compact-category">
        ADMIN DASHBOARD
      </span>

      <h3>
        MEDANPARK Dashboard
      </h3>

      <p>
        Dashboard administrasi untuk memantau aktivitas
        parkir, verifikasi jukir, kendaraan, pendapatan,
        dan riwayat transaksi.
      </p>

      <div className="compact-tech-list">
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>API</span>
      </div>

      <div className="compact-actions">

        <a
          href="https://medanpark-dashboard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="compact-primary"
        >
          View Project
          <span>↗</span>
        </a>

        <a
          href="https://github.com/TAMAM3/medanpark-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="compact-secondary"
        >
          GitHub
          <span>↗</span>
        </a>

      </div>

    </div>

  </article>


  {/* =========================================
      MOVIX
  ========================================== */}

  <article className="compact-card compact-movix-card">

    <div className="compact-visual">

      <span className="compact-project-number">
        05
      </span>

      <div className="compact-browser">

        <div className="compact-browser-top">
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>

          <span>
            movix-eight-rosy.vercel.app
          </span>
        </div>

        <div className="compact-browser-screen">
          <img
            src="/projects/movie-web.png"
            alt="Movix"
          />
        </div>

      </div>

    </div>

    <div className="compact-content">

      <span className="compact-category">
        ENTERTAINMENT WEBSITE
      </span>

      <h3>
        Movix
      </h3>

      <p>
        Website eksplorasi film dan series dengan
        pencarian, detail film, popular movies,
        series, dan desain responsive.
      </p>

      <div className="compact-tech-list">
        <span>React</span>
        <span>API</span>
        <span>CSS</span>
        <span>Responsive</span>
      </div>

      <div className="compact-actions">

        <a
          href="https://movix-eight-rosy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="compact-primary"
        >
          View Project
          <span>↗</span>
        </a>

        <a
          href="https://github.com/TAMAM3/movix"
          target="_blank"
          rel="noopener noreferrer"
          className="compact-secondary"
        >
          GitHub
          <span>↗</span>
        </a>

      </div>

    </div>

  </article>

</div>

  </div>
</div>


        </section>

        {/* ===================================================
            ABOUT
        ==================================================== */}

        <section
          className="about-section reveal"
          id="about"
        >
          <div className="about-photo">
            <img
              src="/tamam-night.png"
              alt="Tamam"
            />

            <div className="about-photo-overlay"></div>

            <span className="about-photo-text">
              BETTER
              <br />
              EVERY
              <br />
              DAY.
            </span>
          </div>

          <div className="about-content">
            <span className="section-label">
              ABOUT ME
            </span>

            <h2>
              More than
              <br />
              <span>just code.</span>
            </h2>

            <p>
              I'm an Information Technology graduate interested in
              web development, AI automation, workflow integration,
              data management, and digital products.
            </p>

            <p>
              I enjoy connecting tools, APIs, databases, and
              automation workflows to turn ideas into practical
              systems that can solve real problems.
            </p>

            <div className="about-info-grid">
              <div>
                <small>LOCATION</small>
                <strong>Medan, Indonesia</strong>
              </div>

              <div>
                <small>EDUCATION</small>
                <strong>Information Technology</strong>
              </div>

              <div>
                <small>UNIVERSITY</small>
                <strong>UMSU</strong>
              </div>

              <div>
                <small>GRADUATED</small>
                <strong>2025</strong>
              </div>
            </div>
          </div>

          <div className="about-values">
            <div className="value-card">
              <span>01</span>

              <div>
                <strong>Problem Solver</strong>
                <p>
                  Interested in finding practical solutions to
                  real-world problems.
                </p>
              </div>
            </div>

            <div className="value-card">
              <span>02</span>

              <div>
                <strong>Continuous Learner</strong>
                <p>
                  Always learning new tools, technologies, and
                  better ways to build.
                </p>
              </div>
            </div>

            <div className="value-card">
              <span>03</span>

              <div>
                <strong>Detail Oriented</strong>
                <p>
                  Paying attention to details throughout every
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            SKILLS
        ==================================================== */}

        <section
          className="skills-section reveal"
          id="skills"
        >
          <div className="skills-heading">
            <div>
              <span className="section-label">
                SKILLS & TOOLS
              </span>

              <h2>
                Tools I
                <span> work with.</span>
              </h2>
            </div>

            <p>
              Technologies and tools I use across development,
              automation, data, design, and deployment.
            </p>
          </div>

<div
  className="skills-slider"
  ref={skillsSliderRef}
  onPointerDown={startDrag}
  onPointerMove={dragSkills}
  onPointerUp={stopDrag}
  onPointerCancel={stopDrag}
>
  <div className="skills-track">

    {[...skills, ...skills].map(
      (skill, index) => (
        <div
          className="skill-card"
          key={`${skill.name}-${index}`}
        >
          <div className="skill-icon">
            <img
              src={skill.icon}
              alt={skill.name}
              draggable="false"
            />
          </div>

          <span>
            {skill.name}
          </span>
        </div>
      )
    )}

  </div>
</div>
        </section>

        {/* ===================================================
            EXPERIENCE
        ==================================================== */}

        <section
          className="experience-section reveal"
          id="experience"
        >
          <div className="experience-heading">
            <span className="section-label">
              MY JOURNEY
            </span>

            <h2>
              Experience
              <span> so far.</span>
            </h2>
          </div>

          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <article
                className="experience-card"
                key={experience.company}
              >
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="experience-year">
                  {experience.year}
                </div>

                <div className="experience-content">
                  <small>
                    {experience.company}
                  </small>

                  <h3>
                    {experience.position}
                  </h3>

                  <p>
                    {experience.description}
                  </p>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="experience-index">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================
            CONTACT
        ==================================================== */}

        <section
          className="contact-section reveal"
          id="contact"
        >
          <div className="contact-glow"></div>

          <div className="contact-heading">
            <span className="section-label">
              LET'S CONNECT
            </span>

            <h2>
              Let's build
              <br />
              something <span>great.</span>
            </h2>

            <p>
              Open to discussing opportunities, collaborations,
              interesting projects, or just a good conversation.
            </p>
          </div>

<div className="contact-actions">

  <a
    href="https://wa.me/62895618114639"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-card"
  >
    <div className="contact-left">
      <div className="contact-icon">
        <img
          src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
          alt="WhatsApp"
        />
      </div>

      <span>WhatsApp</span>
    </div>

    <b>↗</b>
  </a>


  <a
    href="mailto:tamamhabib123@gmail.com"
    className="contact-card"
  >
    <div className="contact-left">
      <div className="contact-icon">
        <img
          src="https://cdn.simpleicons.org/gmail/FFFFFF"
          alt="Email"
        />
      </div>

      <span>Email</span>
    </div>

    <b>↗</b>
  </a>


  <a
    href="https://github.com/TAMAM3"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-card"
  >
    <div className="contact-left">
      <div className="contact-icon">
        <img
          src="https://cdn.simpleicons.org/github/FFFFFF"
          alt="GitHub"
        />
      </div>

      <span>GitHub</span>
    </div>

    <b>↗</b>
  </a>


  <a
    href="https://www.linkedin.com/in/tamam-habib"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-card"
  >
    <div className="contact-left">
      <div className="contact-icon">
        <img
  src="https://img.icons8.com/ios-filled/100/FFFFFF/linkedin.png"
  alt="LinkedIn"
/>
      </div>

      <span>LinkedIn</span>
    </div>

    <b>↗</b>
  </a>

</div>
        </section>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer>
        <a href="#home" className="footer-brand">
          TAH<span>.</span>
        </a>

        <span>
          © 2026 Tamam Auliya Habib.
        </span>

        <span>
          Built with React ♡
        </span>
      </footer>
    </div>
  );
}

export default App;