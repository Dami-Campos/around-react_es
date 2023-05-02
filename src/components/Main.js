import jacquesCousteau from '../images/Jaques_Cousteau.jpg';
import mainSymbol from '../images/main__symbol.png';
import mainVector from '../images/main__vector.png';

const Main = () => {
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
        <div id="openImage" className="profile__add">
          <img className="profile__vector" src={mainVector} alt="diminuta cruz" />
        </div>
        </main>
    )
}
export default Main
