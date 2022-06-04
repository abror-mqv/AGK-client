import React from 'react';
import nasway from './LandingBlock.module.scss'
import Image from './langingImage.png'
import Link from '../../header/components/Link/Index'

import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import Button from '@mui/material/Button';

const LandingBlock = () => {
    return (
        <div className={nasway.Landing}>
            <div className={nasway.ImageBlock}>
                <img src={Image.src} alt="" />
            </div>
            <div className={nasway.TextBlock}>
            <div>
                <TextOne content="лендинг" style={{zIndex: 999}}/>
                </div>
                <TextThree content="Проработанная структура каждого блока сайта, покажет Ваш товар или услугу с самой выгодной стороны. Закрытие возражений и активация лояльности клиентов к бренду. Качественный UI/UX дизайн Premium-уровня. Всё это позволит Вам шагнуть далеко вперед ваших конкурентов." width="463"/>
                <Button>
                    Оставить заявку
                </Button>
            </div>
        </div>
    );
};

export default LandingBlock;