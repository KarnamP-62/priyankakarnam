import { Link } from 'react-router-dom';
import exhibition1 from '../assets/Exhibition1.jpeg';
import exhibition4 from '../assets/Exhibition4.jpeg';
import finalPoster1 from '../assets/Final_Poster1.png';
import finalPoster2 from '../assets/Final_Poster2.png';
import glimpse1 from '../assets/glimpse1.png';
import glimpse2 from '../assets/glimpse-2.png';
import glimpse3 from '../assets/glimpse3.png';
import glimpse4 from '../assets/glimpse4.png';
import thesis1 from '../assets/thesis1.png';
import thesis2 from '../assets/thesis2.png';
import thesis3 from '../assets/thesis3.png';
import thesis4 from '../assets/thesis4.png';
import './Thesis.css';

function Thesis() {
  const navItems = [
    { label: 'Project', href: '/#project' },
    { label: 'Arts', href: '/#arts' },
    { label: 'Resume', href: '/#resume' },
    { label: 'About', href: '/#about' }
  ];

  return (
    <div className="thesis">
      <nav className="thesis__nav">
        <Link to="/" className="thesis__nav-name">
          Priyanka Karnam
        </Link>
        <ul className="thesis__nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="thesis__nav-item">
              <Link to={item.href} className="thesis__nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <header className="thesis__header">
        <Link to="/" className="thesis__back-link">← Back to portfolio</Link>
      </header>

      <section className="thesis__hero">
        <div className="thesis__hero-content">
          <h1 className="thesis__title">Detach from outcome</h1>
          <p className="thesis__subtitle">
            Harnessing data and design to support<br />
            mental resilience in emerging cricketers
          </p>
          <a
            href="https://repository.library.northeastern.edu/files/neu:ms38b4005"
            target="_blank"
            rel="noopener noreferrer"
            className="thesis__cta-button"
          >
            Check it out
          </a>
        </div>
      </section>

      <div className="thesis__content">
        {/* Abstract Section */}
        <section className="thesis__section">
          <div className="thesis__section-label">
            <span>Abstract</span>
          </div>
          <div className="thesis__section-content">
            <p className="thesis__text">
              Fear of outcome, stemming from the fear of failure and its consequences, is a psychological challenge faced universally. However, athletes-particularly in today's highly competitive and digitally connected world-are especially vulnerable. Playing live in front of large audiences exposes them to immense pressure and heightened expectations, leading to a significant fear of outcome and subsequent mental health challenges. While professional athletes often have access to advanced mental health resources, athletes at the national and academy levels face a critical gap in mental health support.
            </p>
          </div>
        </section>

        {/* Glimpse from Thesis Section */}
        <section className="thesis__section">
          <div className="thesis__section-label">
            <span>Glimpse from Thesis</span>
          </div>
          <div className="thesis__section-content">
            <div className="thesis__image-grid">
              <img src={glimpse1} alt="Glimpse 1" className="thesis__glimpse-image" />
              <img src={glimpse2} alt="Glimpse 2" className="thesis__glimpse-image" />
              <img src={glimpse3} alt="Glimpse 3" className="thesis__glimpse-image" />
              <img src={glimpse4} alt="Glimpse 4" className="thesis__glimpse-image" />
            </div>
            <p className="thesis__text">
              Neurofeedback, a scientifically proven tool for understanding and managing mental health, offers live feedback and training that has been adopted by many athletes. Similarly, journaling emotions is a long-standing practice for tracking habits and emotional states. Both methods could benefit significantly from thoughtful visual communication and data visualization, which are often overlooked in the design of mental health tools. Designers must develop impactful ways to convey mental health data through meaningful and engaging visuals. Focusing on cricket-a sport characterized by extensive commercialization and prolonged play durations-this research aims to develop and test mindset training solutions. The methodology involves testing neurofeedback and self-reflective journal prototypes to evaluate their effectiveness and explore the role of data visualization, graphs, and design in mental health interventions.
            </p>
          </div>
        </section>

        {/* Neurofeedback and Journal Designs Section */}
        <section className="thesis__section">
          <div className="thesis__section-label">
            <span>Neurofeedback and Journal Designs</span>
          </div>
          <div className="thesis__section-content">
            <div className="thesis__image-grid">
              <img src={thesis1} alt="Thesis 1" className="thesis__glimpse-image" />
              <img src={thesis2} alt="Thesis 2" className="thesis__glimpse-image" />
              <img src={thesis3} alt="Thesis 3" className="thesis__glimpse-image" />
              <img src={thesis4} alt="Thesis 4" className="thesis__glimpse-image" />
            </div>
            <p className="thesis__text">
              Neurofeedback system is designed to monitor stress, anxiety and focus, providing an opportunity to self-reflect and attempt to address the effects of fear of outcome. This system provides targeted exercise and data-driven feedback in a digital space, enabling users to track and possibly improve their mental health over time. An interactive self-reflective journal can help athletes manage fear of outcome by using visual graphs to track their mental health journey. By promoting self-awareness and capturing emotional insights, the journal complements the neurofeedback system, offering a holistic approach to mental well-being. Together, these tools aim to fill the mental health support gap for emerging athletes, integrating data visualization and design into sports psychology. This research empowers cricketers and coaches with data-driven methods to enhance mental resilience and foster sustainable personal and professional growth.
            </p>
          </div>
        </section>

        {/* Thesis Exhibition Section */}
        <section className="thesis__section">
          <div className="thesis__section-label">
            <span>Thesis Exhibition</span>
          </div>
          <div className="thesis__section-content">
            <div className="thesis__exhibition-grid">
              <div className="thesis__exhibition-posters">
                <img src={finalPoster1} alt="Final Poster 1" className="thesis__poster-image" />
                <img src={finalPoster2} alt="Final Poster 2" className="thesis__poster-image" />
              </div>
              <div className="thesis__exhibition-photos">
                <img src={exhibition1} alt="Exhibition 1" className="thesis__exhibition-image" />
                <img src={exhibition4} alt="Exhibition 4" className="thesis__exhibition-image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Thesis;
