import React, { useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './form.css'
import api from '../api/Users';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

function PersonalDetails(props) {
    let goToEdu = () => {
        props.history.push('/EducationDetails')
    }

    return (
        <div style={{ padding: "20px" }}>
            <Card className='container mt-3'  style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Personal Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row>
                            <Col md={6} xs={4}>
                                <Form.Group className="mb-3" style={{width:"97.5%"}}>
                                    <Form.Control type="text" placeholder="First name* " />
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                    <span className="input-group ">
                                        <Form.Control className='' type="text" placeholder="Email*" />
                                        <i className="bi bi-envelope-fill input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Your Website " />
                                        <i className="bi bi-globe input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="LinkedIn" />
                                        <i className="bi bi-linkedin input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Facebook" />
                                        <i className="bi bi-facebook input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Button className='me-4 btn-danger disabled' style={{ float: "right" }} onClick={() => props.history.goBack()}>
                                    Back
                                </Button>
                            </Col>

                            <Col md={6} xs={4}>
                                <Form.Group className="mb-3"  style={{width:"97.5%"}}>
                                    <Form.Control type="text" placeholder="Last name* " />
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Phone" />
                                        <i className="bi bi-telephone input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="GitHub " />
                                        <i className="bi bi-github input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Twitter" />
                                        <i className="bi bi-twitter input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Instagram" />
                                        <i className="bi bi-instagram input-group-addon mt-2"></i>
                                    </span>
                                    
                                </Form.Group>
                                <br />
                                <Button className='ms-4 btn-danger' onClick={() => goToEdu()}>
                                    Next
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Card.Footer className="text-center mt-4">Page 1</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(PersonalDetails)

