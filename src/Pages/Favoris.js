import React, { useEffect, useState } from "react";
import axios from "axios";

const Favoris = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteData, setFavoriteData] = useState([]);

  //Load favorites
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/favorites/read"
        );
        console.log("response from favorite ===>", response.data.favorites);
        setFavoriteData(response.data.favorites);
        setIsLoading(false);
      } catch (error) {
        console.log("error in Favorite ==>", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <span>En cours de chargement</span>
      ) : (
        <div className="comics">
          <div>Favorite Comics</div>
          {favoriteData.map((item) => {
            return (
              <div className="" key={item._id}>
                <div className="title">{item.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favoris;
