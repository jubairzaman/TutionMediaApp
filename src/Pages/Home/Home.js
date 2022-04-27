import React from 'react';
import Topnav from '../Shared/Topnav/Topnav';
import Counter from './Counter/Counter';
import FeaturedTutor from './FeaturedTutor/FeaturedTutor';
import Topbanner from './TopBanner/Topbanner';

const Home = () => {
    return (
        <div>
            <Topnav></Topnav>
            <Topbanner></Topbanner>
            <Counter></Counter>
            <FeaturedTutor></FeaturedTutor>

        </div>
    );
};

export default Home;