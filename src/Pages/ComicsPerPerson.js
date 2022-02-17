import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ComicsPerPerson = () => {
  const { id } = useParams();

  const [characterData, setCharacterData] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
          {/* <div>{characterData.name}</div>

          <img
            src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
            alt={characterData.name}
          /> */}
          <div className="comics">
            {/* {characterComics.map((item, index) => {
              return (
                <div className="card" key={item._id}>
                  {item.title}
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt="card of comic"
                  />
                  {item.description}
                </div>
              );
            })} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComicsPerPerson;
