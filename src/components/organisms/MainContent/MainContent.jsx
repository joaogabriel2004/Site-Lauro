import React from 'react';
import PromoBanner from '../../molecules/PromoBanner/PromoBanner';
import ButtonSection from '../../molecules/ButtonSection/ButtonSection';
import FaixaAproveiteOfertas from '../../molecules/FaixaAproveiteOfertas/FaixaAproveiteOfertas';
import ProdutoIndividual from '../../molecules/ProdutoIndividual/ProdutoIndividual';

import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <PromoBanner />
            <ButtonSection />
            <FaixaAproveiteOfertas />
            <ProdutoIndividual />
        </div>
    );
};

export default MainContent;
