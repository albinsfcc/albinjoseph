import React from 'react'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

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
                                    <Nav.Link href="#home">Projects</Nav.Link>
                                    <Nav.Link href="#features">Contact</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
