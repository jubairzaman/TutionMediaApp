import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';

const Topnav = () => {
    return (
        <div className='backgroundColor1'>
            <Navbar className='container' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image className='img-fluid' src='https://i.ibb.co/9r5MB9p/Logo-Makr-8mu-NMq.png'></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">হোম</Nav.Link>

                            <NavDropdown title="সার্ভিসসমূহ" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">গৃহ শিক্ষক প্রয়োজন ?</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">টিউশন প্রয়োজন ?</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    আরবী শিক্ষক
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">হেল্প</Nav.Link>
                        </Nav>
                        <Button variant="success" size="sm">
                            Sing In
                        </Button>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Topnav;