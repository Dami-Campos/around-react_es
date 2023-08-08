import closeIcon from './images/close_icon.png';
import trashImage from './images/Trash.png'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="page">
    <section id="popupProfile" className="popupprofile popupprofile-form popup">
      <div className="popupprofile__close"><button  className="popupprofile__closebutton popup__close-button" type="button" id="closeProfile"><img className="popup__close-image" src={closeIcon} alt="Cerrar página" /></button></div>
      <div className="popupprofile__container">
        <h3 className="popupprofile__header">Editar perfil</h3>
        <form className="popupprofile__form form" name="register">
          <input id="form-profile" className="popupprofile__name form__input" type="text" name="name" placeholder="Nombre" minLength="2" maxLength="40" required />
          <span className="form__error form-profile-error"></span>
          <input id="form-job" className="popupprofile__job form__input" type="text" name="about" placeholder="Acerca de mi" minLength="2" maxLength="40" required />
          <span className="form__error form-job-error"></span>
          <button className="popupprofile__save  form__submit"  type="submit">Guardar</button>
        </form>
      </div>
    </section>
    
    <section id="imageOpen" className="popup"> 
      <div className="popup__close"><button className="popup__close-button" type="button" id="close"><img className="popup__close-image" src={closeIcon} alt="Cerrar página" /></button></div>
      <div className="popup__container">
        <img className="popup__size-image" />     
        <h3 className="popup__footer"></h3>
      </div>
    </section>
    <section className="popuppicture popup">
      <div className="popup__close"><button className="popuppicture__closebutton popup__close-button" type="button"><img className="popup__close-image" src={closeIcon} alt="Cerrar página" /></button></div>
      <div className="popuppicture__container">
        <h3 className="popuppicture__header">Cambiar foto de perfil</h3> 
        <form  className="popuppicture__form form" name="register_image">
          <input className="popuppicture__link form__input" type="url" name="link-image" placeholder="Enlace de la imagen" />
          <span className="form__error form-link-error"></span> 
        <button  className="popuppicture__save form__submit popup__button" type="submit">Guardar</button>
        </form>
      </div>
    </section> 
    <section className="popupdelete popup">
      <div className="popupdelete__close"><button className="popupdelete__closebutton popup__close-button" type="button"><img className="popup__close-image popup__close-button" src={closeIcon} alt="Cerrar página" /></button></div>
      <div className="popupdelete__container">
        <h3 className="popupdelete__header">¿Estás seguro/a?</h3> 
        <button className="popupdelete__save popup__button" type="submit">Sí</button>
      </div>
    </section>
    <Header/>
    <Main/>
    <section>
      <ul className="elements"></ul>
    </section>
    <Footer/>
    <template id="template" className="template">
      <li className="element">
        <img id="trash" className="card__delete-button"  src={trashImage} alt="Bote de basura" />
        <img id="open"  className="element__image" alt="Paisaje" />
        <div className="element__group">
          <h2 className="element__name"></h2>
          <div className="element__right">
          <button className="element__like"></button>
          <p className="element__count"></p>
          </div>
        </div>
        </li>
    </template>
  </div>
  </>
    
  );
}

export default App;
