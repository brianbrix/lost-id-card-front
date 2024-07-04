// src/UploadForm.js
import React, { useState } from 'react';

const UploadForm = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState('');
    const [idFile, setIdFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            name,
            contact,
            location,
            idFile,
        });
        // Reset the form
        setName('');
        setContact('');
        setLocation('');
        setIdFile(null);
    };

    return (
        <div>
            <h1>Upload Lost Kenyan National ID</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contact:</label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location (Public Office):</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload ID Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setIdFile(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UploadForm;
