import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {baseUrl, getCurrentPage, pageSize, apiKey} from "../../../utils/utils";
import {stringify} from 'query-string'
import Pagination from "../page-content__pagination/page-content__pagination";
import NewsList from "../page-content__news-list/page-content__news-list";
import Error from '../../errors/error'
import Loader from '../../loader/loader'
import './page-content__news-container.sass'

function NewsContainer({isLoggedIn, search, code, url}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState(null);
    const [totalCount, setTotalCount] = useState();
    const [error, setError] = useState(null); const page = getCurrentPage(search);

    const language = code ? code : "en";
    const stringifiedParams = stringify({
        apiKey,
        pageSize,
        page,
        language
    });

    const apiUrl = `${baseUrl}/top-headlines?${stringifiedParams}`;
    const currentUrl = url;

    if(!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    useEffect(() => {
        setIsLoaded(false);
        axios(apiUrl)
            .then(res => {
                setArticles(res.data.articles);
                setTotalCount(res.data.totalResults);
                setIsLoaded(true);
            })
            .catch(error => {
                setError(error.response.data);
                setIsLoaded(true);
            })
    }, [code, page]);

    return <div className={"page-content__news-container"}>{isLoaded ? (!error ?
        <>  <NewsList articles={articles}/>

            <Pagination
                total={totalCount}
                pageSize={pageSize}
                url={currentUrl}
                page={page}
            />
        </>
        : <Error msg={error.message} />) :  <Loader />
    }
    </div>
}

const mapStateToProps = ({user: {isLoggedIn}}) => {
    return  {isLoggedIn};
};

export default connect(mapStateToProps)(NewsContainer);