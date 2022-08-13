import logo from "../images/header-logo.svg";

export function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      <div className="header__container">
        {props.isLoggedIn && (<p className="header__container_email header__container_email-block ">{props.userEmail}</p>)}
        <a className="header__container_link header__container_link-out" href={props.linkPath} onClick={props.onClick}>{props.linkText}</a>
      </div>
      
    </header>
  );
}
