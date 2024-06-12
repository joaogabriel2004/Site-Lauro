import React from 'react';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import Laptop from '../../assets/Lap top.png'
import Pessoa from '../../assets/Cara usando Lap top.png'
import './PromoBanner.css';

const PromoBanner = () => {
    return (
        <div className="promo-banner">
            <Image alt="Pessoa com laptop" src={Pessoa}/>
            <Text>Laptops à partir de 90% de desconto</Text>
            <Image alt="Laptop" src={Laptop} className="Laptop"/>
        </div>
    );
};

export default PromoBanner;
