import React from "react";
import { Container, Image } from "react-bootstrap";
import splash1 from "../assets/splash1.svg";
import splash2 from "../assets/splash2.svg";
import splash3 from "../assets/splash3.svg";
import splash4 from "../assets/splash4.svg";
import line1 from "../assets/Line1.svg";
import line2 from "../assets/Line2.svg";
import line3 from "../assets/Line3.svg";
const Roadmap = () => {
  return (
    <Container className="d-flex wid">
      <h2 className="hit white">
        <span className="purple">How </span>it works ?
      </h2>
      <Container>
        <Container className="white text">
          <h2>01</h2>
          <h4>Choose category</h4>
          <p>
            Select the category of your E-gift and depending on it you will be
            offered a multiplication coefficient.
          </p>
        </Container>
        <Image className="zeroel" src={line1}></Image>
        <Image className="sp1" src={splash1}></Image>
        <Container className="white text1">
          <h2>02</h2>
          <h4>Fill the form</h4>
          <p>
            In order to receive a bonus, you need to enter valid data of your
            Gift Card.
          </p>
        </Container>
        <Image className="zeroel1" src={line2}></Image>
        <Image className="sp2" src={splash2}></Image>
        <Container className="white text2">
          <h2>03</h2>
          <h4>Spin the wheel</h4>
          <p>
            Spin the wheel, in which you will get the multiplication coefficient
            of your E-Gift card.
          </p>
        </Container>
        <Image className="zeroel2" src={line3}></Image>
        <Image className="sp3" src={splash3}></Image>
        <Container className="white text3">
          <h2>04</h2>
          <h4>Get a bonus</h4>
          <p>
            After you complete the 3 previous steps, you will receive your bonus
            to the specified E-Mail within a few minutes.
          </p>
        </Container>
        <Image className="sp4" src={splash4}></Image>
      </Container>
    </Container>
  );
};

export default Roadmap;
