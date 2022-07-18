import React from 'react';
import {useState} from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


var menu = [{
    name: 'Projects',
    link: '/projects' 
}, {
    name: 'Experience',
    link: '/experience'
}, {
    name: 'Resume',
    link: '/resume'
}, {
    name: 'Skills',
    link: '/skills'
}, {
    name: 'Contact',
    link: '/contact'
}];

function Header() {
    return (
        <header className="header">
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar>
                            <Container fluid>
                                <Navbar.Brand><Link to="/">Albin Joseph</Link></Navbar.Brand>
                                <Nav className="me-auto">
                                    <NavList />
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
                        <NavList hamburger={setOpenHamburger}/>
                    </ul>
                </div>
            )}

            {openHamburger ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')} 
        </div>
    )
}

 function NavList(setOpenHamburger) {
  return (
    menu.map((item, index) => {
        return (
            <li key={index} className='menu-item'><Link className='nav-link' to={item.link} onClick={() => setOpenHamburger(false)}>{item.name}</Link></li>
        )
    })
  )
}

export default Header
