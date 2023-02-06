import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../Assets/certificate.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage-body">
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="text-white ms-5 me-5" href="#home">
            EDISONVALLEY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
              <Nav.Link className="text-white ms-5" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white ms-5" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="text-white ms-5" href="#link">
                Features
              </Nav.Link>
              <Nav.Link className="text-white ms-5" href="#link">
                Team
              </Nav.Link>
            </Nav>
            <Nav>
              <Link to={'/login'}>
                <Button
                  className="justify-content-end "
                  variant="outline-success"
                >
                  Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="containerfirst">
        <Row className="row ">
          <Col className="colomn">
            <div className="col-content">
              <h1 className="head">
                Make Your Career <br /> with EdisonValley
              </h1>
              <h3 className="sub-head">
                We are a bunch of tech enthusiast determined to <br /> uplift
                the society utilising the latest technologies around us.
              </h3>
              <Link to={'/login'}>
              <button className="loginbtn">Login</button>
              </Link>
            </div>
          </Col>

          <Col className="colomn">
            <div className="image">
              <img src={image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footerbody">
        <Row>
          <Col className="footer">
            <Card
              style={{
                width: "25rem",
                background: "transparent",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title>EDISONVALLEY</Card.Title>
                <Card.Text>
                  2020 © Edisonvalley. Design & Develop by Osperb We are a bunch
                  of tech enthusiasts determined to uplift the society utilising
                  the latest technologies around us
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <CardGroup>
              <Card style={{ border: "none", width: "320px" }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>Resources</Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    <span>privacy policy</span> <br />
                    <label>Terms & conditions</label>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>Company</Card.Title>
                  <Card.Text
                    style={{
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label> About us </label>
                    <label> Features </label>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Social Links
                  </Card.Title>
                  <Card.Text>
                    <BsFacebook style={{ color: "blue", fontSize: "20px" }} />
                    <FcGoogle style={{ fontSize: "25px", marginLeft: "5px" }} />
                    <AiFillTwitterCircle
                      style={{
                        color: "#34c3eb",
                        fontSize: "25px",
                        marginLeft: "5px",
                      }}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
