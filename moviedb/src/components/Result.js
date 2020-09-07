import React from 'react';

const Result = ({ result, openPopup }) => {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="" />
      <h3>{result.Title}asdfasd</h3>
      <h3>{result.imdbID}</h3>
    </div>
  );
};

export default Result;
