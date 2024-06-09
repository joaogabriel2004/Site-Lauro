import React from 'react';
import NavItem from '../../atoms/NavItem/NavItem';
import './SobreShopee.css';

const SobreShopee = () => {
    return (
        <div className="nav-sobre-shopee">
            <p className="title-sobre-shopee">SOBRE A SHOPEE</p>
            <ul>
                <NavItem>Sobre Nós</NavItem>
                <NavItem>Políticas Shopee</NavItem>
                <NavItem>Política de Privacidade</NavItem>
                <NavItem>Programa de Afiliados da Shopee</NavItem>
                <NavItem>Seja um Entregador Shopee</NavItem>
                <NavItem>Ofertas Relâmpago</NavItem>
                <NavItem>Shopee Blog</NavItem>
                <NavItem>Imprensa</NavItem>
            </ul>
        </div>
    );
};

export default SobreShopee;
