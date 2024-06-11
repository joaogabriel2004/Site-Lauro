import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import PromoBanner from '../../molecules/PromoBanner/PromoBanner';
import ProductDetail from '../../organisms/ProductDetail/ProductDetail';
import './ProductPage.css';

const ProductPage = () => {
    return (
        <div className="product-page">
            <Header />
            <div class="content-page">
                <PromoBanner />
                <ProductDetail />
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage;