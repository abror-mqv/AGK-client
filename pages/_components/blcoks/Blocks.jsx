import React from 'react';
import HomeBlock from './Home/Home';
import LandingBlock from './Landing/LandingBlock';
import Money from './Money/Money';
import Quality from './Quality/Quality';
import Request from './Request/Request';
import Stats from './Stats/Stats';
import Support from './Support/Support';


const Blocks = () => {
    return (
        <div>
            <HomeBlock/>
            <LandingBlock/>
            <Stats/>
            <Quality/>
            <Money/>
            <Support/>
            <Request/>
        </div>
    );
};

export default Blocks;