import React from 'react';
import FooterLogo from '../img/footer-logo.png'
import FooterQr from '../img/footer-qr.png'

function Footer() {
    return (
      <div className='App'>
    <div className="footer">
    <div className="footer-list">
        <span className="footer-list-wrapper grey-text">           
          <span className="footer-item">Dashboard</span>
          <span className="footer-item">Reports</span>
          <span className="footer-item">Documents</span>
          <span className="footer-item">History</span>
          <span className="footer-item">Settings</span>
              </span> 
           <span className="email">hello@ramos.com</span>
            </div>
            <hr className="hr-2"/>
            <div className="address-list">
        <span className="footer-list-wrapper">           
          <span className="address-item">
            Warrensville Heights<br/><br/>
            <span className="grey-text">
              14418 vineyard drive, NC <br/>
              44128
            </span>
          </span>
          <span className="address-item">
            Saint Louise<br/><br/>
            <span className="grey-text">
              1366 pen street<br/>
              63101
            </span>
          </span>
          </span>
           <span className="socials">Linkedin <br/><br/>
           Instagram <br/><br/> Facebook
           </span>
            </div>
            <div className="footer-logo-wrapper">
            <img
            className="footer-logo"
            src={FooterLogo}
            alt="FooterLogo"
          />
          <span className="grey-text mt">Privacy policy</span>
          <span className="grey-text mt">License agreement</span>
          <img
            className="footer-logo"
            src={FooterQr}
            alt="FooterLogo"
          />
            </div>
    </div>
    </div>
  );
}

export default Footer;
