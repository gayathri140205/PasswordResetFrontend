/* eslint-disable no-unused-vars */
// Footer.jsx
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
  return (
    <footer className="py-1 text-center header-container sticky-bottom mt-5 text-light">
      <p>&copy; 2024 Gayathri. All rights reserved.</p>
      <div className="d-flex justify-content-center gap-4">
        <a href="https://github.com/gayathri140205" className="text-light">
        <h3><i className="fab fa-github"></i></h3>
        </a>
      </div>
    </footer>
  );
};

export default Footer;