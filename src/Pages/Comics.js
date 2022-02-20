import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicCard from "../Components/ComicCard";
import Paging from "../Components/Paging";

const Comics = ({ searchComic }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  //Load comics
  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = limit * (page - 1);
        const response = await axios.get(
          // "https://marvel-eld-back.herokuapp.com/comics"
          `http://localhost:4000/comics?limit=${limit}&skip=${skip}&title=${searchComic}`
        );
        console.log("response from comics ===>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error in Comic ==>", error.message);
      }
    };
    fetchData();
  }, [limit, page, searchComic]);

  //Add favorite comic to database
  const addFavorite = async (id, favTitle) => {
    try {
      const response = await axios.post(
        // "http://localhost:4000/favorites/add",
        "https://marvel-eld-back.herokuapp.com/favorites/add",
        {
          id: id,
          title: favTitle,
          favType: "comic",
        }
      );
      console.log("these data have been published ==>", response.data);
    } catch (error) {
      console.log("error in add favorite Comic ==>", error.message);
    }
  };

  return (
    <div>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div>
          <div className="comics__input">
            Nombre de comics par page
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
                <ComicCard item={item} key={index} addFavorite={addFavorite} />
              );
            })}
          </div>
          <Paging page={page} setPage={setPage} data={data} />
        </div>
      )}
    </div>
  );
};

export default Comics;
