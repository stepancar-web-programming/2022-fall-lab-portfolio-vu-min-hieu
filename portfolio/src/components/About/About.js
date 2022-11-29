import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7} className="about-col">
                        <h1 className="about-title">
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col md={5} className="about-img">
                        <img
                            src={laptopImg}
                            alt="about"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">SkillSet </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack />

                <Github />
            </Container>
        </Container>
    );
}

export default About;
