import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './ProductList.css';

const Pagination = (props) => {


    const [pages] = useState(Math.ceil(props.totalPosts / props.postsPerPage));
    const [currentPage, setCurrentPage] = useState(1);

    //Get current posts
    const indexOfLastPost = currentPage * props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
    const currentPosts = props.productsDetail.slice(indexOfFirstPost, indexOfLastPost);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    const getPaginationGroup = () => {
        if (pages < props.pageLimit) {

            let start = Math.floor((currentPage - 1) / pages) * pages;
            return new Array(pages).fill().map((_, idx) => start + idx + 1);

        } else if (pages >= props.pageLimit && currentPage <= props.pageLimit) {

            let start = Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;
            return new Array(props.pageLimit).fill().map((_, idx) => start + idx + 1);

        } else if (pages > props.pageLimit && currentPage > props.pageLimit) {

            let start = currentPage - 1;
            return new Array(props.pageLimit).fill().map((_, idx) => start + idx - 3);

        }
    };

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }


    const product = (productData) => {
        return (
            <div className="col-6 col-md-4">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <Col className="center" xs={6} md={4}>
                        <Image src={productData.imageUrl} thumbnail />
                    </Col>
                    <p className="title">Name :{productData.name}</p>
                    <p className="price">Price :{productData.price}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Container>
                <Row>
                    {currentPosts.map(product)}
                </Row>

                <nav className="nav justify-content-center">
                    <ul className="pagination">
                        <button
                            onClick={goToPreviousPage}
                            className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            prev
                        </button>
                        {getPaginationGroup().map((item, index) => (
                            <li key={index} className="page-item">
                                <button onClick={changePage} className={`page-link ${currentPage === item ? 'active' : null}`}>
                                    {item}
                                </button>
                            </li>
                        ))}
                        <button
                            onClick={goToNextPage}
                            className={`page-link ${currentPage === pages ? 'disabled' : ''}`}
                        >
                            next
                        </button>

                    </ul>
                </nav>
            </Container>

        </div>
    );
}

export default Pagination;