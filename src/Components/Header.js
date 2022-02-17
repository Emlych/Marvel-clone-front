import React from "react";
import MarvelLogo from "../Assets/MarvelLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="flexOne">Sign in | Join</div>
        <div className="flexOne">
          <img src={MarvelLogo} alt="marvel red logo" />
        </div>
        <div className="flexOne search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" name="" id="" />
        </div>
      </div>
      <nav className="header__bottom">
        <Link to={`/characters`} className="flexOne">
          PERSONNAGES
        </Link>
        <Link to={`/comics`} className="flexOne">
          COMICS
        </Link>
        <Link to={`/favoris`} className="flexOne">
          FAVORIS
        </Link>
      </nav>
    </div>
  );
};

export default Header;
