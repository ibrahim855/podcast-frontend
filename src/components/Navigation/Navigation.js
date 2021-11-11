import React from 'react';
import classes from './Navigation.module.css';



//COMPONENTS
import Logo from '../UI/Logo/Logo';
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';

function Navigation() {
    return <header className={classes.headerBar}>
                <Logo />
                <HamburgerMenu />
            </header>
}


export default React.memo(Navigation);