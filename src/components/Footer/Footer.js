import './Footer.css';

function Footer() {
	return (
		<footer className="footer">
			<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className="footer__container">
				<p className="footer__copyright">© {new Date().getFullYear()}</p>
				<nav className="footer__menu">
					<ul className="footer__list">
						<li className="footer__item">
							<a className="footer__link" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
						</li>
						<li className="footer__item">
							<a className="footer__link" href="https://github.com" target="blank">Github</a>
						</li>
						<li className="footer__item">
							<a className="footer__link" href="https://facebook.com" target="blank">Facebook</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;