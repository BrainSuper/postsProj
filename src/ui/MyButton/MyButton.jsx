import React from 'react';
import cl from './MyButton.module.css';

const MyButton = (props) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    );
};

export default MyButton;