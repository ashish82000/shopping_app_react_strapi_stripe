import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis rem cupiditate ullam voluptatum impedit voluptates illo
            animi nisi? Voluptate numquam laborum deleniti omnis veritatis
            voluptates excepturi aspernatur. Itaque, enim magni?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            exercitationem vel quam dolorum nobis. Soluta laboriosam facere
            quaerat aut omnis quisquam ipsa eligendi odio illo!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">GameKart</span>
          <span className="copyright">
          © Copytight 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment options" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
