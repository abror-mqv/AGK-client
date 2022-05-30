import React from 'react';
import nasway from './TextOne.module.scss'


const TextOne = (props) => {
    return (
        <h2 className={nasway.Text}>
            {props.content}
        </h2>
    );
};

export default TextOne;