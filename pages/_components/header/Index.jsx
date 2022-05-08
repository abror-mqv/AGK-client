import React from 'react';
import Link from './components/Link/Index';
import Logo from '../../assets/Logo.svg'

function Header(props) {
    return (
        <div>
            <Link url="#" title="Услуги"/>
            <Link url="#" title="Схема работы"/>
            <Link url="#" title="Отзывы"/>

        </div>
    );
}

export default Header;