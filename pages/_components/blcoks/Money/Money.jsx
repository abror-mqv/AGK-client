import React from 'react';
import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import nasway from './Money.module.scss'
import Image from './MoneyImage.png'


const Money = () => {
    return (
        <div className={nasway.Money}>
            <div className={nasway.TextBlcok}>
                <TextOne content="Деньги"/>
                <TextThree content="Позвольте вашему сайту работать на вас. Приятная визуализация, нейромаркетинговая воронка, идеальное торговое предложение - ваш ресурс может экономить время, работать 24/7 и позволит решить рутинные задачи. Сайт - ещё одна шестерёнка в вашем механизме и должен приносить прибыль, а не висеть ссылкой в Интернете." width="472"/>
            </div>
            <div className={nasway.ImageBlock}>
                <img src={Image.src} alt="" />
            </div>
        </div>
    );
};

export default Money;