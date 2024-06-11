import React from 'react';
import Button from '../../atoms/Button/Button';
import './InfosCompra.css';

const InfosCompra = () => {
    return (
        <div className="infos-compra">
            <div>
                <h5>Frete:</h5>
                <h2>99x R$312,70</h2>
                <h5>Cor:</h5>
                <h2>Pequeno/Médio/Grande</h2>
                <h5>Preço:</h5>
                <h2>R$ 69,90</h2>
            </div>
            <Button>COMPRAR</Button>
        </div>
    );
};

export default InfosCompra;
