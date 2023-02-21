import React from 'react';

function Card({
  props: { name, link, likes, owner, currentUserId, _id },
  onCardClick,
  onCardLike,
  onCardDelete
}) {
  const isOwn = owner._id === currentUserId;

  const isLiked = likes.some((i) => i._id === currentUserId);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && 'card__like-button_active'
    }`;
  
  return (
    <li className="card__item">
      <article className="card">
        {isOwn && (
          <button
            className="card__del-button"
            onClick={() => onCardDelete({isOwn, _id})}
            type="button"
            aria-label="удалить"
          ></button>
        )}
        <img
          className="card__image"
          onClick={onCardClick}
          src={link}
          alt={name}
        />
        <div className="card__body">
          <h2 className="card__title">{name}</h2>
          <div className="card__like">
            <button
              className={cardLikeButtonClassName}
              onClick={() => onCardLike({isLiked, _id})}
              type="button"
              aria-label="лайкнуть"
            ></button>
            <div className="card__like-number">
              {likes.length > 0 && likes.length}
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
