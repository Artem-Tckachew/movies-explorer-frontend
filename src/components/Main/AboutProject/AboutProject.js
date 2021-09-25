import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about">
            <h2 className="about__header">О проекте</h2>
            <div className="about__grid">
                <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
                <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className="about__title">На выпо лнение диплома ушло 5 недель</h3>   
                <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about__weeks">
                <h3 className="about__week">1 неделя</h3>
                <h3 className="about__week about__week_type_front">4 недели</h3>
                <p className="about__week-name">Back-end</p>
                <p className="about__week-name">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;
