import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { inputConfig } from '../utils/settings';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    const popupEditAvatarElem = document.querySelector('.popup_type_avatar');

    popupEditAvatarElem.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupEditProfileElem = document.querySelector('.popup_type_profile');

    popupEditProfileElem.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddPlaceElem = document.querySelector('.popup_type_card');

    popupAddPlaceElem.classList.add('popup_opened');
  }

  return (
    <div className='root-app'>
      <div className='page'>
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />

        <Footer />

        <PopupWithForm
          classNameModifier='avatar'
          title='Обновить аватар'
          inputs={inputConfig.avatar}
          children={true}
        />

        <PopupWithForm
          classNameModifier='profile'
          title='Редактировать профиль'
          inputs={inputConfig.profile}
          children={true}
        />

        <PopupWithForm
          classNameModifier='card'
          title='Новое место'
          inputs={inputConfig.card}
          children={true}
        />

        <PopupWithForm
          classNameModifier='del-card'
          // classNameModifier='del-card popup_opened'
          title='Вы уверены?'
          children={false}
        />

        <ImagePopup/>
      </div>

      <template className='card-template'>
        <li className='card__item'>
          <article className='card'>
            <button
              className='card__del-button card__del-button_hidden'
              type='button'
              aria-label='удалить'
            ></button>
            <img
              className='card__image'
              src='#'
              alt='картинка'
            />
            <div className='card__body'>
              <h2 className='card__title'></h2>
              <div className='card__like'>
                <button
                  className='card__like-button'
                  type='button'
                  aria-label='лайкнуть'
                ></button>
                <div className='card__like-number'></div>
              </div>
            </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;
