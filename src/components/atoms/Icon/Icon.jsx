import React from 'react';
import './Icon.css';

const Icon = ({ name }) => {
    return (
        <div className={`icon icon-${name}`}></div>
    );
};

export default Icon;
