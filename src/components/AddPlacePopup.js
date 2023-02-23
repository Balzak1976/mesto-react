import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ popupConfig, isOpen, isSaving, onClose, onAddPlace }) {
  const nameRef = useRef();
  const linkRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    onAddPlace({ name: nameRef.current.value, link: linkRef.current.value });
  };

  return (
    <PopupWithForm
      popupConfig={popupConfig}
      isOpen={isOpen}
      isSaving={isSaving}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__container">
        <label className="form__field">
          <input
            ref={nameRef}
            className="form__input form__input_card_name"
            id="card-name-input"
            placeholder="Название"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="form__input-error card-name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            ref={linkRef}
            className="form__input form__input_card_img-link"
            id="card-img-link-input"
            placeholder="Ссылка на картинку"
            name="link"
            type="url"
            required
          />
          <span className="form__input-error card-img-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
