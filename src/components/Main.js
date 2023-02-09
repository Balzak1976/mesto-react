import React, { useState, useEffect } from 'react';
import { api } from '../utils/Api';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userAvatar, setUserAvatar] = useState(false);
  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь');
  // const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    api.getInitialProfile()
      .then(dataUser => {
        setUserAvatar(dataUser.avatar);
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log("render1");
  return (
    <main className='content'>
      {/* {console.log("render2")} */}
      <section className='profile'>
        <div
          className='profile__avatar-cover'
          onClick={onEditAvatar}
        >
          <div className='profile__avatar-icon'></div>
          <img
            className='profile__user-avatar'
            src={userAvatar || require('../images/avatar.jpg')}
            alt='аватар'
          />
        </div>

        <article className='profile__info'>
          <div className='profile__header'>
            <h1 className='profile__user-name'>{userName}</h1>
            <button
              className='profile__edit-button'
              onClick={onEditProfile}
              type='button'
              aria-label='редактировать'
            ></button>
          </div>
          <p className='profile__user-about'>{userDescription}</p>
        </article>

        <button
          className='profile__add-button'
          onClick={onAddPlace}
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
