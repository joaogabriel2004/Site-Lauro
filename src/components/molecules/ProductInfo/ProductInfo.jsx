import React from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
    return (
        <div className="product-info">
            <div className="product-description">
                <h2>Descrição</h2>
                <p>
                    Conjunto de talheres de 26 peças com organizador de gaveta é altamente durável, mantém suas características originais, preservando a beleza, a higiene e a durabilidade do material. Ideal para o uso diário.
                </p>
                <h2>Dados Técnicos:</h2>
                <ul>
                    <li>Material do cabo: Plástico Polipropileno</li>
                    <li>Lâminas de Inox</li>
                    <li>Conteúdo: 06 facas para churrasco; 06 garfos de mesa; 06 colheres de mesa; 06 colheres de sobremesa</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductInfo;