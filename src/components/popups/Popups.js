import React from 'react'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { inputConfig } from '../../utils/settings';

function Popups() {
  return (
    <>
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
    </>
  )
}

export default Popups