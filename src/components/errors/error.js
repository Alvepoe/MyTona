import React from 'react';
import './error.sass'

function Error ({msg}) {
    return <div className={'error'}>
        <p className={'error-text'}>  {msg} </p>
    </div>
}

export default Error;