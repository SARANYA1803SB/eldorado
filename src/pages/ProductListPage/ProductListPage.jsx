import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Navigationbar from '../../components/Navigationbar/Navigationbar';


function ProductListPage(props) {
    return (
        <div>
        <Navigationbar/>
        <ProductList/>
        </div>
    );
}

export default ProductListPage;