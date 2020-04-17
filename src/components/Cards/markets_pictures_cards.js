import React from "react";

const markets_pictures_cards = ({markets}) => {
  return (
    <div className="markets col-md-3" key={markets.marketImage}>
        <div className="marketImage overflow-hidden" style={{borderRadius:'3px'}}>
        {markets.marketImage}
      </div>
      <span>City Stars</span>
    </div>
  );
};

export default markets_pictures_cards;
