    import React, { useState } from "react";
    import axios from "axios";
    import { useNavigate } from 'react-router-dom';

    function ForgotPasswordPage() {
        const navigate = useNavigate();
    const [step, setStep] = useState(1); 
    const [email, setEmail] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [userId, setUserId] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleFetchQuestion = async () => {
        try {
        const res = await axios.get(`http://localhost:5001/api/auth/security-question?email=${email}`);
        setSecurityQuestion(res.data.securityQuestion);
        setStep(2);
        } catch (err) {
        setError('Error fetching security question');
        }
    };

    const handleVerifyAnswer = async () => {
        try {
        const res = await axios.post(`http://localhost:5001/api/auth/verify-security-answer`, {
            email,
            securityQuestion,
            securityAnswer,
        });
        setUserId(res.data.userId);
        setStep(3);
        } catch (err) {
        setError('Answer is not correct or question is not correct');
        }
    };

    const handleResetPassword = async () => {
        try {
        await axios.post(`http://localhost:5001/api/auth/reset-password`, {
            userId,
            newPassword,
        });
        alert('Password reset! Please login.');
        navigate('/login');
        } catch (err) {
        setError('Failed to reset password');
        }
    };

    return (
        <div
        style={{
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Roboto Slab, serif',
            backgroundColor: '#FBF8EF',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
        >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Forgot Password</h2>

        {error && (
            <p style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
            {error}
            </p>
        )}

        {step === 1 && (
            <>
            <p style={{ marginBottom: '10px' }}>Enter your email:</p>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontFamily: 'inherit'
                }}
            />
            <button
                onClick={handleFetchQuestion}
                style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#F96E2A',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1em',
                fontFamily: 'inherit'
                }}
            >
                Get Security Question
            </button>
            </>
        )}

        {step === 2 && (
            <>
            <p style={{ marginBottom: '10px' }}>Security Question: {securityQuestion}</p>
            <input
                type="text"
                placeholder="Answer security question"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
                style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '4px',
                border: '1px solid #ccc'
                }}
            />
            <button
                onClick={handleVerifyAnswer}
                style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#F96E2A',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1em',
                fontFamily: 'inherit'
                }}
            >
                Verify Answer
            </button>
            </>
        )}

        {step === 3 && (
            <>
            <p>enter your new password：</p>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{   width: '100%',
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '4px',
                border: '1px solid #ccc' }}
                placeholder="new password"
            />
            <button onClick={handleResetPassword} style={{              
                width: '100%',
                padding: '10px',
                backgroundColor: '#F96E2A',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1em',
                fontFamily: 'inherit'}}>
                reset password</button>
            </>
        )}
        </div>
    );
    }

    export default ForgotPasswordPage;