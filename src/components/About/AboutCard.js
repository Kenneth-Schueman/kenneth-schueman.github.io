import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>&emsp; Hi Everyone, I am <span className="purple">Kenneth Schueman </span>
            but most people call me <span className="purple">Ken </span> from <span className="purple"> Chicago, Illinois.</span></p>

            <p>&emsp; I am currently studying Software Engineering at Iowa State Unviersity and am entering my fourth year. I am also nearing the end of my internship at <span className="purple">Motorola Solutions</span> as a Software Engineer. 
            I have a passion for software development and am always looking to learn new things. I am also a member of the <span className="purple">Iowa State Cyber Defense Club</span> and often take part of community <span className="purple">Hackaton</span>.</p>
  
            <p>&emsp; Apart from coding, I have a ton of other internists including.</p>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />&emsp; Small electronic projects including Raspberry Pi and Arduino, soddering, and 3D printing.
            </li>
            <li className="about-activity">
              <ImPointRight />&emsp; Tinkering with my car and bikes.
            </li>
            <li className="about-activity">
              <ImPointRight />&emsp; Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
