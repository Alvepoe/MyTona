import React,{useState} from "react";
import {connect} from "react-redux";
import {range} from '../../../utils/utils'
import classNames from "classnames";
import {Link} from "react-router-dom";
import './page-content__pagination.sass'
import actionCreator from "../../../services/actions/actions";


const PaginationItem = ({page, currentPage, url}) => {
    const classes = classNames({
        'page-content__pagination-link': true,
        "page-content__pagination-link_active": currentPage === page
    });
    return (

        <Link className={classes} to={`${url}?page=${page}`}>
            {page}
        </Link>

    )
};

const Pagination = ({total, pageSize, url, page: currentPage, portionSize = 10, portionNumber, updatePortionNumber}) => {debugger;

    const pagesCount = Math.ceil(total / pageSize);
    const pages = range(1, pagesCount);


    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftBound = (portionNumber - 1) * portionSize + 1;
    const rightBound = portionNumber * portionSize;

    return (
        <div className={"page-content__pagination-container"}>
            {portionNumber > 1 && <button onClick={() => {
               updatePortionNumber(portionNumber - 1)
            }}>Назад</button>}
            {pages.filter(page => page >= leftBound && page <= rightBound)
                .map(page => (
                    <PaginationItem
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        url={url}
                    />
                ))}
            {portionCount > portionNumber && <button onClick={() => {
                updatePortionNumber(portionNumber + 1)
            }}>Вперёд</button>}
        </div>
    )
};

const mapStateToProps = ({pagination: {portionNumber}}) => {
    return  {portionNumber}
};

function mapDispatchToProps(dispatch) {
    return {
        updatePortionNumber: (portionNumber) => {debugger;
            dispatch(actionCreator.updatePortionNumber(portionNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);