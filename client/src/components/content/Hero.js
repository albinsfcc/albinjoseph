import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
var heroImage = require('../../static/images/albin.jpg')

function Hero() {
    return (
        <div className="hero-banner d-flex">
            <Container>
                <Row>
                    <Col lg={6} xs={12}>
                        <div className="left-content">
                            <div className="hero-image"> 
                                <img src={heroImage} alt="Albin Joseph" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <div className="right-content"> 
                            <h2>
                                Hi, I'm Albin Joseph
                            </h2>
                            <h5>
                                Salesforce Commerce Cloud Developer
                            </h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
