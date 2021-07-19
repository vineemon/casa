import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../components/layout.module.css";

// markup
const IntroPage = () => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Back to Home
            </Link>
          </li>
        </ul>
      </nav>
      <p className={siteTitle}>"What is Homely?"</p>
      <p>
        "Homely is the access to your revolutionary homebuying experience. Gone
        are the days of wondering whether buying was worth it or lacking the
        valuable guidance to help you buy a home! We provide you with all you
        need to know to make the homebuying decisions that work for you!"
      </p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/input_form" className={navLinkText}>
              Quick Start Here
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/calculator" className={navLinkText}>
              Mortgage Calculator
            </Link>
          </li>
        </ul>
      </nav>
      <StaticImage alt="happy man" src="../images/happy-home.jpg" />
    </div>
  );
};

export default IntroPage;
