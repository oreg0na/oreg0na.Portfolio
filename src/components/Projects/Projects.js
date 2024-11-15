import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sqleditor from "../../Assets/Projects/sqleditor.png";
import ocompilers from "../../Assets/Projects/ocompilers.jpg";
import iqj from "../../Assets/Projects/iqj.jpg";
import damid from "../../Assets/Projects/damid.png";
import platform from "../../Assets/Projects/platform.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Вот несколько проектов, над которыми я работал в последнее время.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iqj}
              isBlog={false}
              title="IQJ"
              description="Реализация полной админ панели для приложения IQJ, созданное в рамках элитной группы института ИПТИП (РТУ МИРЭА). Стэк: React.Ts (TypeScript)"
              ghLink="https://github.com/oreg0na/web_iqj"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={damid}
              isBlog={false}
              title="DA MID"
              description="Мобильное приложение, реализованное на React Native для университета Дипломатическая академия МИД РФ. Приложение создано для удобного просмотра расписания студентами"
              ghLink="https://github.com/8xbyte/da-mid-admin"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqleditor}
              isBlog={false}
              title="SQLEditor"
              description="Приложение созданное в рамках Курсовой работы на языке C++. Данное приложение создано для OC Windows 10/11, задача которого подключаться к базам данных и выводить таблицы"
              ghLink="https://github.com/8xbyte/sqleditor"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocompilers}
              isBlog={false}
              title="Ocompilers"
              description="Web-приложения для компиляции, отладки, тестировании кода на Python, C++. Приложение создано в рамках Хакатона Astra Linux (РТУ МИРЭА, ИПТИП)"
              ghLink="https://github.com/8xbyte/ocompilers"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={platform}
              isBlog={false}
              title="Проектная платформа РТУ МИРЭА"
              description="Реализация Web-приложения с витриной проектов/стартапов с возможность со стороны студента - присылать подробную информацию о проекте, а со стороны модерации - постинг данных проектов на главную страницу"
              ghLink=""
              demoLink="https://platform.8xbyte.dev/projects"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
