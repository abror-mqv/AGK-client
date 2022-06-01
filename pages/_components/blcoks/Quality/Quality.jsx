import React from 'react';
import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import Image from './QualityImage.png'
import nasway from './Quality.module.scss'
const Quality = () => {
    return (
        <div className={nasway.Quality}>
            <div className={nasway.ImageBlock}>
                <img src={Image.src} alt="" />
            </div>
            <div className={nasway.TextBlock}>
                <TextOne content="Качество"/>
                <TextThree content="Продуманная логическая структура разработанная индивидуально для вашего дела, даст понимание о продукте и окажет внимание к клиенту, что даст ему ощущение заботы о нём. Ваш сайт сможет влиять на выбор клиента и снимет дополнительную нагрузку с персонала. Визуал - что-то связанное со спокойствием и умиротворением, но не отходя от тематики сайтостроения." width="472"/>
            </div>
        </div>
    );
};

export default Quality;