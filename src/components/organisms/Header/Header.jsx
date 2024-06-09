import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Button from '../../atoms/Button/Button';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import UserMenu from '../../molecules/UserMenu/UserMenu';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Button>Central do Vendedor</Button>
            <Button>Baixe o App</Button>
            <SearchBar />
            <UserMenu />
        </header>
    );
};

export default Header;
