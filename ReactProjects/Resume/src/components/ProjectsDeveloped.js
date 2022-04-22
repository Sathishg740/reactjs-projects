import React from 'react'
import { withRouter } from 'react-router-dom'
import './form.css'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

function ProjectsDeveloped(props) {
    return (
        <div>
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Projects Developed</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-3">
                            <h3>Project 1</h3>
                            <Form.Group className="mb-3" >
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Title * " />
                                    <i className="bi bi-align-top input-group-addon mt-2"></i>
                                </span>

                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" >
                            <span className="input-group ">
                            <Form.Control type="text" placeholder="Link* " />
                                    <i className="bi bi-link input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                            <span className="input-group ">
                            <Form.Control type="text" placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <hr />
                            <h3>Project 2</h3>
                            <Form.Group className="mb-3" >
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Title * " />
                                    <i className="bi bi-align-top input-group-addon mt-2"></i>
                                </span>

                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" >
                            <span className="input-group ">
                            <Form.Control type="text" placeholder="Link* " />
                                    <i className="bi bi-link input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                            <span className="input-group ">
                            <Form.Control type="text" placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <div className='mt-1 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                    Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => props.history.push('/ExperienceDetails')}>
                                    Next
                                </Button>
                            </div>
                        </Row>
                    </Form>
                    <Card.Footer className="text-center mt-4">Page 3</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(ProjectsDeveloped)
