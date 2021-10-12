import './SearchForm.css'
function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__input-box">
          <input className="search__input" name="film" id="film" placeholder="Фильм" />
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="filter-checkbox">
          <label className="filter-checkbox__switch">
            <input
              className="filter-checkbox__checkbox"
              type="checkbox"
            />
            <span className="filter-checkbox__round"></span>
          </label>
          <p className="filter-checkbox__title">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
