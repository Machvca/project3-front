import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/pr3.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterColumn">
      
          <p>2022 DEVSTUFF©</p>
        </div>
        <div className="FooterColumn">
          <h4>DEVSTUFF</h4>
          <p>About Us</p>
          <p>Brand Book</p>
          <p>Press</p>
        </div>
        <div className="FooterColumn">
          <h4>Support</h4>
          <p>F.A.Q's</p>
          <p>Security Advice</p>
          <p>You may also like</p>
        </div>
        <div className="FooterColumn">
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
}