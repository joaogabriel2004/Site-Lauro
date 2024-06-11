import React from 'react';
import './ProductImageGallery.css';
import Image1 from '../../assets/Talheres/Talheres 1.png'
import Image2 from '../../assets/Talheres/Talheres 2.png'
import Image3 from '../../assets/Talheres/Talheres 3.png'

const ProductImageGallery = () => {
    return (
        <div className="product-image-gallery">
            <div className="thumbnail-images">
                <img src={Image1} alt="Thumbnail 1"/>
                <img src={Image2} alt="Thumbnail 2"/>
                <img src={Image3} alt="Thumbnail 3"/>
            </div>
            <img src={Image1} alt="Main Product" className="main-image"/>
        </div>
    );
};

export default ProductImageGallery;
