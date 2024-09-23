import React from 'react';
import { useNavigate } from 'react-router-dom';
import './thankyou.css';
import { PiArrowLeftThin } from "react-icons/pi";
export default function ThankYou() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className='thankyou-main'>
      <h1>Thank you for joining us!</h1>
      <p>"Whoever said money can't buy happiness simply didn't know where to go shopping."</p>
      {/* <PiArrowLeftThin /> */}
      <button className='go-back-btn' onClick={handleGoBack}>Go Back</button>
      <a href="https://chat.whatsapp.com/invite/your-link" target="_blank" rel="noopener noreferrer">
        <button className='whatsapp-btn'>Join WhatsApp Group</button>
      </a>
    </div>
  );
}
