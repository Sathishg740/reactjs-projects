import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function ExtraDetails(props) {
    return (
        <div>
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Extra Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-3">
                        <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                <i class="bi bi-check-circle-fill"></i>Skills/Languages</h5>
                            </div>

                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" placeholder="Skill 1" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Skill 2" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Skill 3" />
                                </span>
                            </Form.Group>
                            <br />
                        </Row>
                        <Row className='mb-3'>
                        <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" placeholder="Skill 4" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Skill 5" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Skill 6" />
                                </span>
                            </Form.Group>
                            <br />
                        </Row>
                        <hr/>
                        <Row className="mb-3">
                        <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                <i class="bi bi-check-circle-fill"></i>Interests</h5>
                            </div>

                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" placeholder="Interest 1" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Interest 2" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Interest 3" />
                                </span>
                            </Form.Group>
                            <br />
                        </Row>
                        <Row className='mb-3'>
                        <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" placeholder="Interest 4" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Interest 5" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" placeholder="Interest 6" />
                                </span>
                            </Form.Group>
                            <br />
                            <div className='mt-3 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                    Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger disabled'  onClick={() => props.history.push('/ExtraDetails')}>
                                    Next
                                </Button>
                            </div>
                        </Row>
                    </Form>
                    <Card.Footer className="text-center mt-4">Page 5</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(ExtraDetails)
