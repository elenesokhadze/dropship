import "./menu.css";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";

import {Link} from "react-router-dom";

const Menu = () => {
 return (
  <aside className="menu">
   <ul className="menu__nav">
    <Link to="/">
     <li className="menu__item">
      <img className="menu__logo" src={logo} alt=""></img>
     </li>
    </Link>
    <Link to="/user">
     <li className="menu__item menu__item--circle">
      <img className="user__image" src={user} alt=""></img>
     </li>
    </Link>
    <Link to="/catalog">
     <li className="menu__item">
      <i className="fas fa-list-ul"></i>
     </li>
    </Link>
    <Link to="/cart">
     <li className="menu__item">
      <i className="fas fa-shopping-cart"></i>
     </li>
    </Link>
   </ul>
  </aside>
 );
};

export default Menu;
