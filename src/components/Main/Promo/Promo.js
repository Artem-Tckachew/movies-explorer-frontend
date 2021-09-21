import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <>
      <section className='promo'>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </section>
      <nav className="promo__nav">
        <a href="#" className="promo__link">О проекте</a>
        <a href="#" className="promo__link">Технологии</a>
        <a href="#" className="promo__link">Студент</a>
      </nav>
    </>
  );
}

export default Promo;