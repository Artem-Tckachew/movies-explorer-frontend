import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="section-title">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="stack">
        <li className="stack__item">HTML</li>
        <li className="stack__item">CSS</li>
        <li className="stack__item">JS</li>
        <li className="stack__item">React</li>
        <li className="stack__item">Git</li>
        <li className="stack__item">Express.js</li>
        <li className="stack__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
