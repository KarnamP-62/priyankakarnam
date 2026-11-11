import { Link } from 'react-router-dom';
import mandala from '../assets/Mandala.jpg';
import './ArtDetail.css';

function Mandala() {
  return (
    <div className="art-detail">
      <header className="art-detail__header">
        <Link to="/" className="art-detail__back-link">
          Priyanka Karnam
        </Link>
        <div className="art-detail__header-contact">
          <a href="mailto:priyankapillaikarnam@gmail.com" className="art-detail__header-contact-link">
            Email
          </a>
          <a href="https://github.com/KarnamP-62?tab=repositories" target="_blank" rel="noopener noreferrer" className="art-detail__header-contact-link">
            Github
          </a>
          <a href="https://www.linkedin.com/in/priyanka-karnam-pk100/" target="_blank" rel="noopener noreferrer" className="art-detail__header-contact-link">
            LinkedIn
          </a>
        </div>
      </header>

      <section className="art-detail__content">
        <div className="art-detail__series">
          <h1 className="art-detail__series-title">Mandala</h1>

          <div className="art-detail__series-description">
            <p>
              <strong>Title:</strong> Mandala<br />
              <strong>Size:</strong> 15 in x 11 in<br />
              <strong>Medium:</strong> Acrylic on canvas boards
            </p>
          </div>

          <div className="art-detail__tanjore-container">
            <img
              src={mandala}
              alt="Mandala"
              className="art-detail__tanjore-image art-detail__tanjore-image--mandala"
            />
          </div>
        </div>
      </section>

      <footer className="art-detail__footer">
        <div className="art-detail__footer-line"></div>
        <p className="art-detail__footer-copyright">&copy; Copyright 2026, Priyanka Karnam</p>
      </footer>
    </div>
  );
}

export default Mandala;
