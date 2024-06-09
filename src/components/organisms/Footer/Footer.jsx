import React from 'react';
import AtendCliente from '../../molecules/AtendCliente/AtendCliente';
import SobreShopee from '../../molecules/SobreShopee/SobreShopee';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <AtendCliente />
                </div>
                <div className="footer-column">
                    <SobreShopee />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
