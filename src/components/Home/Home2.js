import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  DotNet, C#, JavaScript, Node.js, and maybe Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include designing
              <i>
                <b className="purple">
                  {" "}
                  scalable backend systems, building high-performance web
                  applications, and developing microservices-based
                  architectures.{" "}
                </b>
              </i>
              I am particularly interested in distributed systems, real-time
              data processing, and integrating multi-platform services into
              unified solutions.
              <br />
              <br />
              Whenever possible, I enjoy working with
              <b className="purple"> .NET Core and Node.js </b> for backend
              development, along with modern frontend frameworks such as{" "}
              <i>
                <b className="purple">Angular</b> and{" "}
                <b className="purple">React</b>.
              </i>{" "}
              I am also passionate about
              <i>
                <b className="purple"> system architecture,</b>
                <b className="purple">
                  {" "}
                  event-driven design (Kafka, RabbitMQ),
                </b>{" "}
              </i>
              and applying
              <i>
                <b className="purple"> AI tools </b>
              </i>
              to enhance development workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
