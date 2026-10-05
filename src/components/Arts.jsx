import { Link } from 'react-router-dom';
import './Arts.css';

function Arts() {
  const artSeries = [
    {
      id: 1,
      title: 'Padathi',
      subtitle: 'Portrait of Indian womenhood.',
      link: '/arts/padathi'
    },
    {
      id: 2,
      title: 'Pattachitra art series',
      subtitle: '',
      link: '/arts/pattachitra'
    },
    {
      id: 3,
      title: 'Mandala',
      subtitle: '',
      link: '/arts/mandala'
    },
    {
      id: 4,
      title: 'Tanjore',
      subtitle: '',
      link: null,
      comingSoon: true
    }
  ];

  return (
    <div className="arts">
      <header className="arts__header">
        <Link to="/" className="arts__back-link">
          Priyanka Karnam
        </Link>
        <div className="arts__header-contact">
          <a href="mailto:priyankapillaikarnam@gmail.com" className="arts__header-contact-link">
            Email
          </a>
          <a href="https://github.com/KarnamP-62?tab=repositories" target="_blank" rel="noopener noreferrer" className="arts__header-contact-link">
            Github
          </a>
          <a href="https://www.linkedin.com/in/priyanka-karnam-pk100/" target="_blank" rel="noopener noreferrer" className="arts__header-contact-link">
            LinkedIn
          </a>
        </div>
      </header>

      <section className="arts__content">
        <h2 className="arts__section-title">Selected Arts</h2>

        <div className="arts__grid">
          {artSeries.map((series) => (
            <article key={series.id} className="arts__card">
              {series.comingSoon ? (
                <a
                  href="#"
                  className="arts__card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Work in progress, coming soon!');
                  }}
                >
                  <div className="arts__card-thumbnail">
                    <div className="arts__card-placeholder"></div>
                  </div>
                  <div className="arts__card-info">
                    <h3 className="arts__card-title">{series.title}</h3>
                    {series.subtitle && <p className="arts__card-subtitle">{series.subtitle}</p>}
                  </div>
                </a>
              ) : (
                <Link to={series.link} className="arts__card-link">
                  <div className="arts__card-thumbnail">
                    <div className="arts__card-placeholder"></div>
                  </div>
                  <div className="arts__card-info">
                    <h3 className="arts__card-title">{series.title}</h3>
                    {series.subtitle && <p className="arts__card-subtitle">{series.subtitle}</p>}
                  </div>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="arts__footer">
        <div className="arts__footer-line"></div>
        <p className="arts__footer-copyright">&copy; Copyright 2026, Priyanka Karnam</p>
      </footer>
    </div>
  );
}

export default Arts;
