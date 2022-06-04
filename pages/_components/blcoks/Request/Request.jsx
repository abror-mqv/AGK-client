import React from 'react';
import Image from './Заявка.png'
import nasway from './Request.module.scss'
import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import { Button } from '@mui/material';


const Request = () => {
    return (
        <div className={nasway.Request}>
            <div className={nasway.TextBlock}>
                <div>
                    <TextOne content="Заявка"/>
                </div>
                <p>
                    Мы ценим Ваше время и точно уверены в успехе! Остался только один вопрос. Готовы ли Вы реализовать его прямо сейчас?
                </p>
                <Button>
                    Оставить заявку
                </Button>
            </div>
            <div className={nasway.ImageBlock}>
                <img src={Image.src} alt="" />
            </div>
        </div>
    );
};

export default Request;