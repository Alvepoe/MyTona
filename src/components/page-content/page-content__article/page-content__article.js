import React from 'react';
import moment from "moment";
import 'moment/locale/ru'
import './page-content__article.sass'

function Article({data:{author, title, description, url, urlToImage, publishedAt, source:{name: sourceName}}}) {

    moment.locale('ru');
    const publishedDate = moment.utc(publishedAt).format('D MMMM YYYY, H:mm');

    return  <div className={"page-content__article-container"}>
        <img src={urlToImage} alt={'img'} className={'page-content__article-img'}/>
        <div className={"page-content__article-data"}>
            <a  target="_blank"
                href={url}
            >
                {title}
            </a>
            <p>{description}</p>
            <span >{`${publishedDate} / ${sourceName}`}</span>
        </div>

    </div>
}

export default Article;