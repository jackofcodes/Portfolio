import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import github from "../assets/img/gh_image.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <h1 className="abc">Aamir</h1>
            <p>Contact: aamirlodhia35@gamil.com</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end py-5">
            <div className="social-icon">
            <a href='https://www.linkedin.com/in/aamir-lodhia-3401a3179/'><img src={navIcon1} alt=""/></a>
            <a href='https://www.facebook.com/aamir.lodhia'><img src={navIcon2} alt=""/></a>
            <a href='https://www.instagram.com/_itz_aamirrr/'><img src={navIcon3} alt=""/></a>
            <a href='https://github.com/jackofcodes'><img src={github} alt=""/></a>

            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}