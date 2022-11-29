import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Vu Minh Hieu </span>
                        from <span className="purple"> Hanoi, Vietnam.</span>
                        <br />I am a passionate beginner web developer,
                        third-year student at ITMO University - Saint
                        Petersburg.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Photography
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Traveling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Flying into space makes people extremely small!"{" "}
                    </p>
                    <footer className="blockquote-footer">Vu M. Hieu</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
