import React, { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import { popupConfig } from '../utils/settings';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from './CurrentUserContext';
import { CardsContext } from './CardsContext';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDelCardPopupOpen, setDelCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleCardClick = (evt) => {
    setSelectedCard({ cardLink: evt.target.src, cardTitle: evt.target.alt });
    setImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDelCardPopupOpen(false);
    setImagePopupOpen(false);
  };

  const handleCardLike = ({ isLiked, _id }) => {
    api.changeLikeCardStatus(_id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === _id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = ({ isOwn, _id }) => {
    isOwn &&
      api.deleteCard(_id)
        .then(() => {
          setCards((state) => state.filter((c) => c._id !== _id));
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    api.createQueueFetch()
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='root-app'>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />

          <CardsContext.Provider value={cards}>
            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              />
          </CardsContext.Provider>


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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
