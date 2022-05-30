import React from 'react';
import nasway from './TextThree.module.scss'

const TextThree = (props) => {
    return (
        <p style={{width: `${props.width}px`}} className={nasway.Text}>
            {props.content}
        </p>
    );
};

export default TextThree;