import vector from '../images/Vector.png';
const Header = () => {
    return(
      <header className="header">
        <img className="header__vector" src={vector}  alt="Around the us" />
        <div className="header__line"></div>
      </header>
    )
}
export default Header