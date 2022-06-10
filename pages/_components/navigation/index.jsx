import React from "react";
import { Stack } from "@mui/material";
import nasway from "./Navigation.module.scss";
import Button from "@mui/material/Button";
import Image from "next/image";

// Importing Logos from assets
import contact from "../../assets/contacts.png";
import portfolio from "../../assets/portfolio.png";
import homepage from "../../assets/homepage.png";
import news from "../../assets/news.png";
import cabinett from "../../assets/cabinett.png";

// Creating navbar using NavButton components inside of mui "Stack" component, giving them imported Logos as props
function Navigation(props) {
  const NavButton = () => {
    return <Button className={nasway.ButtonStyle}></Button>;
  };
  return (
    <Stack direction="row" spacing={5} className={nasway.NavigationStyle}>
      <NavButton className={nasway.ButtonStyle}>
        <Image src={contact.src} alt="Contacts" />
      </NavButton>
      <NavButton className={nasway.ButtonStyle}>
        <Image src={portfolio.src} alt="Portfolio" />
      </NavButton>
      <NavButton className={nasway.ButtonStyle}>
        <Image src={homepage.src} alt="Home" />
      </NavButton>
      <NavButton className={nasway.ButtonStyle}>
        <Image src={news.src} alt="News" />
      </NavButton>
      <NavButton className={nasway.ButtonStyle}>
        <Image src={cabinett.src} alt="Cabinette" />
      </NavButton>
    </Stack>
  );
}

export default Navigation;
