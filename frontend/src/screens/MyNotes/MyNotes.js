import {useEffect, useState} from "react";
import MainScreen from "../../components/MainScreen";
import {Link} from "react-router-dom";
import {Button, Card, Badge, Accordion} from "react-bootstrap";
import axios from "axios";
const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const fetchNote = async () => {
    try {
      const {data} = await axios.get("http://localhost:5000/api/notes");
      setNotes(data);
    } catch (err) {
      console.error("The error", err);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <>
      <MainScreen title="Welcome back suleman">
        <Link to="createnote">
          <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
            Create new note
          </Button>
        </Link>
        <Accordion>
          <Card style={{margin: 10}}>
            <Card.Header style={{display: "flex"}}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                title
              </span>
              <div>
                <Button>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler("noteid")}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Card.Body>
              <h4>
                <Badge variant="success">Category of note</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  libero suscipit.
                </p>
                <footer className="blockquote-footer">
                  Created at -- date
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Accordion>
      </MainScreen>
      ;
    </>
  );
};

export default MyNotes;
