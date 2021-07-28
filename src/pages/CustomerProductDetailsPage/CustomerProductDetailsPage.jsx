import React from 'react';
import CustomerProductDetails from '../../components/CustomProductDetails/CustomProductDetails';
import Navigationbar from '../../components/Navigationbar/Navigationbar';

function CustomerProductDetailsPage(props) {
    return (
        <div>
            <Navigationbar/>
            <CustomerProductDetails/>
        </div>
    );
}

export default CustomerProductDetailsPage;