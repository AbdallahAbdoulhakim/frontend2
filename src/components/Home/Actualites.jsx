import React from "react";
import LoaderBar from "../../assets/img/bars.svg";

import useApi from "../../hooks/useApi";
import ActualitesContainer from "./ActualitesContainer";

const Actualites = () => {
  const { data, error, loading } = useApi("/post/all?limit=10");

  const postsList = data?.data?.postsList;

  return (
    <>
      {loading && (
        <img src={LoaderBar} alt="loading menu..." style={{ height: "4vh" }} />
      )}

      {!loading && error && (
        <div className="container">
          <div className="alert alert-danger">{error?.message}.</div>
        </div>
      )}

      {!loading && data && <ActualitesContainer postsList={postsList} />}
    </>
  );
};

export default Actualites;
