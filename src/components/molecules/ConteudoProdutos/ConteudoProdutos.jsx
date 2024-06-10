import React from 'react';
import ProductSection from '../ProdutoSecao/ProdutoSecao';
import Produto1 from '../../assets/produto1.png'
import './ConteudoProdutos.css';

const ConteudoProdutos = () => {
    const dailyDiscoveries = [
        { image: Produto1, name: 'Produto 1', price: 'R$47,40', sellers: '180' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
    ];

    const cutlery = [
        { image: Produto1, name: 'Conjunto de Talheres', price: 'R$259,99', sellers: '40' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
    ];

    const glasses = [
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
        { image: Produto1, name: 'Copos para Beber', price: 'R$55,99', sellers: '400' },
    ];

    return (
        <div className="main-products">
            <ProductSection className="descoberta-dia" title="DESCOBERTAS DO DIA" products={dailyDiscoveries} />
            <ProductSection title="TALHERES" products={cutlery} />
            <ProductSection title="COPOS" products={glasses} />
        </div>
    );
};

export default ConteudoProdutos;
