import './Form.css'

function Form({
  buttonText,
  handlerSubmit,
  handleChange,
  isValid,
  isError,
  errorText,
  isFormSent,
  errors,
  children
})

{
  return (
    <form className="form" onSubmit={handlerSubmit}>
      {children}
      <label className="form__input-container">
        <span className="form__input-title">E-mail</span>
        <input
        required
        id='email'
        name='email'
        className='form__input'
        onChange={handleChange}
        type="email"
        autoFocus
        autoComplete="off"
        />
      </label>
        <span className="form__error">{errors.email}</span>
      <label className="form__input-container">
        <span className="form__input-title">Пароль</span>
        <input
         minLength="8"
         className='form__input'
         type='password'
         onChange={handleChange}
         name='password'
         autoComplete='off'
         required
        />
      </label>
        <span className="form__error">{errors.password}</span>
        {isError ? (
        <span className='form__error'>{errorText}
        </span>
      ) : null}
      <button onClick={handlerSubmit} disabled={!isValid} className={`form__submit-button  ${isValid && !isFormSent
          ? ''
          : 'form__submit-button_disabled'}`} type={isValid && !isFormSent
            ? 'submit'
            : 'button'
          }>{buttonText}</button>
    </form>
  );
}
export default Form;
