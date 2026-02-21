import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMicrosoftsqlserver, SiVisualstudio } from "react-icons/si";
import { FaDesktop, FaGithub, FaMousePointer, FaTools } from "react-icons/fa";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import cursor from "../../Assets/TechIcons/CursorAI.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <SiVisualstudio size={26} />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={cursor} alt="CursorAI" className="tech-icon-images" />
        <div className="tech-icons-text">Cursor AI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <SiMicrosoftsqlserver size={26} />
        <div className="tech-icons-text">SQL Management</div>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons ">
        <FaTools size={26} />
        <div className="tech-icons-text">Trae</div>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons ">
        <FaGithub size={26} />
        <div className="tech-icons-text">GitHub Desktop</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
