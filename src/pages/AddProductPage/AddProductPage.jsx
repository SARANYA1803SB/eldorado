import React from 'react';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import Navigationbar from '../../components/Navigationbar/Navigationbar';


const AddProductPage=(props)=>{
    return (
        <div>
            <Navigationbar/>
            <AddProductForm/>
        </div>
    );
}

export default AddProductPage;