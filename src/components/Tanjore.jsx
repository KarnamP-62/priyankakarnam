import { Link } from 'react-router-dom';
import tanjore from '../assets/Tanjore.jpg';
import './ArtDetail.css';

function Tanjore() {
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
          <h1 className="art-detail__series-title">Tanjore</h1>

          <div className="art-detail__series-description">
            <p>
              Tanjore (Thanjavur) painting is a traditional South Indian art form from Tamil Nadu that blends vivid pigments with raised 3D gesso embossing and real 22- to 24-carat gold foil. It originated in the 16th century under royal patronage and remains prized for its devotional focus and sculptural richness.
            </p>
            <p>
              <strong>Title:</strong> Lakshmi devi tanjore painting<br />
              <strong>Size:</strong> 16 x 20 inches<br />
              <strong>Medium:</strong> Mixed medium
            </p>
          </div>

          <div className="art-detail__tanjore-container">
            <img
              src={tanjore}
              alt="Lakshmi devi tanjore"
              className="art-detail__tanjore-image"
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

export default Tanjore;
