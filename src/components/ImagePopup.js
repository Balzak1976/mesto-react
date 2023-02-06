import React from 'react';

function ImagePopup() {
  return (
    <>
      <section className='popup popup_type_zoom-picture'>
        <div className='popup__container popup__container_type_zoom-picture'>
          <button
            className='popup__close popup__close_type_zoom-picture'
            type='button'
            aria-label='закрыть'
          ></button>
          <figure className='zoom-picture'>
            <img
              className='zoom-picture__image'
              src='#'
              alt='картинка'
            />
            <figcaption className='zoom-picture__caption'></figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default ImagePopup;
