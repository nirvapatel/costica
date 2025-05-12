import React from 'react';
import Herosection from "./components/Herosection";
import Ourstory from "./components/Ourstory";
import TrendingNow from "./components/Trending";
import Products from './components/TopProducts';
import Subscribesection from './components/Subscribesection';
// import Productpage from './components/Productpage';
import Weeklydeals from './components/Weeklydeals';

const Home = () => {
    return (
        <>
        <Herosection/>
        <Products/>
        <Ourstory/>
        <TrendingNow/>
        <Subscribesection/>
        <Weeklydeals/>
        {/* <Productpage/>        */}
         </>
    )
}
export default Home;