import React from 'react';
import TextOne from '../_components/text1/TextOne';
import TextThree from '../_components/text3/TextThree';
import nasway from './Support.module.scss'
import Image from './SupportImage.png'

const Support = () => {
    return (
        <div className={nasway.Support}>
            <div className={nasway.ImageBlock}>
                <img src={Image.src}/>
            </div>
            <div className={nasway.TextBlock}>
                <TextOne content="Поддержка"/>
                <TextThree content="Согласование всех этапов разработки и поддержка вашего ресурса. На всех этапах работы вы контролируете и принимаете участие в создании своего механизма привлечения клиентов. Мы прекрасно понимаем, что лучше вас, ваш бизнес, знаете только Вы. Мы можем только помочь в реализации ваших идей." width="457"/>
            </div>


            
        </div>
    );
};

export default Support;