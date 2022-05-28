import React from 'react';
import { Stack } from '@mui/material';
import NavButton from './components/NavButton/Index';
import nasway from './Navigation.module.scss';


// Importing Logos from assets 
import contact from '../../assets/contacts.png'
import portfolio from '../../assets/portfolio.png'
import homepage from '../../assets/homepage.png'
import news from '../../assets/news.png'
import cabinett from '../../assets/cabinett.png'


// Creating navbar using NavButton components inside of mui "Stack" component, giving them imported Logos as props
function Navigation(props) {
    return (
        <Stack direction="row" spacing={5} className={nasway.NavigationStyle}>
            <NavButton content={contact}/>
            <NavButton content={portfolio}/>
            <NavButton content={homepage}/>
            <NavButton content={news}/>
            <NavButton content={cabinett}/>
        </Stack>
    );
}

export default Navigation;