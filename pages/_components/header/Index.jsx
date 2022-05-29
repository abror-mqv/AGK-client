import React from 'react';
import Link from './components/Link/Index';
import Logo from '../../assets/Logo.svg'
import logo from './components/logo.svg'

function Header(props) {
    return (
        <div>
            <Link url="#" title="Услуги"/>
            <Link url="#" title="Схема работы"/>
            <Link url="#" title="Отзывы"/>
            <img src={logo.src} alt="Agk Logo" />
        </div>
    );
}

export default Header;