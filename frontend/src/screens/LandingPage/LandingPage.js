import React, {useEffect} from "react";
import {Container, Row, Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./LandingPage.css";

const LandingPage = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history,userInfo]);

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
              <Link to="/login">
                <Button className="landingbutton">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="landingbutton">Register</Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
