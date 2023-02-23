import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ popupConfig, isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar({avatar: avatarRef.current.value});
  };

  return (
    <PopupWithForm
      popupConfig={popupConfig}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__container">
        <label className="form__field">
          <input
            ref={avatarRef}
            className="form__input form__input_avatar_img-link"
            id="avatar-img-link-input"
            placeholder="Ссылка на картинку"
            name="avatar"
            type="url"
            required
          />
          <span className="form__input-error avatar-img-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
