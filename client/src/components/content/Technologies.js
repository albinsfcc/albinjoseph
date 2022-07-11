import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function Technologies() {
    var techList = [
        {
           icon: "fab fa-html5",
           label: "HTML5",
           color: "#e34f26"
        },
        {
            icon: "fab fa-css3-alt",
            label: "CSS3",
            color: "#264de4"
         },
         {
            icon: "fab fa-js",
            label: "JavaScript",
            color: "#F0DB4F"
         },
         {
            icon: "fab fa-bootstrap",
            label: "Bootstrap",
            color: "#563d7c"
         },
         {
            icon: "fab fa-node-js",
            label: "NodeJs",
            color: "#3C873A"
         },
         {
            icon: "fab fa-salesforce",
            label: "Demandware",
            color: "#1798c1"
         },
         {
            icon: "fab fa-react",
            label: "React",
            color: "#61DBFB"
         },
         {
            icon: "fab fa-jira",
            label: "Jira",
            color: "#004FC6"
         },
         {
            icon: "fab fa-bitbucket",
            label: "BitBucket",
            color: "#2580F7"
         }

    ];
    return (
        <div className="tech-area">
            <Container>
                <Row>
                    <Col>
                        <h2 className="tech-heading">
                            What do I know?
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex carousel-wrapper">
                    {window.innerWidth > 768 ? (techList.map((tech, index) => {
                                    return <Technology key={index} icon={tech.icon} label={tech.label} color={tech.color}/> 
                                })
                            ) : (
                                <Carousel variant="dark" interval={5000} pause={false} >
                                    {techList.map((tech, index) => {
                                        return <Carousel.Item key={index}>
                                                <Technology icon={tech.icon} label={tech.label} color={tech.color}/> 
                                                </Carousel.Item>
                                        })
                                    }
                                </Carousel>
							)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Technologies

function Technology({icon, label, color}) {
    return (
        <div className="technology-component d-flex">
            <div className="tech-wrapper">
                <div className="technology">
                    <i className={icon} style={{color: color}}></i>
                </div>
                <p className="tech-label">{label}</p>
            </div>
        </div>
    )
}