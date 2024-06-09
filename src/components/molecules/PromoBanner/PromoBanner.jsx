import React from 'react';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import './PromoBanner.css';

const PromoBanner = () => {
    return (
        <div className="promo-banner">
            <Image alt="Pessoa com laptop" />
            <Text>Laptops à partir de 90% de desconto</Text>
            <Image alt="Laptop" />
        </div>
    );
};

export default PromoBanner;
