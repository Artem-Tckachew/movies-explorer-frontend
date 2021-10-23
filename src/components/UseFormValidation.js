import React, { useCallback } from "react";

export function UseFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    if (target.name === "email" && target.validationMessage){
      setErrors({...errors, [name]: "не похоже на почту" });
    } else if(target.name === "password" && target.validationMessage){
      setErrors({...errors, [name]: "пароль должен содержать минимум 8 символов" });
    }
    else {
      setErrors({...errors, [name]: target.validationMessage });
    }
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}

export default UseFormValidation;
