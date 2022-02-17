//On hover : retourne la carte pour afficher la description

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        console.log("response data for personnages ==>", response.data);
        setCharactersData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("error in personnages ==>", error.message);
      }
    };
    fetchData();
  }, []);

  console.log("charactersdata ==> ", charactersData);

  return (
    <div className="comics">
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="comics">
          {charactersData.map((item, index) => {
            return (
              <Link to={`/characters/${item._id}`} key={item._id}>
                <div className="character__card">
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt="card of comic"
                  />
                  <div className="character__info">
                    <div className="character--title">{item.name}</div>
                    <div className="character--description">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Characters;
