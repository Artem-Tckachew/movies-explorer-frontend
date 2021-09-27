import './SearchForm.css'
function SearchForm() {
  return (
    <section className="search">
			<form className="search__form">
				<div className="search__input-container">
					<input className="search__input" name="film" id="film" placeholder="Фильм"/>
					<button type="submit" className="search__submit-button">Поиск</button>
				</div>
				<label className="search__switch">
					<input className="search__checkbox" type="checkbox" name="short" id="short"></input>
					<span className="search__slider"></span>
					<span className="search__checkbox-title">Короткометражки</span>
				</label>
			</form>
    </section>
  );
}

export default SearchForm;