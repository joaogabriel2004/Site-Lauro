import React from 'react';
import ProductImageGallery from '../../molecules/ProductImageGallery/ProductImageGallery';
import ProductInfo from '../../molecules/ProductInfo/ProductInfo';
import InfosCompra from '../../molecules/InfosCompra/InfosCompra';
import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <div className="product-detail">
            <div>
                <h2>Jogo de Talheres Inox Nude 26 Peças Fratelli</h2>
                <div className='div-produto'>
                    <ProductImageGallery />
                    <InfosCompra />
                </div>
                <ProductInfo />
            </div>
        </div>
    );
};

export default ProductDetail;
