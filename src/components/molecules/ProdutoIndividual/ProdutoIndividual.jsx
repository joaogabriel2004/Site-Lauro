import React from 'react';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text'
import ImgProduto from '../../assets/produto1.png'
import './ProdutoIndividual.css';

const ProdutoIndividual = () => {
    return (
        <div className="div-individual">
            <div className="img-produto">
                <Image src={ImgProduto} alt="Imagem Produto 1" />
            </div>
            <div className="info-produto">
                <Text className="nome-produto">Finger SkateBoard</Text>
            </div>
        </div>
    );
};

export default ProdutoIndividual;
