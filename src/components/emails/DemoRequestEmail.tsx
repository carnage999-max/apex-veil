
import * as React from 'react';

interface EmailProps {
    name: string;
    organization: string;
    phone: string;
    email: string;
    useCase: string;
    location: string;
}

export const DemoRequestEmail: React.FC<Readonly<EmailProps>> = ({
    name,
    organization,
    phone,
    email,
    useCase,
    location,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <h1 style={{ color: '#000', borderBottom: '2px solid #00ff41', paddingBottom: '10px' }}>
            New Demo Request: {organization}
        </h1>
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Organization:</strong> {organization}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Location:</strong> {location}</p>
            <hr style={{ borderColor: '#ddd', margin: '20px 0' }} />
            <h3>Use Case:</h3>
            <p style={{ whiteSpace: 'pre-wrap', backgroundColor: '#fff', padding: '15px', border: '1px solid #ddd' }}>
                {useCase}
            </p>
        </div>
        <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
            <p>Encrypted transmission from Apex Veil Website.</p>
        </div>
    </div>
);
