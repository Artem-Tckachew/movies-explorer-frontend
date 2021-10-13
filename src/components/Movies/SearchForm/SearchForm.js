import React, { useEffect } from 'react';
import './SearchForm.css'
import { UseFormValidation } from '../../UseFormValidation'

function SearchForm({ onSearchFilm }) {
  const { values, handleChange, resetFrom, isValid } = UseFormValidation();

  useEffect(() => {
    resetFrom({});
  }, [resetFrom]);

  function handleSubmit(e) {
    e.preventDefault();
    onSearchFilm(values);
  }

  return (
    <section className="search">
      <form className="search__form">
        <label className="search__input-box">
          <input type='text' className="search__input" onChange={handleChange} name="film" id="film" value={values.film || ''} placeholder="Фильм" required />
          <button type="submit" onSubmit={handleSubmit} className="search__submit"></button>
        </label>
        <span className="search__error" id='film-error'>{isValid ? 'Нужно ввести ключевое слово' : ''}</span>
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
