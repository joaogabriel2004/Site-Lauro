import React from 'react';
import PromoBanner from '../../molecules/PromoBanner/PromoBanner';
import ButtonSection from '../../molecules/ButtonSection/ButtonSection';
import FaixaAproveiteOfertas from '../../molecules/FaixaAproveiteOfertas/FaixaAproveiteOfertas';
import ConteudoProdutos from '../../molecules/ConteudoProdutos/ConteudoProdutos';

import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <PromoBanner />
            <ButtonSection />
            <FaixaAproveiteOfertas />
            <ConteudoProdutos />
        </div>
    );
};

export default MainContent;
