import React, {useState} from 'react';
import Article from "../page-content__article/page-content__article";
import './page-content__news-list.sass'


function NewsList({articles}) {

    return <div className={"page-content__news-list"}>
        {articles.map((article, idx) => {
            return <Article key={idx} data={article}/>
        })}
    </div>
}


export default NewsList;