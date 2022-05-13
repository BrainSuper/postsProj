import React from 'react';
import {getPages} from "../../utils/getTotalPages";

const Paginator = ({totalPages, page, changePage}) => {
    return (
        <div>
            {getPages(totalPages).map(p => <span key={p} onClick={() => {
                changePage(p);
            }} className={p === page ? 'page page__active' : 'page'}>{p}</span>)}
        </div>
    );
};

export default Paginator;