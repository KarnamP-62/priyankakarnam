import { Link } from 'react-router-dom';
import women1Pdf from '../assets/women1.pdf';
import women2Pdf from '../assets/women2.pdf';
import './ArtDetail.css';

function Padathi() {
  const artworks = [
    {
      id: 1,
      pdf: women1Pdf,
      title: 'Chandrika',
      meaning: '(beauty like moon, strong and confident)',
      size: '9 in x 12 in',
      medium: 'Acrylic on Canvas'
    },
    {
      id: 2,
      pdf: women2Pdf,
      title: 'Charvi',
      meaning: 'Beautiful and elegant, carrying a quiet, grounded presence',
      size: '9 in x 12 in',
      medium: 'Acrylic on Canvas'
    },
    {
      id: 3,
      image: null,
      placeholder: true,
      title: '',
      meaning: '',
      size: '9 in x 12 in',
      medium: 'Acrylic on Canvas'
    },
    {
      id: 4,
      image: null,
      placeholder: true,
      title: '',
      meaning: '',
      size: '9 in x 12 in',
      medium: 'Acrylic on Canvas'
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

          <div className="art-detail__artworks">
            {artworks.map((artwork) => (
              <article key={artwork.id} className="art-detail__artwork-card">
                <div className="art-detail__artwork-image-container">
                  {artwork.placeholder ? (
                    <div className="art-detail__artwork-placeholder">
                      <span className="art-detail__coming-soon">Coming Soon</span>
                    </div>
                  ) : (
                    <a href={artwork.pdf} target="_blank" rel="noopener noreferrer" className="art-detail__pdf-wrapper">
                      <embed
                        src={`${artwork.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                        type="application/pdf"
                        className="art-detail__pdf-embed"
                      />
                    </a>
                  )}
                </div>
                <div className="art-detail__artwork-info">
                  <h3 className="art-detail__artwork-title">
                    {artwork.title ? `Title: ${artwork.title}` : 'Title:'}
                  </h3>
                  <p className="art-detail__artwork-meaning">{artwork.meaning}</p>
                  <p className="art-detail__artwork-detail">Size: {artwork.size}</p>
                  <p className="art-detail__artwork-detail">{artwork.medium}</p>
                </div>
              </article>
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
