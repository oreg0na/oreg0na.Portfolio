import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2/avatar.svg";
import Tilt from "react-parallax-tilt";

import { FcHome, FcCommandLine, FcAbout, FcSupport } from "react-icons/fc";

import {
  AiFillGithub, AiFillMessage,
} from "react-icons/ai";

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
              <FcHome/> Я программист, студент 2-го курса университета РТУ МИРЭА (ИПТИП) г.Москва
              <br />
              <br /><FcCommandLine/> Языки и фреймворки, которые мне интересны
              <i>
                <b className="purple"> React Ts/Js, C# (.NET 8) and React Native. </b>
              </i>
              <br />
              <br />
              <FcAbout/> Сфера моих интересов - создание новых&nbsp;
              <i>
                <b className="purple">Web-технологий и продуктов </b> и участие в различных спортивных соревнованиях по {" "}
                <b className="purple">
                  программированию.
                </b>
              </i>
              <br />
              <br />
              <FcSupport/> Серверную часть продукта чаще всего я разрабатываю с помощью <b className="purple">.NET 8</b>, а клиентскую сторону я могу разработать на
              <i>
                <b className="purple">
                  {" "}
                  React TypeScript / React JavaScript
                </b>
              </i>
              &nbsp; или
              <i>
                <b className="purple"> Angular </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/oreg0na"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://t.me/svpg16"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillMessage/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
