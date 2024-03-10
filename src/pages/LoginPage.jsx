import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/LoginPage.css'

const LoginPage = () => {

    let navigate = useNavigate();
    return (
        <div className='login'>
            <Container>
                <Row>
                    <h1 className='text-center'>Login</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button className='btn-login' variant="primary" type="submit" onClick={() => navigate('/admin/beranda')}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    <div className='text-register'>
                        <hr />
                        <p>Belum punya akun? <Link to={'/register'}>Register</Link> </p>
                        <hr />
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default LoginPage