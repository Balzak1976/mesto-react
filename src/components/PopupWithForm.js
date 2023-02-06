import React from 'react'

function PopupWithForm(props) {
  return (
    <div>
      <section className="popup popup_type_profile">
        <div className="popup__container">
          <button
            className="popup__close popup__close_type_profile"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">
            Редактировать профиль
          </h2>

          <form
            className="form form_type_profile"
            name="userProfile"
            noValidate
          >
            <fieldset className="form__container">
              <label className="form__field">
                <input
                  className="form__input form__input_user_name"
                  id="user-name-input"
                  placeholder="Имя"
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="form__input-error user-name-input-error"></span>
              </label>
              <label className="form__field">
                <input
                  className="form__input form__input_user_about"
                  id="user-about-input"
                  placeholder="О себе"
                  name="about"
                  type="text"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="form__input-error user-about-input-error">
                </span>
              </label>
            </fieldset>
            <button
              className="form__submit"
              name="submit"
              type="submit"
              disabled
            >Сохранить</button>
          </form>

        </div>
      </section>
    </div>
  )
}

export default PopupWithForm

