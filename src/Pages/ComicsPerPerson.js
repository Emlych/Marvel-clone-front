import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ComicsPerPerson = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comics/${id}`);
        console.log("got a response :", response.data);
        setCharacterData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error of Comics per person ==>", error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="comics">
          <div>{characterData.name}</div>

          <img
            src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
            alt={characterData.name}
          />
          <div className="comics">
            {characterData.comics.length} Comics :
            {characterData.comics.map((item, index) => {
              return (
                <div key={item._id}>
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComicsPerPerson;
