import React from 'react';
import Image from '../../atoms/Image/Image';
import ImgLibras from '../../assets/Libras.png'
import './MenuAcessibilidade.css';

const MenuAcessibilidade = () => {
    return (
        <div className="menu-acessibilidade">
            <Image src={ImgLibras}/>
            <Image src={ImgLibras}/>
        </div>
    );
};

export default MenuAcessibilidade;
