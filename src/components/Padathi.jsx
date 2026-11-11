import { Link } from 'react-router-dom';
import women1 from '../assets/women1.jpg';
import women2 from '../assets/women2.jpg';
import women3 from '../assets/women3.jpg';
import women4 from '../assets/women4.jpg';
import women5 from '../assets/women5.jpg';
import women6 from '../assets/women6.jpg';
import './ArtDetail.css';

function Padathi() {
  const artworks = [
    {
      id: 6,
      image: women6,
      title: 'Chandrika'
    },
    {
      id: 5,
      image: women5,
      title: 'Charvi'
    },
    {
      id: 4,
      image: women4,
      title: 'Dhruthi'
    },
    {
      id: 3,
      image: women3,
      title: 'Nainika'
    },
    {
      id: 2,
      image: women2,
      title: 'Niyati'
    },
    {
      id: 1,
      image: women1,
      title: 'Champamala'
    }
  ];

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
          <h1 className="art-detail__series-title">Padathi art series - Portrait of Indian womenhood.</h1>

          <div className="art-detail__series-description">
            <p>
              This series of paintings represents women from India in their gentle, calm, strong, and confident forms, adorned with the lotus flower.
            </p>
            <p>
              The lotus holds a special place in Indian culture, symbolizing intelligence, creation, prosperity, and strength. Its ability to bloom beautifully from muddy waters makes it a powerful symbol of resilience and transformation.
            </p>
            <p>
              As an artist, I see a parallel between the lotus and women. Like the lotus, women can flourish and prosper even in environments that may attempt to suppress or limit them. Through this series, I explore the cultural significance of the lotus while celebrating the strength, resilience, individuality, and beauty of Indian women.
            </p>
            <p>
              Ultimately, the series is a celebration of women—their ability to grow, endure, and bloom on their own terms.
            </p>
          </div>

          <div className="art-detail__artworks art-detail__artworks--grid">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="art-detail__artwork-card--grid">
                <div className="art-detail__artwork-image-container">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="art-detail__artwork-image"
                  />
                </div>
                <h3 className="art-detail__artwork-title">{artwork.title}</h3>
              </div>
            ))}
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

export default Padathi;
