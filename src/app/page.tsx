"use client"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <Container className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
      <Row className='login-row'>
        <Col>
          <Card className='p-3' bg='Light'>
            <Card.Title className="text-center">User Login</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="loginForm.emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="loginForm.passwordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Button type="submit" className='w-100'>Login</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}