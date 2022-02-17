import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://marvel-eld-back.herokuapp.com/comics"
          "http://localhost:4000/comics"
        );
        console.log("response data ===>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error in Comic ==>", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="comics">
          {data.results.map((item, index) => {
            return (
              <div className="card" key={index}>
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
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
