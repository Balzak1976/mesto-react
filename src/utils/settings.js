/* export const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};

export const profileSelectors = {
  userName: '.profile__user-name',
  userAbout: '.profile__user-about',
  userAvatar: '.profile__user-avatar',
};

export const cardsContainerSelector = '.cards__list';

export const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: '4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66',
    'Content-Type': 'application/json',
  },
}; */

export const popupConfig = {
  avatar: {
    classNameModifier: 'avatar',
    title: 'Обновить аватар',
    children: true,
    inputs: [
      {
        classNameModifier: 'avatar_img-link',
        placeholder: 'Ссылка на картинку',
        nameAttribute: 'avatar',
        typeAttribute: 'url',
        minLength: '2',
        maxLength: '200',
      },
    ],
  },

  profile: {
    classNameModifier: 'profile',
    title: 'Редактировать профиль',
    children: true,
    inputs: [
      {
        classNameModifier: 'user_name',
        placeholder: 'Имя',
        nameAttribute: 'name',
        typeAttribute: 'text',
        minLength: '2',
        maxLength: '40',
      },
      {
        classNameModifier: 'user_about',
        placeholder: 'О себе',
        nameAttribute: 'about',
        typeAttribute: 'text',
        minLength: '2',
        maxLength: '200',
      },
    ],
  },

  card: {
    classNameModifier: 'card',
    title: 'Новое место',
    children: true,
    inputs: [
      {
        classNameModifier: 'card_name',
        placeholder: 'Название',
        nameAttribute: 'name',
        typeAttribute: 'text',
        minLength: '2',
        maxLength: '30',
      },
      {
        classNameModifier: 'card_img-link',
        placeholder: 'Ссылка на картинку',
        nameAttribute: 'link',
        typeAttribute: 'url',
        minLength: '2',
        maxLength: '200',
      },
    ],
  },

  delCard: {
    classNameModifier: 'del-card',
    title: 'Вы уверены?',
    children: false,
    inputs: null,
  },
};
