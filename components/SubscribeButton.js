import React, { useState } from 'react';
import styles from './SubscribeButton.module.css';
import axios from 'axios';

const SubscribeButton = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/subscribe', { email });

      if (response.status === 201) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return <p className={styles.successMessage}>Thank you for subscribing!</p>;
  }

  return (
    <div className={styles.formWrapper}> {/* This will center the form */}
      <form className={styles.subscribeForm} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className={styles.emailInput}
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  );
};

export default SubscribeButton;