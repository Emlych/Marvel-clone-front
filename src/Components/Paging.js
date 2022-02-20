import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Paging = ({ page, setPage, data }) => {
  return (
    <div className="pages comics">
      {page === 1 ? (
        <div className="page">
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      ) : (
        <button onClick={() => page >= 2 && setPage(page - 1)}>Previous</button>
      )}

      <div className="page">{page}</div>
      {page === Math.ceil(data.count / 8) ? (
        <div className="page">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      ) : (
        <button onClick={() => page <= data.count / 8 && setPage(page + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paging;
