import React from 'react';
import Input from './Input';

function PopupWithForm({ classNameModifier, title, inputs, children, isOpen }) {
  const inputComponents = children ?
    inputs.map((input, index) => <Input key={index} input={input} />) : null;
  


  return (
    <>
      <section
        className={
          `popup popup_type_${classNameModifier} ${isOpen && 'popup_opened'}`
        }
      >
        <div className='popup__container'>
          <button
            className='popup__close'
            type='button'
            aria-label='закрыть'
          ></button>
          <h2 className='popup__title'>{title}</h2>

          <form
            className={`form form_type_${classNameModifier}`}
            name={classNameModifier}
            noValidate
          >

            {children && <fieldset className='form__container'>{inputComponents}</fieldset>}
            
            <button
              className='form__submit'
              name='submit'
              type='submit'
              disabled
            >
              {children ? 'Сохранить' : 'Да'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
