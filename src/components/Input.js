import React from 'react';

function Input({ input }) {
  const { classNameModifier, placeholder, nameAttribute, typeAttribute, minLength, maxLength } = input;
  
  return (
    <>
      <label className='form__field'>
        <input
          className={`form__input form__input_${classNameModifier}`}
          id={`${classNameModifier}-input`}
          placeholder={placeholder}
          name={nameAttribute}
          type={typeAttribute}
          minLength={minLength}
          maxLength={maxLength}
          required  
        />
        <span className={`form__input-error ${classNameModifier}-input-error`}></span>
      </label>
    </>
  );
}

export default Input;
