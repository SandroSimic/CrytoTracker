import React, { useEffect, useState } from 'react'
import classes from '../App.module.scss'

const Sidebar = () => {

  const [coins, setPopularCoins] = useState([])

  const getCoins = async() => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false&locale=en');

    const data = await response.json();
    setPopularCoins(data)
  }

 

  useEffect(() => {
    getCoins()
  }, [])


  return (<nav className={classes.sidebar}>
    <ul className={classes['sidebar__listItems']}>
     {coins.map(coin => <li><img src={coin.image} alt={coin.name}/></li>)}
    </ul>
  </nav>);
};

export default Sidebar;
