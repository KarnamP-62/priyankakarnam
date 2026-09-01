import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import nameLogo from '../assets/NAme.png';
import beyondTheSummit from '../assets/Beyondthesummit.png';
import upanishad from '../assets/Upanishad.mov';
import indiaKiHawa from '../assets/AQI.mov';
import kumbhMela from '../assets/Faith_Meets_Ecology.mov';
import thesis from '../assets/Thesis.png';
import picTransition from '../assets/From_Fuel_TO.mov';
import resumePdf from '../assets/Priyanka_Karnam_Resume.pdf';
import pacificYieldPdf from '../assets/Priyanka_Karnam_PacificYield.pdf';
import layer2Pdf from '../assets/Layer2-v1.pdf';
import ghgEmission from '../assets/GHG_Emission.png';
import cropYieldPic from '../assets/picyeild.png';
import './Landing.css';

function Landing() {
  const { isMobile } = useViewport();
  const [showHeaderName, setShowHeaderName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeaderName(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Project', href: '#project' },
    { label: 'Poster', href: '#poster' },
    { label: 'Arts', href: '#', comingSoon: true },
    { label: 'Resume', href: resumePdf, external: true }
  ];

  const posters = [
    {
      id: 1,
      title: 'The Pacific Harvest',
      subtitle: 'A Data Portrait of Livestock and Crop Production, 1961–2024',
      thumbnail: cropYieldPic,
      pdf: pacificYieldPdf
    },
    {
      id: 2,
      title: 'Decades of Change in GreenHouseGases',
      subtitle: 'Visualizing the Past, Present, and Future of Global GHG Emissions Across Sectors and Nations',
      thumbnail: ghgEmission,
      pdf: layer2Pdf
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'From Fuel Imports to Energy Independence',
      subtitle: 'The Pacific\'s Renewable Energy Transition',
      thumbnail: picTransition,
      isVideo: true,
      link: 'https://pic-renewable-energy-transition.vercel.app'
    },
    {
      id: 2,
      title: 'India Ki Hawa — The air we breathe',
      subtitle: 'Visualizing Spatial, Temporal, and Systemic Dimensions of India\'s Air Pollution',
      thumbnail: indiaKiHawa,
      isVideo: true,
      link: 'https://priyanka-karnam-india-aqi-visualization.vercel.app'
    },
    {
      id: 3,
      title: 'Beyond the Summit',
      subtitle: 'Visualizing the Routes, Risks, and Realities of the Mount Everest',
      thumbnail: beyondTheSummit,
      link: 'https://beyond-the-summit.vercel.app'
    },
    {
      id: 4,
      title: 'Tracing the Concept of Truth',
      subtitle: 'A computational exploration of how the concept of truth is expressed across the verses of the Upanishads',
      thumbnail: upanishad,
      isVideo: true,
      link: 'https://upanishads-truth-analysis.vercel.app'
    },
    {
      id: 5,
      title: 'Faith Meets Ecology',
      subtitle: 'Understanding Public Sentiment on Kumbh Mela\'s Environmental Footprint',
      thumbnail: kumbhMela,
      isVideo: true,
      link: 'https://kumbhmela-analysis.vercel.app'
    },
    {
      id: 6,
      title: 'Detach from Outcome',
      subtitle: 'Harnessing data and design to support mental resilience in emerging cricketers',
      thumbnail: thesis,
      link: '/thesis',
      isInternal: true
    },
  ];

  return (
    <div className="landing">
      {/* Header - Shows name on scroll + Contact links */}
      <header className="landing__header">
        <a
          href="#"
          className={`landing__header-name ${showHeaderName ? 'landing__header-name--visible' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Priyanka Karnam
        </a>
        <div className="landing__header-contact">
          <a href="mailto:priyankapillaikarnam@gmail.com" className="landing__header-contact-link">
            Email
          </a>
          <a href="https://github.com/KarnamP-62?tab=repositories" target="_blank" rel="noopener noreferrer" className="landing__header-contact-link">
            Github
          </a>
          <a href="https://www.linkedin.com/in/priyanka-karnam-pk100/" target="_blank" rel="noopener noreferrer" className="landing__header-contact-link">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Hero Section - Name, Bio & Nav centered */}
      <section className="landing__hero">
        <div className="landing__name-section">
          <img
            src={nameLogo}
            alt="Priyanka Karnam"
            className="landing__name-image"
          />
        </div>

        <p className="landing__bio">
          Hi! I analyze data and information, conduct in-depth research, and create narrative-driven designs that communicate stories through data and visual storytelling.
        </p>

        <nav className="landing__nav">
          <ul className="landing__nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="landing__nav-item">
                <a
                  href={item.href}
                  className="landing__nav-link"
                  {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  {...(item.comingSoon && {
                    onClick: (e) => {
                      e.preventDefault();
                      alert('Work in progress, coming soon!');
                    }
                  })}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Projects Section */}
      <section className="landing__projects" id="project">
        <h2 className="landing__projects-title">Selected Projects</h2>

        <div className="landing__projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="landing__project-card">
              {project.placeholder ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing__project-link"
                >
                  <div className="landing__project-placeholder">
                    <span>{project.title}</span>
                  </div>
                  <div className="landing__project-info">
                    <h3 className="landing__project-title">{project.title}</h3>
                    <p className="landing__project-subtitle">{project.subtitle}</p>
                  </div>
                </a>
              ) : project.isInternal ? (
                <Link to={project.link} className="landing__project-link">
                  <div className="landing__project-thumbnail">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="landing__project-image"
                    />
                  </div>
                  <div className="landing__project-info">
                    <h3 className="landing__project-title">{project.title}</h3>
                    <p className="landing__project-subtitle">{project.subtitle}</p>
                  </div>
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing__project-link"
                >
                  <div className="landing__project-thumbnail">
                    {project.isVideo ? (
                      <video
                        src={project.thumbnail}
                        className="landing__project-image"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="landing__project-image"
                      />
                    )}
                  </div>
                  <div className="landing__project-info">
                    <h3 className="landing__project-title">{project.title}</h3>
                    <p className="landing__project-subtitle">{project.subtitle}</p>
                  </div>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Poster Section */}
      <section className="landing__posters" id="poster">
        <h2 className="landing__projects-title">Posters</h2>
        <div className="landing__posters-grid">
          {posters.map((poster) => (
            <article key={poster.id} className="landing__poster-card">
              <a
                href={poster.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="landing__poster-link"
              >
                <div className="landing__poster-thumbnail">
                  <img
                    src={poster.thumbnail}
                    alt={poster.title}
                    className="landing__poster-image"
                  />
                </div>
                <div className="landing__poster-info">
                  <h3 className="landing__poster-title">{poster.title}</h3>
                  <p className="landing__poster-subtitle">{poster.subtitle}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="landing__footer">
        <div className="landing__footer-line"></div>
        <p className="landing__footer-copyright">&copy; Copyright 2026, Priyanka Karnam</p>
      </footer>

    </div>
  );
}

export default Landing;
