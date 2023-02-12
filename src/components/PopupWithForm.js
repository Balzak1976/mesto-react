import React from 'react';

function PopupWithForm({ popupConfig: { classNameModifier, title, btnTitle }, isOpen, onClose, children }) {
  return (
    <section
      className={
        `popup popup_type_${classNameModifier} ${isOpen && 'popup_opened'}`
      }
    >
      <div className='popup__container'>
        <button
          className='popup__close'
          onClick={onClose}
          type='button'
          aria-label='закрыть'
        ></button>
        <h2 className='popup__title'>{title}</h2>

        <form
          className={`form form_type_${classNameModifier}`}
          name={classNameModifier}
          noValidate
        >
          {children}
          
          <button
            className='form__submit'
            name='submit'
            type='submit'
            disabled
          >
            {btnTitle}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
