import Select from 'react-select';
import EldoradoLogo from '../../assets/images/EldoradoLogo.png';
import Profile from '../../assets/images/Profile.png';
import { Nav, Navbar, NavDropdown, Button, Form, FormControl } from "react-bootstrap";

const Categories = [
    { label: 'Groceries', value: 'Groceries' },
    { label: 'Clothes', value: 'Clothes' },
    { label: 'Books', value: 'Books' },
    { label: 'Medicines', value: 'Medicines' },
    { label: 'Fruits', value: 'Fruits' }
]

const Navigationbar = () => {
    return (
        <div className="navigation-bar">
            <Navbar expand="lg" bg="light">
                <div className="w-20">
                    <Navbar.Brand to="#"><img className="eldoradoLogo" src={EldoradoLogo} alt="" /></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="w-80">
                    <div className="navBarPart">
                        <div className="category-dropdown">
                            <Select placeholder="Search by Category" options={Categories} />
                        </div>
                    </div>

                    <div className="navBarPart">
                        <div className="search-box">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>
                    </div>

                    <div className="navBarPart">
                        <div className="user-profile">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <NavDropdown title={<img className="proPic" src={Profile} alt="" />} id="navbarScrollingDropdown">
                                    <NavDropdown.Item to="/profile">My Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item to="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Navigationbar;