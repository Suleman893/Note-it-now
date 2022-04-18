import {Container, Row, Button} from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome </h1>
              <p className="subtitle"> Note it now </p>
            </div>

            <div className="buttonContainer">
              <a href="/login/">
                <Button className="landingbutton">Login</Button>
              </a>

              <a href="/register/">
                <Button className="landingbutton">Register</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
