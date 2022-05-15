import React from 'react'
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap"


function loginForm() {
  return (
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
  )
}

export default loginForm