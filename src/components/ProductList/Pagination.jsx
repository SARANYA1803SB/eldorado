import React, { useState } from 'react';
import './ProductList.css';

const Pagination = (props) => {


    const [pages] = useState(Math.ceil(props.totalPosts / props.postsPerPage));
    
    function goToNextPage() {
        props.paginate(props.currentPage+1);
    }

    function goToPreviousPage() {
        props.paginate(props.currentPage-1);
    }
    
    const getPaginationGroup = () => {
        if (pages < 5) {

            let start = Math.floor((props.currentPage - 1) / pages) * pages;
            return new Array(pages).fill().map((_, idx) => start + idx + 1);

        } else if (pages >= 5 && props.currentPage <= 5) {

            let start = Math.floor((props.currentPage - 1) / 5) * 5;
            return new Array(5).fill().map((_, idx) => start + idx + 1);

        } else if (pages > 5 && props.currentPage > 5) {

            let start = props.currentPage - 1;
            return new Array(5).fill().map((_, idx) => start + idx - 3);

        }
    };

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        props.paginate(pageNumber);
    }


    

    return (
    
                <nav className="nav justify-content-center">
                    <ul className="pagination">
                        <button
                            onClick={goToPreviousPage}
                            className={`page-link ${props.currentPage === 1 ? 'disabled' : ''}`}
                        >
                            prev
                        </button>
                        {getPaginationGroup().map((item, index) => (
                            <li key={index} className="page-item" placeholder="number value">
                                <button onClick={changePage} className={`page-link ${props.currentPage === item ? 'active' : null}`} placeholder="buttonElement">
                                    {item}
                                </button>
                            </li>
                        ))}
                        <button
                            onClick={goToNextPage}
                            className={`page-link ${props.currentPage === pages ? 'disabled' : ''}`}
                        >
                            next
                        </button>

                    </ul>
                </nav>
           
    );
}

export default Pagination;