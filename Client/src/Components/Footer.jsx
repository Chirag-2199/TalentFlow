import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.section`
    #foot {
      position: relative;
      background-color: #000000;
      color: var(--shady-white-color);
      opacity: 0.9;
      height: 400px;
      margin-top: 50px;
    }
    .center-div {
      position: relative;
      width: 269px;
      height: 235px;
      top: 114px;
      left: 500px;
    }
    .center-div h3 {
      font-family: var(--primary-font);
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
    .center-div ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .center-div li {
      margin-bottom: 12px;
      font-family: var(--primary-font);
      font-size: 1.1rem;
    }
    .center-div a {
      color: var(--shady-white-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .center-div a:hover {
      color: #1cd6ce;
    }
    #f-title {
      position: absolute;
      background: transparent;
      font-size: 2.5rem;
      font-family: var(--primary-font);
      color: #1cd6ce;
      top: 100px;
      left: 119px;
    }
    .s-loc {
      position: absolute;
      top: 202px;
      left: 133px;
    }
    .s-phone {
      position: absolute;
      top: 265px;
      left: 134px;
    }
    .s-mail {
      position: absolute;
      top: 323px;
      left: 132px;
    }
    .loc {
      font-family: var(--primary-font);
      position: absolute;
      top: 209px;
      left: 194px;
    }
    .phone {
      font-family: var(--primary-font);
      position: absolute;
      top: 265px;
      left: 194px;
    }
    .mail {
      font-family: var(--primary-font);
      position: absolute;
      top: 324px;
      left: 194px;
    }
    .social-div {
      position: absolute;
      top: 114px;
      left: 800px;
      width: 200px;
    }
    .social-div h3 {
      font-family: var(--primary-font);
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
    .social-icons {
      display: flex;
      gap: 20px;
    }
    .social-icons a {
      color: var(--shady-white-color);
      transition: color 0.3s ease;
    }
    .social-icons a:hover {
      color: #1cd6ce;
    }
    .social-icons svg {
      width: 28px;
      height: 28px;
    }
    #copyright {
      font-family: var(--primary-font);
      opacity: 0.9;
      text-align: center;
      background-color: black;
      color: var(--shady-white-color);
      padding: 15px 0;
    }
  `;

  return (
    <>
      <Wrapper>
        <footer id="foot">
          <h1 id="f-title">TalentFlow</h1>

          {/* Contact Information */}
          <p className="loc">Republic of India</p>
          <p className="phone">+91 9999923232</p>
          <p className="mail">contact@talentflow.com</p>

          {/* Contact Icons */}
          <svg
            className="s-loc"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="2.2em"
            width="1.6em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fullrule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="s-phone"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.35em"
            width="1.8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <svg
            className="s-mail"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.65em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>

          {/* Quick Links */}
          <div className="center-div">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Candidates</a></li>
              <li><a href="#">Employers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="social-div">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H216V176h592v672z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>

        <main>
          <div id="copyright">
            Copyright &copy; {new Date().getFullYear()} www.TalentFlow.com. All rights reserved!
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default Footer;