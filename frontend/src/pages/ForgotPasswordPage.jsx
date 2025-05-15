import React, { useState } from "react";
import axios from "axios";

function ForgotPasswordPage() {
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
      setError('eoror fetching security question');
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
      setError('answer is not correct or question is not correct');
    }
  };

 
  const handleResetPassword = async () => {
    try {
      await axios.post(`http://localhost:5001/api/auth/reset-password`, {
        userId,
        newPassword,
      });
      alert('password reset!! please login。');
  
    } catch (err) {
      setError('fail to reset password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2>forgot passowrd</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {step === 1 && (
        <>
          <p>enter your email：</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            placeholder="enter your email"
          />
          <button onClick={handleFetchQuestion} style={{ width: '100%', padding: '10px' }}>get question</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>security question ：{securityQuestion}</p>
          <input
            type="text"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            placeholder="answer security question"
          />
          <button onClick={handleVerifyAnswer} style={{ width: '100%', padding: '10px' }}>Verify answer</button>
        </>
      )}

      {step === 3 && (
        <>
          <p>enter your new password：</p>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            placeholder="new password"
          />
          <button onClick={handleResetPassword} style={{ width: '100%', padding: '10px' }}>reset password</button>
        </>
      )}
    </div>
  );
}

export default ForgotPasswordPage;