import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGoogle } from "react-icons/bs";
import ReactPlayer from "react-player";

function ProjectVideoCard(props) {
    return (
        <Card className="project-card-video">
            <div className="video-project">
                <ReactPlayer
                    url={props.videoPath}
                    pip={true}
                    controls={true}
                    playing={false}
                    width={"100%"}
                />
            </div>
            {/* <iframe
                src="https://drive.google.com/file/d/1XpnG_UG2GQ2Kyty14_ILzP3U1j_zAqae/preview"
                width={"100%"}
                height={"100%"}
                allow="autoplay"
            ></iframe> */}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGoogle /> &nbsp;
                    {props.isBlog ? "Blog" : "Drive"}
                </Button>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ProjectVideoCard;
