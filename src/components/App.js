import React, { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import { popupConfig } from '../utils/settings';
import { CurrentUserContext } from './CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';

function App() {
  // ============================ STATES =======================================

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDelCardPopupOpen, setDelCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // ============================ POPUPS =======================================

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleCardClick = e => {
    setSelectedCard({ cardLink: e.target.src, cardTitle: e.target.alt });
    setImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDelCardPopupOpen(false);
    setImagePopupOpen(false);
  };

  const handleUpdateAvatar = ({ avatar }) => {
    api
      .setUserAvatar({ avatar })
      .then(res => {
        setCurrentUser(res);

        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .setUserInfo({ name, about })
      .then(res => {
        setCurrentUser(res);

        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .addPlace({ name, link })
      .then(newCard => {
        setCards([newCard, ...cards]);

        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  // ============================ CARDS =======================================

  const handleCardDelete = ({ isOwn, _id }) => {
    if (isOwn) {
      api
        .deleteCard(_id)
        .then(() => {
          setCards(state => state.filter(c => c._id !== _id));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const handleCardLike = ({ isLiked, _id }) => {
    api
      .changeLikeCardStatus(_id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => (c._id === _id ? newCard : c)));
      })
      .catch(err => {
        console.log(err);
      });
  };

  // ======================= Initial Profile, Cards ===========================

  useEffect(() => {
    api
      .createQueueFetch()
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // =============================================================================

  return (
    <div className="root-app">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer />

          <EditAvatarPopup
            popupConfig={popupConfig.avatar}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            popupConfig={popupConfig.profile}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            popupConfig={popupConfig.card}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <PopupWithForm
            popupConfig={popupConfig.delCard}
            isOpen={isDelCardPopupOpen}
            onClose={closeAllPopups}
          ></PopupWithForm>

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
