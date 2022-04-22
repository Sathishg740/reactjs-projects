import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function ExperienceDetails(props) {
    return (
        <div>
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Experience Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-4">
                            <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                <i class="bi bi-check-circle-fill"></i>Experience 1</h5>
                            </div>

                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" placeholder="Institute/Organisation*" />
                                    <i className="bi bi-building input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Position*" />
                                    <i class="bi bi-briefcase-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="number" placeholder="Duration in months*" />
                                    <i class="bi bi-clock-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br /><hr />

                            <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                <i class="bi bi-check-circle-fill"></i>Experience 2</h5>
                            </div>
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" placeholder="Institute/Organisation*" />
                                    <i className="bi bi-building input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Position*" />
                                    <i class="bi bi-briefcase-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="number" placeholder="Duration in months*" />
                                    <i class="bi bi-clock-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <div className='mt-3 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                    Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => props.history.push('/ExtraDetails')}>
                                    Next
                                </Button>
                            </div>
                        </Row>

                    </Form>
                    <Card.Footer className="text-center mt-4">Page 4</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(ExperienceDetails)
