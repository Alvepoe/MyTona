import React from "react";
import './header__logo.sass'
import logo from '../../../assets/logo.svg'

function HeaderLogo() {
    return <img className={'header__logo'} src={logo}/>
}

export default HeaderLogo;