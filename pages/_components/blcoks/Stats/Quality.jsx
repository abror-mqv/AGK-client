import React from 'react';
import nasway from './Quality.module.scss'
import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import Image from './iPad-Pro-Mockup 3.png'


const Stats = () => {
    return (
        <div className={nasway.Stats}>
            <div className={nasway.TextBlcok}>
                <TextOne content="ПОКАЗАТЕЛИ"/>
                <p>
                Какой тип сайта Вы не выберете для своего бизнеса, можете быть уверены, что он будет отвечать всем современным требованиям.
                <br/>
                 - легкое управление через CMS
                <br/>
                 - адаптивный дизайн
                <br/>
                 - высокая конверсия
                <br/>
                 - быстрая скорость загрузки
                <br/>
                 - современная SEO оптимизация
                </p>
            </div>
            <img src={Image.src} alt="" />
        </div>
    );
};

export default Stats;