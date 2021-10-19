import React from 'react';
import './SearchForm.css'
import { UseFormValidation } from '../../UseFormValidation'

function SearchForm({ handleSubmit, handleChangeRadio }) {
  const checked = React.useRef();
  const { values, handleChange, errors, isValid } = UseFormValidation({
    key: '',
  });
  const [searchError, setSearchError] = React.useState('');

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      setSearchError('');
      handleSubmit(values.key);
    } else if (values.key.length > 0) {
      setSearchError(errors.key);
    } else {
      setSearchError('Нужно ввести ключевое слово');
    }
  }

  function change() {
    handleChangeRadio(checked.current.checked);
  }
  return (
    <section className="search">
      <form className="search__form" noValidate onSubmit={handleSearchSubmit}>
        <label className="search__input-box">
          <input
            className="search__input"
            placeholder="Фильм"
            value={values.key}
            onChange={handleChange}
            name="key"
            autoComplete="off"
            id="key-input"
            type="text"
            minLength="1"
            maxLength="60"
            required />
          <button type="submit" className="search__submit"></button>
        </label>
        <span className="search__error" id='film-error'>{searchError}</span>
        <div className="filter-checkbox">
          <label className="filter-checkbox__switch">
            <input
              className="filter-checkbox__checkbox"
              type="checkbox"
              ref={checked}
              id="shortfilm"
              defaultChecked={false}
              onChange={change}
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
