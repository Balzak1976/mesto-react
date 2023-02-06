import React from 'react';

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-cover' onClick={onEditAvatar}>
          <div className='profile__avatar-icon'></div>
          <img className='profile__user-avatar' src={require('../images/avatar.jpg')} alt='аватар' />
        </div>
        <article className='profile__info'>
          <div className='profile__header'>
            <h1 className='profile__user-name'>Жак-Ив Кусто</h1>
            <button
              className='profile__edit-button'
              onClick={onEditProfile}
              type='button'
              aria-label='редактировать'
            ></button>
          </div>
          <p className='profile__user-about'>Исследователь</p>
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
