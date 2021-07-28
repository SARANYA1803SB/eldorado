import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import TextField from './../TextField/TextField';
import Creatable from 'react-select/creatable';
import { addProduct } from './../../services/ProductService/ProductService';
import './AddProductForm.css';

//Categories in the dropdown menu
const categories = [
    { label: "Groceries", value: 1 },
    { label: "Books", value: 2 },
    { label: "Clothes", value: 3 },
    { label: "Medicines", value: 4 },
    { label: "Fruits", value: 5 },
    { label: "Miscellaneous", value: 6 }
];
var isValid = false;

//Validation for price and quantity using regex
const digitChecker = (value) => {
    var pat = new RegExp(/^[0-9\b]+$/);
    if (!pat.test(value)) {
        isValid = false;
        return "Please enter only digits";
    }
}

//Validation for fields
const validate = (data) => {
    const { name, desc, category, price, quantity, imageLinks, videoLinks, pdfLink } = data;
    const newErrors = {}; //Stores error statements for every field
    if (!name) {
        isValid = false;
        newErrors.name = "Please enter product name";
    }
    if (!desc) {
        isValid = false;
        newErrors.desc = "Please enter description for the product";
    }
    if (!category) {
        isValid = false;
        newErrors.category = "Please enter category of the product";
    }

    if (!price) {
        isValid = false;
        newErrors.price = "Please enter price for the product";
    }

    if (!quantity) {
        isValid = false;
        newErrors.quantity = "Please enter quantity of the product";
    }

    if (!imageLinks) {
        isValid = false;
        newErrors.imageLinks = "Please enter atleast one image link";
    }

    if (typeof price !== "undefined" && !newErrors.price) {
        newErrors.price = digitChecker(price);

    }
    if (typeof quantity !== "undefined" && !newErrors.quantity) {

        newErrors.quantity = digitChecker(quantity);
    }
    //Extracting image links from comma separated string and validating each link
    if (!newErrors.imageLinks) {
        var imageLinksArray = imageLinks.split(',');
        imageLinksArray = imageLinksArray.map(link => link.trim());
        imageLinksArray.forEach(link => validateImageLinks(link, newErrors));
    }
    //Extracting video links from comma separated string and validating each link
    if (videoLinks) {
        var videoLinksArray = videoLinks.split(',');
        videoLinksArray = videoLinksArray.map(link => link.trim());
        videoLinksArray.forEach(link => validateVideoLinks(link, newErrors));
    }

    if (pdfLink) {
        var pat = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:pdf)/i);
        if (!pat.test(pdfLink)) {
            isValid = false;
            newErrors.pdfLink = "Invalid PDF Link";
        }
    }

    return newErrors;

}
//Validation for image links using regex
const validateImageLinks = (link, newErrors) => {
    var pat = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i);
    if (!pat.test(link)) {
        isValid = false;
        newErrors.imageLinks = "Invalid Image Link";
    }
}
//Validation for video links using regex
const validateVideoLinks = (link, newErrors) => {
    console.log(link);
    var pat = new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/i);
    if (!pat.test(link)) {
        isValid = false;
        newErrors.videoLinks = "Invalid Video Link";
    }
}

//Functional Component for add product form
const AddProductForm = (props) => {

    const [data, setData] = useState({ name: "", desc: "", category: "", price: "", quantity: "", imageLinks: "", videoLinks: "", pdfLink: "" });
    const [errors, setErrors] = useState({});
    const [categoryValue, setCategoryValue] = useState('');
    //handler for changes in fields
    const changeHandler = (ce) => {
        setData({ ...data, [ce.target.id]: ce.target.value });
    }
    //handler for add product button
    const addHandler = (e) => {
        isValid = true;
        setErrors(validate(data));
        if (!isValid) {
            e.preventDefault();
        } else {
            addProduct(data);
        }
    }
    //handler for changes in category
    const handleChange = (value) => {
        setCategoryValue(value);
        if (value)
            setData({ ...data, 'category': value.label });
    }

    return (
        <div className="mx-auto">
            <Form>
                <Container className="formCenter">
                    <div>
                    {/* Field for Product Name */}
                        <TextField
                            id="name"
                            name="Product Name"
                            placeholder="Enter Product Name"
                            input={changeHandler}
                            isInvalid={!!errors.name}
                            error={errors.name}
                        />
                        {/* Field for Product Description */}
                        <Form.Group className="mb-3 required">
                            <Form.Label className="control-label">Product Description</Form.Label>
                            <Form.Control
                                id="desc"
                                as="textarea"
                                placeholder="Enter Product Description"
                                style={{ height: '100px' }}
                                onChange={(e) => changeHandler(e)}
                                isInvalid={!!errors.desc}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.desc}</Form.Control.Feedback>
                        </Form.Group>
                        {/* Field for Category */}
                        <Form.Group className="mb-3 required">
                            <Form.Label className="control-label">Category</Form.Label>
                            <Creatable
                                id="category"
                                isClearable
                                onChange={(value) => handleChange(value)}
                                options={categories}
                                value={categoryValue}

                            />
                            <Form.Control className='zeroheight'
                                isInvalid={!!errors.category}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.category}</Form.Control.Feedback>
                        </Form.Group>
                        {/* Field for Price */}
                        <TextField
                            id="price"
                            name="Price"
                            placeholder="Enter Price"
                            input={changeHandler}
                            isInvalid={!!errors.price}
                            error={errors.price}
                        />
                        {/* Field for Quantity */}
                        <TextField
                            id="quantity"
                            name="Quantity"
                            placeholder="Enter the Quantity"
                            input={changeHandler}
                            isInvalid={!!errors.quantity}
                            error={errors.quantity}
                        />
                        
                        {/* Field for Image Links */}
                        <TextField
                            id="imageLinks"
                            name="Image Links"
                            placeholder="Enter Image Links (Use comma for multiple Links)"
                            input={changeHandler}
                            isInvalid={!!errors.imageLinks}
                            error={errors.imageLinks}
                        />
                        {/* Field for Video Links */}
                        <TextField
                            id="videoLinks"
                            name="Video Links"
                            placeholder="Enter Youtube Video Links  (Use comma for multiple Links)"
                            input={changeHandler}
                            isInvalid={!!errors.videoLinks}
                            error={errors.videoLinks}
                        />
                        {/* Field for PDF Link */}
                        <TextField
                            name="PDF Link"
                            placeholder="Enter PDF Link"
                            id="pdfLink"
                            input={changeHandler}
                            isInvalid={!!errors.pdfLink}
                            error={errors.pdfLink}
                        />
                        <Button className="custom-btn" type="submit" onClick={addHandler}>
                            Add Product
                        </Button>
                    </div>
                </Container>
            </Form>
        </div>
    );
}

export default AddProductForm;