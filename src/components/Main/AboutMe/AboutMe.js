import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
			<h2 className="about-me__header">Студент</h2>
			<div className="about-me__container">
				<div className="about-me__info-container">
					<h3 className="about-me__name">Артём</h3>
					<h4 className="about-me__profession">Фронтенд-разработчик, 32 года</h4>
					<p className="about-me__text">Я родился в Воронеже, живу в Москве, учился в ВИВТ на факультете информатика и вычислительная техника. У меня есть жена. Я люблю слушать музыку. Недавно начал кодить на JS. Работаю в ООО "Ашан" с 2016 года, на должности эксперт по информационным технологиям.</p>
					<a className="about-me__link" href="https://facebook.com" target="blank">Facebook</a>
					<a className="about-me__link" href="https://github.com" target="blank">Github</a>
				</div>
				<div className="about-me__avatar"></div>
			</div>
    </section>
  );
}

export default AboutMe;
