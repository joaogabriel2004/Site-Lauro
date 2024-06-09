import React from 'react';
import ProductCard from '../ProdutoIndividual/ProdutoIndividual';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import './ProdutoSecao.css';

const ProdutoSecao = ({ title, products }) => {
    return (
        <div className="product-section">
            <Text className="section-title">{title}</Text>
            <div className="products-container">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <Button>Ver Mais</Button>
        </div>
    );
};

export default ProdutoSecao;
