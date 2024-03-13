import React, { useState } from 'react';
import { Tdata } from './data/TData'; // Importing the data

const Characters = ({ characterName }) => {
  const [showPopup, setShowPopup] = useState(false);
  const characterInfo = Tdata.characters[characterName];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <h1>{characterName}</h1>
      <img
        src="./spider_jerusalem.webp"
        alt="Character"
        onClick={togglePopup}
        style={{ cursor: 'pointer' }}
      />
      {showPopup && (
        <div className="popup">
          <button onClick={togglePopup}>Close</button>
          <div className="infoBox">
            <p>{characterInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
