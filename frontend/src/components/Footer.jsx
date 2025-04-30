import React from "react";
import Button from "react-bootstrap/esm/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="div1">
          <div className="logo">
            <img src="/images/img1.jpg" alt="Logo" />
          </div>
          <div className="detail">
            <p>
              Nature Thread® is a women oriented business. In our company 98% of
              the employees and workers are women.
            </p>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/images/insta.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="div2">
          <h5>Contact Us</h5>
          <p>Our phone number:</p>
          <p>+1 234 567 890</p>
          <h5>Our Address :</h5>
          <p>Lucknow GolDarwaza, Chowk.</p>
          <h5>Our Email :</h5>
          <p>contact@naturethread.in</p>
        </div>
        <div className="div3">
          <h5>Useful Links</h5>
          <p>Terms & Conditions</p>
          <p>Shipping- police</p>
          <p>Privacy police</p>
          <p>Cancellation & Refund Policy</p>
          <p>Track Your Order</p>
          <p>Latest News</p>
          <p>Our Sitemap</p>
          <p>Contact Us</p>
        </div>
        <div className="div4">
          <h5>GET LATEST MINIMALISM NEWS</h5>
          <p>Newsletter Subscribe</p>
          <hr />
          <p>
            Email <span>*</span>
          </p>{" "}
          <input type="email" placeholder="Enter your email" />
          <Button variant="success" type="submit">
            {" "}
            Submit
          </Button>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="div1">
          <h4>Certificates</h4>
        </div>
        <div className="div2">
          <h5>Naturethread®</h5> <p>&copy; 2022 All rights Reserved.</p>
        </div>
        <div className="div3">
          <h5>Payment Partners</h5>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;