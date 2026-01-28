
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
    <div style={{
        fontFamily: "'Inter', 'Helvetica', sans-serif",
        backgroundColor: '#050505',
        color: '#e0e0e0',
        padding: '40px 20px',
        margin: '0',
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid #2a2a2a',
            backgroundColor: '#0a0a0a',
        }}>
            {/* Header */}
            <div style={{
                padding: '30px',
                borderBottom: '1px solid #2a2a2a',
                textAlign: 'center' as const,
            }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    margin: '0',
                }}>
                    APEX VEIL<span style={{ color: '#00ff41' }}>®</span>
                </h1>
                <p style={{
                    color: '#666',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    marginTop: '10px',
                    letterSpacing: '1px',
                }}>
                    Encypted Operational Request
                </p>
            </div>

            {/* Content */}
            <div style={{ padding: '40px 30px' }}>
                <h2 style={{
                    color: '#fff',
                    fontSize: '18px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00ff41',
                    paddingLeft: '15px'
                }}>
                    DEMO REQUEST DETAILS
                </h2>

                <div style={{ marginBottom: '30px' }}>
                    {[
                        { label: 'Name', value: name },
                        { label: 'Organization', value: organization },
                        { label: 'Email', value: email },
                        { label: 'Phone', value: phone },
                        { label: 'Location', value: location },
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: '12px 0',
                            borderBottom: '1px solid #1a1a1a',
                            fontSize: '14px'
                        }}>
                            <span style={{ color: '#00ff41', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', width: '120px', display: 'inline-block' }}>
                                {item.label}:
                            </span>
                            <span style={{ color: '#fff' }}>{item.value}</span>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h3 style={{ color: '#00ff41', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>
                        Operational Context/Use Case:
                    </h3>
                    <div style={{
                        backgroundColor: '#000',
                        border: '1px solid #2a2a2a',
                        padding: '20px',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: '#aaa',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {useCase}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                padding: '20px 30px',
                backgroundColor: '#000',
                borderTop: '1px solid #2a2a2a',
                textAlign: 'center' as const,
            }}>
                <p style={{ fontSize: '10px', color: '#555', margin: '0' }}>
                    &copy; {new Date().getFullYear()} APEX VEIL DRONE TECHNOLOGY. ALL RIGHTS RESERVED.
                </p>
                <p style={{ fontSize: '9px', color: '#333', marginTop: '5px' }}>
                    CLASSIFICATION: UNCLASSIFIED // FOR OFFICIAL USE ONLY (FOUO)
                </p>
            </div>
        </div>
    </div>
);
