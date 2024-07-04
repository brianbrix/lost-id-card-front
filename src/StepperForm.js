import React, { useState } from 'react';
import { Form, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Finder from "./Finder";
import IDDetails from "./IDDetails";
import FoundLocation from "./FoundLocation";

const StepperForm = () => {
    const [step, setStep] = useState(1);
    const [documentNumber, setDocumentNumber] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [nameOnDocument, setNameOnDocument] = useState('');
    const [locationOfIssue, setLocationOfIssue] = useState('');
    const [foundLocation, setFoundLocation] = useState('');
    const [idFrontFile, setIdFrontFile] = useState(null);
    const [idBackFile, setIdBackFile] = useState(null);
    const [idFrontPreview, setIdFrontPreview] = useState(null);
    const [idBackPreview, setIdBackPreview] = useState(null);
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [phoneNumber, setPhoneNumber]= useState('');

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            idNumber: documentNumber,
            nameOnId: nameOnDocument,
            locationOfIssue,
            location: foundLocation,
            idFrontFile,
            idBackFile,
        });
        // Reset the form
        setDocumentNumber('');
        setNameOnDocument('');
        setLocationOfIssue('');
        setFoundLocation('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setIdFrontFile(null);
        setIdBackFile(null);
        setIdFrontPreview(null);
        setIdBackPreview(null);
        setStep(1);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <h1 className="my-4 text-center">Upload Lost Identification Document</h1>
                    <ProgressBar now={(step / 3) * 100} className="mb-4" />
                    <Form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <IDDetails
                                documentType={documentType}
                                setDocumentType={setDocumentType}
                                idNumber={documentNumber}
                                setIdNumber={setDocumentNumber}
                                nameOnDocument={nameOnDocument}
                                setNameOnId={setNameOnDocument}
                                locationOfIssue={locationOfIssue}
                                setLocationOfIssue={setLocationOfIssue}
                                setIdFrontFile={setIdFrontFile}
                                setIdFrontPreview={setIdFrontPreview}
                                idFrontPreview={idFrontPreview}
                                setIdBackFile={setIdBackFile}
                                setIdBackPreview={setIdBackPreview}
                                idBackPreview={idBackPreview}
                                nextStep={nextStep}
                                />
                        )}
                        {step === 2 && (
                            <Finder
                                location={foundLocation} setLocation={setFoundLocation}
                                firstName={firstName}
                                setFirstName={setFirstName}
                                lastName={lastName}
                                setLastName={setLastName}
                                email={email}
                                setEmail={setEmail}
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                                prevStep={prevStep}
                                nextStep={nextStep}
                            />
                        )}
                        {step === 3 && (
                        <FoundLocation
                            foundLocation={foundLocation}
                            setFoundLocation={setFoundLocation}
                            prevStep={prevStep}
                        />
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default StepperForm;
