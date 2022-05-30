import React from 'react';
import Image from './LandingImage.png'
import nasway from './LandingBlock.module.scss'

import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';

const LandingBlock = () => {
    return (
        <div className={nasway.Landing}>
            <div className={nasway.ImageBlock}>
                <img src={Image.src} alt="" />
            </div>
            <div className={nasway.TextBlock}>
                <TextOne content="лендинг"/>
                <TextThree content="Проработанная структура каждого блока сайта, покажет Ваш товар или услугу с самой выгодной стороны. Закрытие возражений и активация лояльности клиентов к бренду. Качественный UI/UX дизайн Premium-уровня. Всё это позволит Вам шагнуть далеко вперед ваших конкурентов." width="463"/>
                <button/>
            </div>
        </div>
    );
};

export default LandingBlock;