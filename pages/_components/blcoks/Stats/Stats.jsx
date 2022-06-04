import React from 'react';
import nasway from './Stats.module.scss'
import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import Image from './StatsImage.png'


const Stats = () => {
    return (
        <div className={nasway.Stats}>
            <div className={nasway.TextBlock}>
                <div>
                    <TextOne content="ПОКАЗАТЕЛИ"/>
                </div>
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
            <div className={nasway.ImageBlock}>
                <img src={Image.src} alt="" />
            </div>
        </div>
    );
};

export default Stats;