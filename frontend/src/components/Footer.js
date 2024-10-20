import React from 'react';
import mail from './mail_icon.svg'; 
import linkedin from './linkedin_icon.svg'; 
const Footer = () => {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer bg-dark text-white text-center py-3 flex flex-col md:flex-row justify-between items-center">
      <p className="copyright mb-3 md:mb-0">&copy; {year} Official Website - All Rights Reserved.<br /> Dr.Fethi Ben Belgacem</p>
  

      <ul className="list-unstyled flex flex-col items-center md:items-start mr-3">
        <li className="mb-2">To contact me:</li>
        <li className="contact-item flex items-center mb-2">
          <img src={mail} alt="Email Icon" className="icon w-5 h-5 mr-2" />
          <span>Email: fetbelgacem@gmail.com</span>
        </li>
        <li className="contact-item flex items-center">
          <a
            href="http://www.linkedin.com/in/fethi-ben-belgacem-691911149/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white"
          >
            <img src={linkedin} alt="LinkedIn Icon" className="icon w-5 h-5 mr-2" />
            <span>LinkedIn Profile</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
