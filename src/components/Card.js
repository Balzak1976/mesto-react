import React from 'react';

function Card({ props, onCardClick }) {
  const { name, link, likes } = props;

  return (
    <>
      <li className='card__item'>
        <article className='card'>
          <button
            className='card__del-button card__del-button_hidden'
            type='button'
            aria-label='удалить'
          ></button>
          <img
            className='card__image'
            onClick={onCardClick}
            src={link}
            alt={name}
          />
          <div className='card__body'>
            <h2 className='card__title'>{name}</h2>
            <div className='card__like'>
              <button
                className='card__like-button'
                type='button'
                aria-label='лайкнуть'
              ></button>
              <div className='card__like-number'>
                {likes.length ? likes.length : null}
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  );
}

export default Card;
