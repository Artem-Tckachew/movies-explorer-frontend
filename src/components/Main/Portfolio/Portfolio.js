import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="projects">
        <li className="project">
          <a href="#" className="project__link project__link_type_word">Статичный сайт</a>
          <a href="#" className="project__link project__link_type_image"></a>
        </li>
        <li className="project">
          <a href="#" className="project__link project__link_type_word">Адаптивный сайт</a>
          <a href="#" className="project__link project__link_type_image"></a>
        </li>
        <li className="project">
          <a href="#" className="project__link project__link_type_word">Одностраничное приложение</a>
          <a href="#" className="project__link project__link_type_image"></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;