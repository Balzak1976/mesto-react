import React from 'react';

function Children({ inputs }) {
  const inputComponents = inputs.map((input, index) => {
    const { classNameModifier, placeholder, nameAttribute, typeAttribute, minLength, maxLength } = input;

    return (
      <label
        key={index}
        className='form__field'
      >
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
    );
  });

  return <fieldset className='form__container'>{inputComponents}</fieldset>;
}

export default Children;
