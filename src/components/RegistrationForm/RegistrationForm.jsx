import  { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { RegistrationService } from '../../services/UserService/RegistrationService';
import { PasswordValidation,PasswordHashing } from '../../utils/PasswordUtil';

const RegistrationForm = () => {

    const [user, setUser] = useState({
        mail: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [register, setRegister] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }
    const validation = () => {
        let error = {};
        if (!user.mail) {
            error["mail"] = "Mail Cannot be empty";
        }
        if (!user.password) {
            error["password"] = "Password Cannot be empty";
        }
        if (!user.confirmPassword) {
            error["confirmPassword"] = "Confirm PasswordCannot be empty";
        }
        if (user.password !== user.confirmPassword) {
            error["confirmPassword"] = "Passwords are not same";
        }
        else {
            if (!PasswordValidation(user.password)) {
                error["password"] = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
            }
        }

        setError(error);
        if (Object.keys(error).length === 0) { return true; }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.mail && user.password && user.confirmPassword) {
            setSubmitted(true);
            if (validation()) {
                setRegister(true);
                const mail = user.mail;
                const hashedPassword = PasswordHashing(user.password);
                // console.log(mail, hashedPassword);
                var data = { username: mail, password: hashedPassword };
                // console.log(data);
                RegistrationService(data);
            }
        }
    }

    return (
            <div className = "register-container container" >
        <Row className="justify-content-md-center">
            <Col md="4">
                <Row ><h2 className="text-center display-5">Sign Up</h2></Row>
                <br></br>
                <Form name="form" onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" name="mail" value={user.mail} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {submitted && <span style={{ color: "red" }}>{errors["mail"]}</span>}
                            </Form.Text>
                        </Form.Group>
                    </Row>

                    <Row>


                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                        <Form.Text className="text-muted">
                            {submitted && <span style={{ color: "red" }}>{errors["password"]}</span>}
                        </Form.Text>
                    </Form.Group>
                    <Row>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" placeholder="Confirm Password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {submitted && <span style={{ color: "red" }}>{errors["confirmPassword"]}</span>}
                            </Form.Text>
                        </Form.Group>
                    </Row>

                    <Row>
                        {!register && <Button variant="primary" type="submit"> Submit </Button>}
                        {register && submitted && <button disabled>Submit..<span className="spinner-border spinner-border-sm mr-1"></span></button>}
                    </Row>

                </Form>

                <hr></hr>
                <h6 className="text-center">
                    Already on El Dorado? <Link to ={`/`}>Edit</Link>
                </h6>
            </Col>
        </Row>
            </div >
     );
}

export default RegistrationForm;


