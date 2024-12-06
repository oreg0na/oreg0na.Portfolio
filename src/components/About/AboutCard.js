import React from "react";
import Card from "react-bootstrap/Card";
import { FcFlashOn } from "react-icons/fc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Всем привет, я <span className="purple">Вячеслав Погосов </span>
            из города <span className="purple">Москва, Россия.</span>
            <br />
            В настоящий момент я учусь на Fullstack-разработчика в университете РТУ МИРЭА
            <br />
            Учусь на 2 курсе бакалавриата института перспективных технологий и индустриального программирования
            <br />
            <br />
            А так же переодически участвую в различных соревнованиях (хакатонах):
          </p>
          <ul>
            <li className="about-activity">
              <FcFlashOn /> Хакатон AstraLinux (РТУ МИРЭА, 2024)
            </li>
            <li className="about-activity">
              <FcFlashOn /> Технокубок (VK 2021, Финалист)
            </li>
            <li className="about-activity">
              <FcFlashOn /> MTC Champ (MTC 2024, Финалист)
            </li>
            <li className="about-activity">
              <FcFlashOn /> Yandex Cup (Международный чемпионат
              в направлении «Алгоритм» 2024, Полуфиналист)
            </li>
            <li className="about-activity">
              <FcFlashOn /> Хакатон 1C (РТУ МИРЭА, 2024, <span className="bronze">3 место</span>)
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете."{" "}
          </p>
          <footer className="blockquote-footer">Martin Golding</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
