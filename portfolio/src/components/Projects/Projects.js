import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectVideoCard from "./ProjectVideoCard";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.jpeg";
import aiSystem from "../../Assets/Projects/aiSystems.jpg";
import toDoList from "../../Assets/Projects/to-do-list.png";
import dataBase from "../../Assets/Projects/database.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={toDoList}
                            isBlog={false}
                            title="To-do-list"
                            description="This is a simple app, inspired by the trello app, where you can plan and tasks in detail, efficiently by breaking down tasks so that they can be easily managed."
                            ghLink="https://github.com/hieuminhvuu/Alien_list"
                            //demoLink="/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend. The classifier successfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                                        Then used Open-CV to detect the face in an image and then pass the face to the classifier to predict the emotion of a person."
                            ghLink="https://github.com/hieuminhvuu?tab=repositories"
                            // demoLink="/"      <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={aiSystem}
                            isBlog={false}
                            title="Artificial intelligence systems"
                            description="This project includes experimental works of Artificial Intelligence Systems, and learning to implement Neural Networks using Pytorch."
                            ghLink="https://github.com/hieuminhvuu/AI_System_ITMO"
                            // demoLink="/"      <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dataBase}
                            isBlog={false}
                            title="Data base"
                            description="The project covers specific tasks about working with postgreSQL, from designing relational data tables, to executing queries that manipulate them, randomly generating 1000 data into the tables... All the most basic and most practical knowledge about postgreSQL and relational databases."
                            ghLink="https://github.com/hieuminhvuu/DataBases_22-23"
                            // demoLink="/"      <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectVideoCard
                            videoPath={
                                "https://www.youtube.com/watch?v=zJODMh2cULg&list=RDzJODMh2cULg&start_radio=1&ab_channel=MORGENSHTERN"
                            }
                            isBlog={false}
                            title="Multimedia"
                            description="This is one of the interesting subjects that I took while studying at ITMO school. Through that, I learned how to create professional videos with effects and sound."
                            ghLink="https://drive.google.com/drive/u/0/folders/1FGUEyL4AUoijM_WU1-sC_GqGTzHkphrR"
                            // demoLink="/"      <--------Please include a demo link here
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
