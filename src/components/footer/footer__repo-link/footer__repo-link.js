import React from 'react';
import gitLogo from '../../../assets/GitHub-Mark-Light-32px.png'
import './footer__repo-link.sass'

function RepoLink() {
    return <a href={"#"}><img src={gitLogo} className={'footer__repo-link'}/></a>
}

export default RepoLink;