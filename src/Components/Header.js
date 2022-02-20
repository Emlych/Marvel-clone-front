import React from "react";
import MarvelLogo from "../Assets/MarvelLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";

const Header = ({
  searchComic,
  handleSearchComic,
  searchCharacter,
  setSearchCharacter,
  setSignupModal,
  token,
}) => {
  const { pathname } = useLocation();
  console.log("pathname ==>", pathname);
  return (
    <div className="header">
      <div className="header__top">
        {token ? (
          <button>Disconnect</button>
        ) : (
          <button
            className="flexOne"
            onClick={() => {
              setSignupModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            Sign in | Join
          </button>
        )}

        <div className="flexOne">
          <img src={MarvelLogo} alt="marvel red logo" />
        </div>
        <div className="flexOne search">
          <FontAwesomeIcon icon={faSearch} />
          {pathname === "/comics" && (
            <input
              type="text"
              name="searchComic"
              id="searchComic"
              value={searchComic}
              onChange={handleSearchComic}
              placeholder="Search a comic name"
            />
          )}
          {pathname === "/characters" && (
            <input
              type="text"
              name="searchComic"
              id="searchComic"
              value={searchCharacter}
              onChange={setSearchCharacter}
              placeholder="Search a comic name"
            />
          )}
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
