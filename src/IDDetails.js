import {Button, Col, Form, Image, Row} from "react-bootstrap";
import React from "react";

const IDDetails=({documentType,setDocumentType,documentNumber,setDocumentNumber, nameOnDocument,setNameOnDocument,locationOfIssue,setLocationOfIssue,setIdFrontFile,setIdFrontPreview,idFrontPreview,setIdBackFile,setIdBackPreview,
                 idBackPreview, nextStep})=>{
    const handleFileChange = (e, setFile, setPreview) => {
        const file = e.target.files[0];
        setFile(file);
        setPreview(URL.createObjectURL(file));
    };
    return (
        <div>
            <h3 className="my-4 text-center">Document Details</h3>
            <Form.Group className="mb-3">
                <Row>
                <Col sm={3}>
                <Form.Label>Document Type</Form.Label>
                </Col>
                <Col sm={9}>

                <Form.Control
                    as="select"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    required
                >
                    <option value="nationalId">National ID</option>
                    <option value="passport">Passport</option>
                    <option value="driverLicense">Driver's License</option>
                </Form.Control>
                </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                    <Form.Label>Document Number</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    type="text"
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    required
                />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col sm={3}>

                    <Form.Label>Full Names on Document</Form.Label>
                    </Col>
                    <Col sm={9}>

                    <Form.Control
                    type="text"
                    value={nameOnDocument}
                    onChange={(e) => setNameOnDocument(e.target.value)}
                    required
                />
                    </Col>
                </Row>

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Location of Document Issue</Form.Label>
                <Form.Control
                    type="text"
                    value={locationOfIssue}
                    onChange={(e) => setLocationOfIssue(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Upload Document Front Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => handleFileChange(e, setIdFrontFile, setIdFrontPreview)}
                    required
                />
                {idFrontPreview && (
                    <div className="mt-3">
                        <Image src={idFrontPreview} thumbnail />
                        <Button variant="danger" onClick={() => {
                            setIdFrontFile(null);
                            setIdFrontPreview(null);
                        }} className="mt-2">
                            Reupload
                        </Button>
                    </div>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Upload Document Back Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => handleFileChange(e, setIdBackFile, setIdBackPreview)}
                />
                {idBackPreview && (
                    <div className="mt-3">
                        <Image src={idBackPreview} thumbnail />
                        <Button variant="danger" onClick={() => {
                            setIdBackFile(null);
                            setIdBackPreview(null);
                        }} className="mt-2">
                            Reupload
                        </Button>
                    </div>
                )}
            </Form.Group>
            <div className="d-flex justify-content-between">
                <Button variant="secondary" disabled>
                    Back
                </Button>
                <Button variant="primary" onClick={nextStep}>
                    Next
                </Button>
            </div>
        </div>
    );
};
export default IDDetails;