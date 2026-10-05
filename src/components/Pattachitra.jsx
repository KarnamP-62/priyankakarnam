import { Link } from 'react-router-dom';
import dashavataramPdf from '../assets/dashavatharam.pdf';
import dashavataramImg from '../assets/dashavatharam.jpg';
import peacock from '../assets/peacock.jpg';
import './ArtDetail.css';

function Pattachitra() {
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
          <h1 className="art-detail__series-title">Pattachitra</h1>

          <div className="art-detail__series-description">
            <p>
              Pattachitra is a traditional Indian art form consisting of cloth-based scroll paintings, primarily originating from the eastern Indian states of Odisha and West Bengal. The art form is renowned for its intricate detailing, vibrant visual storytelling, and depictions of mythological narratives, religious stories, and traditional folktales.
            </p>
          </div>

          {/* Dashavatharam - Full width with info above */}
          <article className="art-detail__artwork-full">
            <div className="art-detail__artwork-info-top">
              <h3 className="art-detail__artwork-title">Title: Dashavatharam</h3>
              <p className="art-detail__artwork-detail">Size: 18 in x 24 in</p>
              <p className="art-detail__artwork-detail">Acrylic and pens on paper</p>
            </div>
            <p className="art-detail__artwork-description">
              According to Hindu mythology, the Dashavatara refers to the ten principal incarnations of the deity Vishnu. These include Matsya, the fish; Kurma, the tortoise; Varaha, the boar; Narasimha, the fierce half-lion, half-human form; Vamana, the dwarf; and Parashurama, the warrior sage. The remaining incarnations are Rama, depicted with his bow and arrows; Krishna, often represented with his flute; Buddha; and Kalki, the final incarnation yet to appear. This artwork visually explores the ten incarnations of Vishnu through the vibrant and intricate visual language of Pattachitra, bringing together mythology, symbolism, and traditional Indian storytelling in a contemporary composition.
            </p>
            <a href={dashavataramPdf} target="_blank" rel="noopener noreferrer">
              <img
                src={dashavataramImg}
                alt="Dashavatharam"
                className="art-detail__dashavatharam-canvas"
              />
            </a>
          </article>

          {/* Mayuramu */}
          <article className="art-detail__artwork-card">
            <div className="art-detail__artwork-image-container">
              <img
                src={peacock}
                alt="Mayuramu"
                className="art-detail__artwork-image"
              />
            </div>
            <div className="art-detail__artwork-info">
              <h3 className="art-detail__artwork-title">Title: Mayuramu</h3>
              <p className="art-detail__artwork-detail">Size: 6.25 in x 6.25 in</p>
              <p className="art-detail__artwork-detail">Acrylic on wood</p>
              <p className="art-detail__artwork-meaning" style={{ marginTop: '1rem' }}>
                A peacock surrounded by a floral landscape, visually explored through traditional Pattachitra motifs.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer className="art-detail__footer">
        <div className="art-detail__footer-line"></div>
        <p className="art-detail__footer-copyright">&copy; Copyright 2026, Priyanka Karnam</p>
      </footer>
    </div>
  );
}

export default Pattachitra;
