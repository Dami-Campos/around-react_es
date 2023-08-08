import jacquesCousteau from '../images/Jaques_Cousteau.jpg';
import mainSymbol from '../images/main__symbol.png';
import mainVector from '../images/main__vector.png';
import closeIcon from '../images/close_icon.png';

const Main = () => {
   /* function handleEditAvatarClick() {
      const openAvatar 
    }
    function handleEditProfileClick(e){
      e.target.classList.add('popup__opened');
    }
    function handleAddPlaceClick(){
      open
    }*/

    return(
        <main className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" src={jacquesCousteau} alt="Jacques Cousteau" /> 
        </div>
        <div className="profile__info">
          <div className="profile__name-rectangle">
            <h1 className="profile__name">Jacques Cousteau</h1> 
            <div className="profile__rectangle">
              <a id="openProfile" href="#"><button type="button" className="profile__button profile__open "><img className="profile__button-image" src={mainSymbol} alt="linea diagonal" /></button></a>
            </div> 
          </div> 
          <h2 className="profile__explorador">Explorador</h2>
        </div>
        <button id="openImage"  className="profile__add"/>
          <img className="profile__vector" src={mainVector} alt="diminuta cruz" />
          <section id="popupImage" className="popupimage popupimage-form popup">
      <div className="popupimage__close"><button className="popupimage__closebutton popup__close-button" type="button" id="closeImage"><img className="popup__close-image" src={closeIcon} alt="Cerrar página" /></button></div>
      <div className="popupimage__container">
        <h3 className="popupimage__header">Editar perfil</h3> 
        <form  className="popupimage__form form" name="register_image">
          <input id="form-title" className="popupimage__name form__input" type="text" name="name" minLength="2" maxLength="30" required placeholder="Título" />
          <span className="form__error form-title-error"></span>
          <input  id="form-link" className="popupimage__job form__input" type="url" name="link-image" placeholder="Enlace de la imagen" />
          <span className="form__error form-link-error"></span> 
          <button  className="popupimage__save form__submit" type="submit">Crear</button>
        </form>
      </div>
    </section>
        </main>
    )
}
export default Main
