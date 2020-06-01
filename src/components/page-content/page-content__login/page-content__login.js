import React from 'react';
import actionCreator from "../../../services/actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import './page-content__login.sass'

function LogIn({state: {user: {isLoggedIn}}, logIn}) {
    if(isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return <div className={'page-content__login-container'}>
        <p className={"page-content__login-text"}>Войдите, чтобы посмотреть последние новости</p>
        <button className={'page-content__login-button'} onClick={logIn}>Войти</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

function mapDispatchToProps(dispatch) {
    return {
        logIn: () => {
            dispatch(actionCreator.logIn());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);