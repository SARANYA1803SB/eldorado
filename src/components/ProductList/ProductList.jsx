import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Pagination from './Pagination';
import { productsDetail } from './../../utils/ProductListUtil';
import './ProductList.css';

const ProductList = (props) => {

    const[currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(9);

    //Get current posts
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=productsDetail.slice(indexOfFirstPost,indexOfLastPost); 

    // Change page
    const paginate =(number) =>setCurrentPage(number);
    
    const product = (productData) => {
        return (
            <div className="col-6 col-md-4" > 
            <div className="card p-3 mb-5 bg-white rounded thumbnail" id="item">
                <Col className="center" xs={6} md={4}>
                <Image  src={productData.imageUrl} card="true"/>
                </Col>
                <p className="title" id="title"><a>Name :{productData.name}</a></p>
                <p className="price" id="price">Price :{productData.price}</p>
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
                <Pagination
                postsPerPage={postsPerPage}
                totalPosts={productsDetail.length}
                paginate={paginate}
                currentPage={currentPage}
                />
            </Container>
            
        </div>
        
        
    );
}

export default ProductList;