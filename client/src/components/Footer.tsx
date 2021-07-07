import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import iconfacebook from "../assets/shared/desktop/icon-facebook.svg";
import icontwitter from "../assets/shared/desktop/icon-twitter.svg";
import iconinstagram from "../assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <img src={logo} alt=""></img>
      </div>
      <nav className="footer-nav">
        <Link to="/">HOME</Link>
        <Link to="/headphones">HEADPHONES</Link>
        <Link to="/speakers">SPEAKERS</Link>
        <Link to="/earphones">EARPHONES</Link>
      </nav>
      <p className="footer-body">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer-copyright">Copyright 2021. All Rights Reserved</p>
      <div className="footer-socials">
        <a href="#">
          <img src={iconfacebook} alt="Audiophile Facebook"></img>{" "}
        </a>
        <a href="#">
          <img src={icontwitter} alt="Audiophile Twitter"></img>{" "}
        </a>
        <a href="#">
          <img src={iconinstagram} alt="Audiophile Instagram"></img>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
