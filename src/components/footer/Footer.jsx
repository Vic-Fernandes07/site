import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="p-0 m-0 ">
      <div className="footer-content">
        <p>&copy; 2024 AutoRent. Todos os direitos reservados.</p>
        <ul className="social-links">
          <li>
            Git
          </li>
          <li>
           E-mail
          </li>
          <li>
              Instagram
            
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
