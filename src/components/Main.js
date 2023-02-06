import React from 'react';

function Main() {
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
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-cover' onClick={handleEditAvatarClick}>
          <div className='profile__avatar-icon'></div>
          <img className='profile__user-avatar' src={require('../images/avatar.jpg')} alt='аватар' />
        </div>
        <article className='profile__info'>
          <div className='profile__header'>
            <h1 className='profile__user-name'>Жак-Ив Кусто</h1>
            <button
              className='profile__edit-button'
              onClick={handleEditProfileClick}
              type='button'
              aria-label='редактировать'
            ></button>
          </div>
          <p className='profile__user-about'>Исследователь</p>
        </article>
        <button
          className='profile__add-button'
          onClick={handleAddPlaceClick}
          type='button'
          aria-label='добавить'
        ></button>
      </section>

      <section className='cards'>
        <ul className='cards__list'></ul>
      </section>
    </main>
  );
}

export default Main;
