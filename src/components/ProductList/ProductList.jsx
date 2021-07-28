import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Pagination from './Pagination';
import { productsDetail } from './../../utils/ProductListUtil';
import './ProductList.css';

const ProductList = (props) => {

    const [postsPerPage] = useState(9);
    const [pageLimit] = useState(5);

    return (
        <div>
            <Container>
                <Pagination
                    productsDetail={productsDetail}
                    postsPerPage={postsPerPage}
                    totalPosts={productsDetail.length}
                    pageLimit={pageLimit}
                />
            </Container>
        </div>


    );
}

export default ProductList;