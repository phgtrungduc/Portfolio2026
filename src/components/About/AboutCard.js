import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Phuong Trung Duc</span>{" "}
            from <span className="purple">Hanoi, Vietnam</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Backend Developer</span> at{" "}
            <span className="purple">KiotViet</span>.
            <br />I graduated with Honors in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Hanoi University of Science and Technology</span>.
            <br />
            <br />
            I'm passionate about building scalable backend systems and designing clean, maintainable architectures. I enjoy working with microservices, event-driven systems, and real-time data processing.
            <br />
            <br />
            Outside of coding, I enjoy staying active and balanced:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing football and badminton ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies 🎬
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning. Keep building. Keep improving." {" "}
          </p>
          <footer className="blockquote-footer">Phuong Trung Duc</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
