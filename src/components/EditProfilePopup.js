import React, { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from './CurrentUserContext';

function EditProfilePopup({ popupConfig, isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    currentUser.name && setName(currentUser.name);
    currentUser.about && setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      popupConfig={popupConfig}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onUpdateUser}
    >
      <fieldset className="form__container">
        <label className="form__field">
          <input
            className="form__input form__input_user_name"
            value={name}
            onChange={e => setName(e.target.value)}
            id="user-name-input"
            placeholder="Имя"
            name="name"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__input-error user-name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            className="form__input form__input_user_about"
            value={description}
            onChange={e => setDescription(e.target.value)}
            id="user-about-input"
            placeholder="О себе"
            name="about"
            type="text"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__input-error user-about-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;