import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>&emsp; Greetings, esteemed individuals. I am <span className="purple">Kenneth Schueman</span>,
            although I am commonly referred to as <span className="purple">Ken</span>. Hailing from the illustrious city of <span className="purple">Chicago, Illinois</span>, I bring forth my expertise in the realm of software engineering.</p>

            <p>&emsp; Currently, I am pursuing my studies in Software Engineering at the esteemed Iowa State University, where I am entering my fourth year. Additionally, I am on the cusp of completing my internship at <span className="purple">Motorola Solutions</span>, where I have served as a Software Engineer. My fervor for software development knows no bounds, as I am constantly seeking opportunities to expand my knowledge and skills. Furthermore, I am an active member of the <span className="purple">Iowa State Cyber Defense Club</span> and actively participate in community <span className="purple">Hackathons</span>.</p>

            <p>&emsp; Beyond the realm of coding, my interests are vast and varied. Allow me to elucidate upon a few:</p>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />&emsp; Engaging in small-scale electronic projects involving Raspberry Pi and Arduino, as well as honing my skills in soldering and 3D printing.
            </li>
            <li className="about-activity">
              <ImPointRight />&emsp; Indulging in the art of tinkering with automobiles and bicycles, constantly seeking to enhance their performance and functionality.
            </li>
            <li className="about-activity">
              <ImPointRight />&emsp; Embarking on journeys to explore new horizons and broaden my cultural and intellectual horizons.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
