import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAngular,
  SiAngularjs,
  SiC,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiElasticsearch,
  SiGitlab,
  SiKibana,
  SiLogstash,
  SiMicrosoftsqlserver,
  SiMqtt,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiRabbitmq,
  SiVuedotjs,
} from "react-icons/si";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";

import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";

import Mongo from "../../Assets/TechIcons/Mongo.svg";

import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC size={26} />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus size={26} />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={Java}
          alt="Java"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={Javascript}
          alt="JavaScript"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={Typescript}
          alt="TypeScript"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp size={26} />
        <div className="tech-icons-text">C#</div>
      </Col>

      {/* Frameworks / Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs size={26} />
        <div className="tech-icons-text">NestJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet size={26} />
        <div className="tech-icons-text">ASP.NET Core</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular size={26} />
        <div className="tech-icons-text">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs size={26} />
        <div className="tech-icons-text">AngularJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs size={26} />
        <div className="tech-icons-text">Vue.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" className="tech-icon-images" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs size={26} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver size={26} />
        <div className="tech-icons-text">SQL Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={26} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      {/* Tools / Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab size={26} />
        <div className="tech-icons-text">GitLab CI/CD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq size={26} />
        <div className="tech-icons-text">RabbitMQ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="Kafka" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMqtt size={26} />
        <div className="tech-icons-text">MQTT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch size={26} />
        <div className="tech-icons-text">Elasticsearch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana size={26} />
        <div className="tech-icons-text">Kibana</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLogstash size={26} />
        <div className="tech-icons-text">Logstash</div>
      </Col>
    </Row>
  );
}

export default Techstack;
