import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import './ProdutoIndividual.css';

const ProdutoIndividual = ({ product }) => {
    return (
        <div className="product-card">
            <Link to="/other" className="custom-link">
                <Image src={product.image} alt={product.name} />
                <Text className="product-name">{product.name}</Text>
                <Text className="product-price">{product.price}</Text>
                <Text className="product-sellers">{product.sellers} vendidos</Text>
            </Link>
        </div>
    );
};

export default ProdutoIndividual;
