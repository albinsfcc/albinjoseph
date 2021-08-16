import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Hero() {
    return (
        <div className="hero-banner d-flex">
            <Container>
                <Row className="flex-column">
                    <Col xs={6}>
                        <div className="left-content">
                            <h2>
                                Hi, I'm Albin Joseph
                            </h2>
                            <h5>
                                Salesforce Commerce Cloud Developer
                            </h5>
                        </div>
                    </Col>
                    <Col xs={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
