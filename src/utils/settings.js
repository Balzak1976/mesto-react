export const popupConfig = {
  avatar: {
    classNameModifier: 'avatar',
    title: 'Обновить аватар',
    btnTitle: 'Сохранить',
    children: [
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
    btnTitle: 'Сохранить',
    children: [
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
    btnTitle: 'Сохранить',
    children: [
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
    btnTitle: 'Да',
    children: null,
  },
};
