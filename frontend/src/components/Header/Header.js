import React, {useEffect} from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Button,
} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../redux/actions/userActions";
const Header = ({setSearch}) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  const {userInfo} = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    navigate("/");
  }, [userInfo]);
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Note now</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: "100px"}}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Username" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
