import React from 'react';
import PromoBanner from '../../molecules/PromoBanner/PromoBanner';
import ButtonSection from '../../molecules/ButtonSection/ButtonSection';
import FaixaAproveiteOfertas from '../../molecules/FaixaAproveiteOfertas/FaixaAproveiteOfertas';
import ConteudoProdutos from '../../molecules/ConteudoProdutos/ConteudoProdutos';
import MenuAcessibilidade from '../../molecules/MenuAcessibilidade/MenuAcessibilidade';

import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <PromoBanner />
            <MenuAcessibilidade />
            <ButtonSection />
            <FaixaAproveiteOfertas />
            <ConteudoProdutos />
        </div>
    );
};

export default MainContent;
