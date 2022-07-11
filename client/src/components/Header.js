import React from 'react';
import {useState} from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <header className="header">
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar>
                            <Container fluid>
                                <Navbar.Brand href="#home">Albin Joseph</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link href="#projects">Projects</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Container>
                            <Hamburger/>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

function Hamburger() {
    const [openHamburger, setOpenHamburger] = useState(false);
    return (
        <div className="hamburger">
            <div className="icon" onClick={() => setOpenHamburger(!openHamburger)}>
                {!openHamburger && <i className="fa-solid fa-bars"></i>}
                
            </div>
            {openHamburger && (
                <div className="menu">
                    <div className='menu-close' onClick={() => setOpenHamburger(!openHamburger)}>
                        <i className="fa-solid fa-times"></i>
                    </div>
                    <ul className='menu-group'> 
                        <li className='menu-item'><Nav.Link href="#projects">Projects</Nav.Link></li>
                        <li className='menu-item'><Nav.Link href="#contact">Contact</Nav.Link></li>
                    </ul>
                </div>
            )}

            {openHamburger ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')} 
        </div>
    )
}

export default Header
