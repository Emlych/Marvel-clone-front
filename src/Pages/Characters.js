import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Paging from "../Components/Paging";
import CharacterCard from "../Components/CharacterCard";

const Characters = ({ searchCharacter }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = limit * (page - 1);
        const response = await axios.get(
          // `http://localhost:4000/characters?limit=${limit}&skip=${skip}&name=${searchCharacter}`
          `https://marvel-eld-back.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${searchCharacter}`
        );
        console.log("response data for personnages ==>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error in personnages ==>", error.message);
      }
    };
    fetchData();
  }, [page, limit, searchCharacter]);

  console.log("charactersdata ==> ", data);

  return (
    <div className="comics">
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div>
          <div className="comics__input">
            Nombre de personnages par page :
            <input
              type="number"
              name=""
              id=""
              value={limit}
              onChange={(event) => setLimit(event.target.value)}
            />
          </div>
          <div className="comics">
            {data.results.map((item, index) => {
              return (
                <div className="card__container">
                  <Link to={`/characters/${item._id}`} key={item._id}>
                    <CharacterCard item={item} index={index} />
                  </Link>
                </div>
              );
            })}
          </div>
          <Paging page={page} setPage={setPage} data={data} />
        </div>
      )}
    </div>
  );
};

export default Characters;
