import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Popups from './popups/Popups';

function App() {
  return (
    <div className='root-app'>
      <div className='page'>
        <Header />

        <Main />

        <Footer />

        <Popups />
      </div>

      <template className='card-template'>
        <li className='card__item'>
          <article className='card'>
            <button
              className='card__del-button card__del-button_hidden'
              type='button'
              aria-label='удалить'
            ></button>
            <img
              className='card__image'
              src='#'
              alt='картинка'
            />
            <div className='card__body'>
              <h2 className='card__title'></h2>
              <div className='card__like'>
                <button
                  className='card__like-button'
                  type='button'
                  aria-label='лайкнуть'
                ></button>
                <div className='card__like-number'></div>
              </div>
            </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;
