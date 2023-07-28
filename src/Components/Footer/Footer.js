import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="foot_container">
        <div className="footer_details">
          <h2 className="foot_titles">Exclusive</h2>
          <div>Subscribe</div>
          <p>Get 10% off your first order</p>
        </div>
        <div className="footer_details">
          <h2 className="foot_titles">Support</h2>
          <div>
            111 Amman TeraBora,
            <br />
            DH 1515, Jordan.
          </div>
          <p>exclusive@gmail.com</p>
          <p>+00962778789875</p>
        </div>
        <div className="footer_details">
          <h2 className="foot_titles">Account</h2>
          <p>My Account</p>
          <p>Login</p>
          <p>Cart</p>
          <p>WishList</p>
          <p>Shop</p>
        </div>
        <div className="footer_details">
          <h2 className="foot_titles">Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Trems Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="icons_Container">
          <p>Contact Us Here</p>
          <div className="footer_Icons">
            <i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
            <i class="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i>
            <i class="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
            <i
              class="fa-brands fa-linkedin-in"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="copy_right">
        @Copyright Rimel 2023. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
