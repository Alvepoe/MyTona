import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import LogIn from "./page-content__login/page-content__login";
import NewContainer from "./page-content__news-container/page-content__news-container";

function PageContent() {
    return <main>
        <Switch>
            <Route path={'/news/:code?'}
                   render={(props) => {
                       const {match, location} = props;
                       return  <NewContainer code={match.params.code} url={match.url} search={location.search}/>}
                   }/>
            <Route path='/login'
                  component={LogIn}/>
            <Redirect exact path="/" to="/news"/>
        </Switch>
    </main>
}

export default PageContent;