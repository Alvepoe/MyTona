import React from 'react';
import HeaderLogo from './header__logo/header_logo'
import HeaderTitle from './header__title/header__title'
import Navbar from './header__navbar/header__navbar'
import './header.sass'

function Header() {
    return <div className={'header'}>
        <HeaderLogo />
        <HeaderTitle/>
        <Navbar />
    </div>
}

export default Header;