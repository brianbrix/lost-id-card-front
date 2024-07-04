import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const Finder = ({ location, setLocation,firstName,setFirstName, lastName,setLastName, email, setEmail,phoneNumber,setPhoneNumber, prevStep, nextStep }) => {

    return (
        <div>
            <h3 className="my-4 text-center">Finder Details</h3>

            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                    <Form.Label>First Name</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                <Form.Label>Last Name</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                <Form.Label>Email Address</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                <Form.Label>Phone Number</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                <Form.Label>Location</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    as="textarea"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                    </Col>
                </Row>
            </Form.Group>
            <Row>

            <div className="d-flex justify-content-between">
                <Col sm={3}>
                </Col>
                <Button variant="secondary" onClick={prevStep}>
                    Back
                </Button>
                <Button variant="primary" onClick={nextStep}>
                    Next
                </Button>
            </div>
            </Row>
        </div>
    );
};
export default Finder;