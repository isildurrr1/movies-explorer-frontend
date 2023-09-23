import { useState, useCallback } from "react";

export function useValidation() {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  // const emailRe = /\S+@\S+\.\S+/;
  // const nameRe = /[^a-zA-Zа-яёА-ЯЁ\s-]/u;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    // required
    // if (value === '') {
    //   setErrors({ ...errors, [name]: "Поле не должно быть пустым" });
    // }

    // if (nameRe.test(formValue.name)) {
    //   if (name === 'name') {
    //     setErrors({ ...errors, name: "Недоступный формат имени" });
    //   } 
    // } else {
    //   setErrors({ ...errors, [name]: target.validationMessage });
    // }

    //   //email
    //   if (!emailRe.test(formValue.email)) {
    //     if (name === 'email') {
    //       setErrors({ ...errors, email: "Невалидный email" });
    //     }
    //     setIsValid(false);
    //   } else {
    //     setIsValid(target.closest("form").checkValidity());
    //     setErrors({ ...errors, [name]: target.validationMessage });
    //   }

  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValue(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValue, setErrors, setIsValid]
  );

  return { formValue, handleChange, errors, isValid, resetForm };
}