import React from "react";
import Link from "./components/Link/Index";
import logo from "./components/logo.svg";
import nasway from "./Header.module.scss";

function Header(props) {
  return (
    <div className={nasway.Header}>
      <ul>
        <Link url="#" title="Услуги" />
        <Link url="#" title="Схема работы" />
        <Link url="#" title="Отзывы" />
      </ul>
      <img src={logo.src} alt="Agk Logo" />
      <ul>
        <Link url="#" title="Портфолио" />
        <Link url="#" title="Новости" />
        <Link url="#" title="Контакты" />
      </ul>
      
    </div>
  );
}

export default Header;
