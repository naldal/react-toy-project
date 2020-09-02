import React from 'react';

const Result = ({ result, openPopup }) => {
  return (
    <div className="result" onClick={openPopup}>
      <img src={result.Poster} alt="" />
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Result;
