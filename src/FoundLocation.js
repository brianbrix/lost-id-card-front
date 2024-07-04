import {Button, Form} from "react-bootstrap";
import React from "react";

const FoundLocation=({foundLocation,setFoundLocation,prevStep})=>{
    return (<div>
        <h3 className="my-4 text-center">Found Location Details</h3>

        <Form.Group className="mb-3">
            <Form.Label>Location (Public Office)</Form.Label>
            <Form.Control
                as="textarea"
                value={foundLocation}
                onChange={(e) => setFoundLocation(e.target.value)}
                required
            />
        </Form.Group>
        <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={prevStep}>
                Back
            </Button>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
    </div>)
};
export default FoundLocation;