import React from "react";
import {Link} from "react-router-dom";

import './header__navbar.sass';

function Navbar() {
    return <nav>
        <ul>
            <li className={"header__nav-item"}>
                <Link to={"/news"} className={"header__nav-link"}>Мир</Link>
            </li>
            <li className={"header__nav-item"}>
                <Link to={"/news/ru"} className={"header__nav-link"}>Россия</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar;