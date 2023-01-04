import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar4.png";
import Tilt from "react-parallax-tilt";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                                style={{ height: "200px" }}
                            />
                        </Tilt>
                    </Col>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I'm floating between the earth, the sun and the
                            stars, I've been to 69 different galaxies
                            <br />
                            <br />
                            Besides being an astronaut, I'm also a
                            <i>
                                <b className="purple"> web developer </b>
                            </i>
                            <br />
                            <br />I am fluent in classics like &nbsp;
                            <i>
                                <b className="purple">C++, Java, Javascript </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products with{" "}
                            <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
