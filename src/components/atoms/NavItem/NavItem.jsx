import React from 'react';
import './NavItem.css';

const NavItem = ({ children, onClick}) => {
    return (
        <li className="item-list" onclick={onClick}>
            <a href="#">{children}</a>
        </li>
    );
};

export default NavItem;