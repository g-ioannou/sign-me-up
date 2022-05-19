import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function signupForm() {
  return (
    <div className="signup-body">
      <Form>
        <Form.Group className="mb-3" controlId="signupFormFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupFormLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupFormEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupFormConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="custom" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default signupForm;
