import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsApp.css';

const WhatsApp = ({ iconSize }) => (
  <a 
    href="https://wa.me/https://walink.co/f717a6"  
    target="_blank" 
    rel="noopener noreferrer"
    className="whatsapp-button fixed bottom-10 right-4 w-10 h-10 md:w-20 md:h-20 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 text-green-600 hover:text-green-800 transform hover:scale-110"
  >
    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl md:text-6xl" />
  </a>
);

export default WhatsApp;