import React from "react";
import {Button, Form} from "react-bootstrap";

const Finder = ({ location, setLocation,firstName,setFirstName, lastName,setLastName, email, setEmail,phoneNumber,setPhoneNumber, prevStep, nextStep }) => {

    return (
        <div>
            <h3 className="my-4 text-center">Finder Details</h3>

            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    as="textarea"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </Form.Group>
            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={prevStep}>
                    Back
                </Button>
                <Button variant="primary" onClick={nextStep}>
                    Next
                </Button>
            </div>
        </div>
    );
};
export default Finder;