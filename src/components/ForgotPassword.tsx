import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your logic to send a password reset email
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert('Password reset email sent!');
        // Optionally redirect or show a success message
      } else {
        alert('Failed to send password reset email.');
      }
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
