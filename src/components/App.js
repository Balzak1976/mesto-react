import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="root-app">
      <div className="page">

      <Header/>

      <Main/>

      <Footer />
        
      <PopupWithForm />

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

      <section className="popup popup_type_card">
        <div className="popup__container">
          <button
            className="popup__close popup__close_type_card"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">
            Новое место
          </h2>

          <form
            className="form form_type_card"
            name="addCard"
            noValidate
          >
            <fieldset className="form__container">
              <label className="form__field">
                <input
                  className="form__input form__input_card_name"
                  id="card-name-input"
                  placeholder="Название"
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="form__input-error card-name-input-error">
                </span>
              </label>
              <label className="form__field">
                <input
                  className="form__input form__input_card_img-link"
                  id="card-img-link-input"
                  placeholder="Ссылка на картинку"
                  name="link"
                  type="url"
                  required
                />
                <span className="form__input-error card-img-link-input-error">
                </span>
              </label>
            </fieldset>
            <button
              className="form__submit"
              name="submit"
              type="submit"
            >Сохранить</button>
          </form>

        </div>
      </section>

      <section className="popup popup_type_zoom-picture">
        <div className="popup__container popup__container_type_zoom-picture">
          <button
            className="popup__close popup__close_type_zoom-picture"
            type="button"
            aria-label="закрыть"
          ></button>
          <figure className="zoom-picture">
            <img
              className="zoom-picture__image"
              src="#"
              alt="картинка"
            />
            <figcaption className="zoom-picture__caption"></figcaption>
          </figure>
        </div>
      </section>

      <section className="popup popup_type_del-card">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">
            Вы уверены?
          </h2>

          <form
            className="form form_type_delete"
            name="delCard"
          >
            <button
              className="form__submit"
              name="submit"
              type="submit"
            >Да</button>
          </form>

        </div>
      </section>

      <section className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">
            Обновить аватар
          </h2>

          <form
            className="form form_type_update-avatar"
            name="updateAvatar"
            noValidate
          >
            <fieldset className="form__container">
              <label className="form__field">
                <input
                  className="form__input form__input_avatar_img-link"
                  id="avatar-img-link-input"
                  placeholder="Ссылка на картинку"
                  name="avatar"
                  type="url"
                  required
                />
                <span className="form__input-error avatar-img-link-input-error">
                </span>
              </label>
            </fieldset>
            <button
              className="form__submit"
              name="submit"
              type="submit"
            >Сохранить</button>
          </form>

        </div>
      </section>

      </div>

      <template className="card-template">
      <li className="card__item">
        <article className="card">
          <button
            className="card__del-button card__del-button_hidden"
            type="button"
            aria-label="удалить"
          ></button>
          <img
            className="card__image"
            src="#"
            alt="картинка"
          />
          <div className="card__body">
            <h2 className="card__title"></h2>
            <div className="card__like">
              <button
                className="card__like-button"
                type="button"
                aria-label="лайкнуть"
              ></button>
              <div className="card__like-number"></div>
            </div>
          </div>
        </article>
      </li>
      </template>
    </div>
  );
}

export default App;
