import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ComicCard = ({ item, addFavorite }) => {
  const [fav, setFav] = useState(false);
  return (
    <div className="card" key={item._id}>
      <button
        className={fav ? "like fav" : "like nofav"}
        onClick={() => {
          setFav(!fav);
          addFavorite(item._id, item.title);
        }}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <img
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        alt="card of comic"
      />
      <div className="infos">
        <div className="title">{item.title}</div>

        <div className="description">
          {item.description ? item.description : "no description"}
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
