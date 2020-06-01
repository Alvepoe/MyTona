import React from 'react';
import './loader.sass'

function Loader () {
    return <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Loader;