import React from "react";
import { FaGlobe } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h5><FaGlobe /> Adventure Atlas</h5>
          <p>
            Your one-stop solution for planning unforgettable travel
            experiences. From flights to hotels, we've got it all covered.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Adventure Atlas. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;