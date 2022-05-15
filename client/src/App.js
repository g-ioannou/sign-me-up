import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";

function App() {
  //for login & signup buttons
  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("1");

  const radios = [
    { name: "Login", value: "1", login: true, signup: false },
    { name: "SignUp", value: "2", login: false, signup: true },
  ];

  //styles
  const styles = {
    formContainer: {
      margin: "2em",
      padding: "2em",
    },
    leftBar: {
      height: window.innerHeight,
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      padding: "5em",
    },
    image: {
      marginTop: "2em",
      marginBottom: "10em",
      width: "100%",
    },
  };

  //for oppening the forms
  const [loginForm, setLoginForm] = React.useState(true);
  return (
    <>
      <Image
        src="images/map_background.png"
        className="img-fluid "
        style={{ minHeight: "100vh", zIndex: "-1", position: "absolute" }}
      />
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={3} style={styles.leftBar}>
            <Image src="images/SignMeIn_logo.png" style={styles.image} />
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <Button
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="custom"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  onClick={() => {
                    setLoginForm(radio.login);
                  }}
                >
                  {radio.name}
                </Button>
              ))}
            </ButtonGroup>
            {loginForm && <LoginForm />}
            {!loginForm && <SignupForm />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
