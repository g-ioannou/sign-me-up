import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './index.css';

function App() {
  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('1');

  const radios = [
    { name: 'Login', value: '1' },
    { name: 'SignUp', value: '2' },
  ];
  return (
    <div className="fullBackground" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'images/map_background.png'})`, height: '100vh'
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 left-homescreen">
            <div className="login-form"> 
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
                    >
                      {radio.name}
                    </Button>
                  ))}
                </ButtonGroup>
              <div className="login-body">
                  <Form>
                    <Form.Group className="mb-3" controlId="loginFormEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginFormPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="custom" type="submit">
                      Submit
                    </Button>
                  </Form>
              </div>
              <div className="signup-body">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
