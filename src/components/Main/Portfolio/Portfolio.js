/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="projects">
        <li className="project">
          <a href="https://artem-tckachew.github.io/mesto/" target="blank" className="project__link project__link_type_word">Статичный сайт</a>
          <a href="https://artem-tckachew.github.io/mesto/" target="blank" className="project__link project__link_type_image"></a>
        </li>
        <li className="project">
          <a href="https://artem-tckachew.github.io/russian-travel/" target="blank" className="project__link project__link_type_word">Адаптивный сайт</a>
          <a href="https://artem-tckachew.github.io/russian-travel/" target="blank" className="project__link project__link_type_image"></a>
        </li>
        <li className="project">
          <a href="https://google.com" target="blank" className="project__link project__link_type_word">Одностраничное приложение</a>
          <a href="https://google.com" target="blank" className="project__link project__link_type_image"></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
