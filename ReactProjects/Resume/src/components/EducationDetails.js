import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import './form.css'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

function EducationDetails(props) {
    return (
        <div>
             <Card className='container mt-3'  style={{ padding: " 10px 80px" }}>
        <Card.Body>
            <Card.Title>Education Details</Card.Title>
            <hr></hr>
            <Form>
                <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <span className="input-group ">
                                <Form.Control className='' type="text" placeholder="College/University*" />
                                <i className="bi bi-bank2 input-group-addon mt-2"></i>
                            </span>
                        </Form.Group>
                        <br />
                        <Form.Group as={Col} className="mb-3">
                        <span className="input-group ">
                        <Form.Control type="date"  placeholder="Year of Joining" />
                            </span>
                        </Form.Group>
                        <br />
                        <Form.Group as={Col} className="mb-3">
                        <span className="input-group ">
                        <Form.Control type="date"   placeholder="Year of Completion" />
                            </span>
                        </Form.Group>
                        <br />
                    </Row>
                    <Row className="mb-3">
                            <Form.Group as={Col} className='col-md-4' style={{width:"32.3%"}} >
                                <Form.Control type="text" placeholder="Qualification *" />
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8 ms-2'>
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                        </Row><br />
                        <hr/>
                    <Row className='mb-3 mt-4'>
                    <Form.Group as={Col} className="mb-3">
                            <span className="input-group ">
                                <Form.Control className='' type="text" placeholder="School*" />
                                <i className="bi bi-bank2 input-group-addon mt-2"></i>
                            </span>
                        </Form.Group>
                        <br />
                        <Form.Group as={Col} className="mb-3">
                        <span className="input-group ">
                        <Form.Control type="date"  placeholder="Year of Joining" />
                            </span>
                        </Form.Group>
                        <br />
                        <Form.Group as={Col} className="mb-3">
                        <span className="input-group ">
                        <Form.Control type="date"  placeholder="Year of Completion" />
                            </span>
                        </Form.Group>
                        <br />
                    </Row>

                    <Row className="mb-3">
                            <Form.Group as={Col} className='col-md-4' style={{width:"32.3%"}}>
                                <Form.Control type="text" placeholder="Qualification *" />
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8 ms-2' >
                                <Form.Control type="text" placeholder="Description *" />
                            </Form.Group>
                            <div className='mt-3 buttons' >
                            <Button md={12} className='me-3 mt-1 btn-danger '  onClick={() => props.history.goBack()}>
                            Back
                        </Button>
                        <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => props.history.push('/ProjectsDeveloped')}>
                            Next
                        </Button>
                            </div>
                        </Row>
                    
                    </Form>
                    <Card.Footer className="text-center mt-4">Page 2</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(EducationDetails)
