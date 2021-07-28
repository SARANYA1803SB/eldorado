import React from 'react';
import { Row,Col,Form,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
    return(
        <div className="login-container container">
            <Row className="justify-content-md-center">
                <Col md="4">
                    <Row ><h2 className="text-center display-5">Sign In</h2></Row>
                    <br></br>
                    <Form name="form">
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" name="mail"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group classsName="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" name="password"/>
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row className="justify-content-md-center">
                            <Col md="auto"><Button variant="primary" type="submit" >LOGIN{" "} </Button></Col>
                        </Row>
                    </Form>
                    <hr></hr>
                    <h6 className="text-center">
                        <NavLink to="/reset-password"> Forgot password?</NavLink>
                        <br/><br/>
                        New to El Dorado? <NavLink to="/register">Sign Up</NavLink>
                    </h6>
                </Col>
            </Row>
        </div>
    );
}

export default RegistrationForm;

