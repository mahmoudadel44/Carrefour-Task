import React from "react";

const features_cards = ({features}) => {
  return (
    <div className="features col-md-3 pt-5 pb-5" key={features.icon}>
      <div className="media">
        <div className="free mr-3">
        {features.icon}
        </div>
        <div className="media-body">
          <h5 className="mt-0">{features.header}</h5>
         <span> while not exectly line</span>
        </div>
      </div>
    </div>
  );
};

export default features_cards;
