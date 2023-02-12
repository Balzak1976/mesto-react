import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { popupConfig } from '../utils/settings';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDelCardPopupOpen, setDelCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleCardClick = evt => {
    setSelectedCard({ cardLink: evt.target.src, cardTitle: evt.target.alt});
    setImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDelCardPopupOpen(false);
    setImagePopupOpen(false);
  };

  return (
    <div className='root-app'>
      <div className='page'>
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm  popupConfig={popupConfig.avatar}
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
        >
          <fieldset className="form__container">
            <label className="form__field">
              <input
                className="form__input form__input_avatar_img-link"
                id="avatar-img-link-input"
                placeholder="Ссылка на картинку"
                name="avatar"
                type="url"
                required
              />
              <span className="form__input-error avatar-img-link-input-error">
              </span>
            </label>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm  popupConfig={popupConfig.profile}
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
        >
          <fieldset className="form__container">
            <label className="form__field">
              <input
                className="form__input form__input_user_name"
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
                id="user-about-input"
                placeholder="О себе"
                name="about"
                type="text"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="form__input-error user-about-input-error">
              </span>
            </label>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm  popupConfig={popupConfig.card}
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
        >
          <fieldset className="form__container">
            <label className="form__field">
              <input
                className="form__input form__input_card_name"
                id="card-name-input"
                placeholder="Название"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="form__input-error card-name-input-error">
              </span>
            </label>
            <label className="form__field">
              <input
                className="form__input form__input_card_img-link"
                id="card-img-link-input"
                placeholder="Ссылка на картинку"
                name="link"
                type="url"
                required
              />
              <span className="form__input-error card-img-link-input-error">
              </span>
            </label>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm  popupConfig={popupConfig.delCard}
                        isOpen={isDelCardPopupOpen}
                        onClose={closeAllPopups}
        >
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
