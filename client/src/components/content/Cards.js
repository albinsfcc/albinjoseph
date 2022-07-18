import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Cards() {
    // icons
    const FRONTEND_ICON = "fas fa-laptop-code";
    const BACKEND_ICON = "fas fa-server";
    const PHOTOGRAPHY_ICON = "fas fa-camera";

    // headings
    const FRONTEND_TITLE = "Front-end";
    const BACKEND_TITLE = "Back-end";
    const PHOTOGRAPHY_TITLE = "Photography";

    // text content
    const FRONTEND_TEXT = "I create beautiful, interactive and responsive front-end pages with CSS3, bootstrap, and jQuery. I also develop frontend applications using react.";
    const BACKEND_TEXT = "I'm a Professional Salesforce Commerce Cloud Developer. I could also code in other popular languages like Java and NodeJs.";
    const PHOTOGRAPHY_TEXT="I'm a passionate photographer. I use Canon EOS 200D Mark II DSLR with Canon EF-S 18-55mm 4-5.6 STM and Canon EF-S 55-250mm 4-5.6 STM lenses.";
    return (
        <div className="home-cards">
            <Container>
                <Row>
                    <Col>
                        <h3>
                            What do can do?
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={4}>
                        <Card icon={FRONTEND_ICON} heading={FRONTEND_TITLE} contentText={FRONTEND_TEXT}/>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card icon={BACKEND_ICON} heading={BACKEND_TITLE} contentText={BACKEND_TEXT}/>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card icon={PHOTOGRAPHY_ICON} heading={PHOTOGRAPHY_TITLE} contentText={PHOTOGRAPHY_TEXT}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards

function Card({icon, heading, contentText}) {
    return (
        <div className="card">
            <Container>
                <Row>
                    <Col>
                        <div className="card-icon">
                            <i className={icon}></i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="card-heading">
                            <h4>
                                {heading}
                            </h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="card-content">
                            {contentText}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}