import React from "react";
import classes from '../App.module.scss'

const CryptoInfo = ({coins}) => {
  return <div className={classes.coinInfo}>
    <img src={coins.image} alt={coins.name}/>
    <div>
        <h1>{coins.name}</h1>
        <p>{coins.description}</p>
        <h3>Market Cap: {coins.market_cap.usd}</h3>
    </div>
  </div>;
};

export default CryptoInfo;
