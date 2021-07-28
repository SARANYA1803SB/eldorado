import React from 'react';
import AdminProductDetails from '../../components/AdminProductDetails/AdminProductDetails';
import Navigationbar from '../../components/Navigationbar/Navigationbar';

function AdminProductDetailsPage(props) {
    return (
        <div>
            <Navigationbar/>
            <AdminProductDetails/>
        </div>
    );
}

export default AdminProductDetailsPage;