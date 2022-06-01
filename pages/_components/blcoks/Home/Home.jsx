import React from "react";
import nasway from "./Home.module.scss";
import HomeImage from "./HomeImage.png";
import HomeLogo from "./HomeLogoWhite.svg";

import TextThree from "../_components/text3/TextThree";

const HomeBlcok = () => {
  return (
    <div className={nasway.Home}>
      <div className={nasway.TextBlock}>
          <img src={HomeLogo.src} alt="AGK GOLUBEV & KULIKOV" />
          <h2>Media Агенство</h2>
        <TextThree content="Мы не говорим о себе, а делаем то, что нравится Вашим клиентам, а Вам приносит желаемый результат!" width="426"/>
      </div>
      <div className={nasway.ImageBlock}>
        <img src={HomeImage.src} className={nasway.Image} alt="Продвижение бизнеса в цифровой форме" />
      </div>
    </div>
  );
};

export default HomeBlcok;
