import React from 'react';
import Button from '@mui/material/Button';

import nasway from './NavButton.module.scss'


// Creating a NavButton component using Logos resolving as props from Navigation component
function NavButton(props) {
    return (
        <Button className={nasway.ButtonStyle}>
            <img src={props.content.src} alt="NavBar element" />
        </Button>
    );
}

export default NavButton;