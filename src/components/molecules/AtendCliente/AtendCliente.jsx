import React from 'react';
import NavItem from '../../atoms/NavItem/NavItem';
import './AtendCliente.css';

const AtendCliente = () => {
    return (
        <div className="nav-atendimento-cliente">
            <p className="title-atendimento-cliente">ATENDIMENTO AO CLIENTE</p>
            <ul>
                <NavItem>Central de Ajuda</NavItem>
                <NavItem>Como Comprar</NavItem>
                <NavItem>Métodos de Pagamento</NavItem>
                <NavItem>Garantia Shopee</NavItem>
                <NavItem>Devolução e Reembolso</NavItem>
                <NavItem>Fale Conosco</NavItem>
                <NavItem>Ouvidoria</NavItem>
                <NavItem>Preferências de cookies</NavItem>
            </ul>
        </div>
    );
};

export default AtendCliente;
