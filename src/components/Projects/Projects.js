import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import iowaState from "../../Assets/Projects/IowaState.jpg";
import autoBlinds from "../../Assets/Projects/autoBlinds.png";
import reddit from "../../Assets/Projects/reddit.jpg";
import uno from "../../Assets/Projects/uno.jpg";
import aiMusic from "../../Assets/Projects/aiMusic.png";
import cube from "../../Assets/Projects/cube.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and classes I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoBlinds}
              isBlog={false}
              title="Automated Blinds project"
              description="Arduino sketch and iPhone app for an automated window blinds system, capable of opening, closing, and scheduled opening of window blinds connected to a stepper motor."
              ghLink="https://github.com/Kenneth-Schueman/Automated-blinds-IOS"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="kenneth-schueman.github.io"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js."
              ghLink="https://github.com/Kenneth-Schueman/kenneth-schueman.github.io"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat Bot"
              description="Simple Python chat bot using the 'ChatterBot' library. The chat bot is trained on a dataset of 1000+ conversations and is able to answer questions and hold a conversation with the user."
              ghLink="https://github.com/Kenneth-Schueman/MSI-AI-Chat-Bot"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reddit}
              isBlog={false}
              title="RedditToVideo"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Kenneth-Schueman/RedditToVideo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uno}
              isBlog={false}
              title="one-to-one-Uno-java"
              description="Java based single player UNO style game"
              ghLink="https://github.com/Kenneth-Schueman/one-to-one-Uno-java"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiMusic}
              isBlog={false}
              title="RRN-Music-Predictorn"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Kenneth-Schueman/RRN-Music-Predictor"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cube}
              isBlog={false}
              title="Spinning-Cube-C"
              description="This is a C language code to visualize a spinning cube using just ASCII characters. Follow the guide to know more aobut the working and possible modifications.."
              ghLink="https://github.com/Kenneth-Schueman/Spinning-Cube-C"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="CPRE-288-Final"
              description="Final project for iastate CPRE 288 developed by Alexander Moeller, Kenneth Schueman, Clayton Reitz, and Nicholas Pinnello."
              ghLink="https://github.com/Kenneth-Schueman/CPRE-288-Final"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="Spring-2023-COM-S-319"
              description="User interfaces with Abraham Netzahualcoy Aldaco Gastelum"
              ghLink="https://github.com/Kenneth-Schueman/Spring-2023-COM-S-319"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="Spring-2023-CPRE-288"
              description=""
              ghLink="https://github.com/Kenneth-Schueman/Spring-2023-CPRE-288"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="Spring-2021-COM-S-227"
              description=""
              ghLink="https://github.com/Kenneth-Schueman/Spring-2021-COM-S-227"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="Fall-2021-SE-185"
              description=""
              ghLink="https://github.com/Kenneth-Schueman/Fall-2021-SE-185"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="Fall-2022-COM-S-228"
              description="This is an archive of my assignments from the course Computer Science 228 (Data structures) at Iowa State University in the Fall of 2022. Note: All assignments are listed in the index, sorted accordingly. The PDF (assignment specifications/instructions) given to me for each assignment, along with the JUnit tests I was given are contained in each directory accordingly."
              ghLink="https://github.com/Kenneth-Schueman/Fall-2022-COM-S-228"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="COM-S-363"
              description=""
              ghLink="https://github.com/Kenneth-Schueman/COM-S-363"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iowaState}
              isBlog={false}
              title="S-E-309"
              description=""
              ghLink="https://github.com/Kenneth-Schueman/S-E-309"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
