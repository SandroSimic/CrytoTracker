import React, { useEffect, useState } from "react";
import CryptoInfo from "../components/CryptoInfo";
import { useParams } from "react-router-dom";





const CryptoPage = () => {

  const [coin, setCoin] = useState('');
  const {cryptoId} = useParams();

  useEffect(() => {
    const getCoin = async() =>{
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}
      `);
  
      const data = await response.json();
      setCoin(data)
    }
    getCoin()
  },[cryptoId])


  return <CryptoInfo coins = {coin}/>;
};

export default CryptoPage;
