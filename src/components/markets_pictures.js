import React, { Component } from "react";
import market1 from "../images/market1.png";
import market2 from "../images/market2.png";
import market3 from "../images/market3.png";
import market4 from "../images/market4.png";
import watermark from '../images/watermark.png'
import MarketsPictures from "./Cards/markets_pictures_cards";
class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [
        {
          marketImage: <img src={market1} />,
        },
        {
          marketImage: <img src={market2} />,
        },
        {
          marketImage: <img src={market3} />,
        },
        {
          marketImage: <img src={market4} />,
        },
      ],
    };
  }

  render() {
    const { markets } = this.state;
    const allMarkets = markets.map((market) => {
      return <MarketsPictures markets={market}/>;
    });
    return (
      <div className="allmarkets pt-5 pb-5">
          {/* <img src={watermark}/> */}
        <h3 className="text-center">browse by branche</h3>
        <p className="lead text-center">Choose the brance closest to you</p>
        <div className="container">
          <div className="row">{allMarkets}</div>
        </div>
      </div>
    );
  }
}

export default Features;
