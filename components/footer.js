import React from "react";
import Link from "next/link";
import socialDiscord from "../assets/images/social-discord.png";
import socialTwitter from "../assets/images/social-twitter.png";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__links">
              <ul>
                <li>
                  <Link href="https://www.pillardao.org/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer__social">
              <ul className="footer__social__icons">
                <li>
                  <Link href="https://discord.gg/t39xKhzSPb" target="_blank" rel="noopener noreferrer">
                    <img src={socialDiscord} alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/pillar_dao" target="_blank" rel="noopener noreferrer">
                    <img src={socialTwitter} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
