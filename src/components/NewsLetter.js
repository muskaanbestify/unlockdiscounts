import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { IoCallOutline } from "react-icons/io5";
import './newsletter.css';

export default function Newsletter() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNumberChange = (e) => {
    let value = e.target.value;

    // Automatically insert a space after country code (after the first set of digits, e.g., +1, +91, etc.)
    if (value.startsWith('+') && value.length > 3 && !value.includes(' ')) {
      value = value.slice(0, 3) + ' ' + value.slice(3);
    }

    setMobileNumber(value);
  };

  const handleJoin = () => {
    // Check if the number is valid
    const isValidNumber = /^\+?\d{1,4}?\s?\d{10}$/.test(mobileNumber);
    if (mobileNumber === '' || !isValidNumber) {
      setErrorMessage('Please enter a valid mobile number with country code.');

      // Automatically remove the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); 
      return;
    }

    // Clear the error and navigate to the thank you page
    setErrorMessage('');
    navigate('/thankyou');
  };

  return (
    <div className='news-letter-main'>
      <div className='news-letter-hero'>
        <div className='news-letter'>
          <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          <div className='email-fields'>
            <label className='email-icon' htmlFor='number'><IoCallOutline /></label>
            <input
              placeholder='+91 9821001201'
              type='text'
              name='number'
              value={mobileNumber}
              onChange={handleNumberChange}
              required
              />
              {errorMessage && <p className="error">{errorMessage}</p>}
            <button className='subs-btn' onClick={handleJoin}>Join For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
}
