import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CharacterCard = ({ item, index }) => {
  const [fav, setFav] = useState(false);
  return (
    <div className="character__card" key={index}>
      <button
        className={fav ? "like fav" : "like nofav"}
        onClick={() => setFav(!fav)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <img
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        alt="card of comic"
      />
      <div className="character__info">
        <div className="title">{item.name}</div>

        <div className="character--description">
          {item.description ? item.description : "no description"}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
