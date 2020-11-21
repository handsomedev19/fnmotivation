import React from 'react'
import LogoImg from '../../images/logo.png'
import TwitterImg from '../../images/twitter-icon.svg'
import LinkdinImg from '../../images/linkdin-icon.svg'
import FacebookImg from '../../images/facebook-icon.svg'

const Footer = () => {

    let url = window.location.href;

  return (
    <div>
        <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-logo">
                                <a href="#"><img src={LogoImg} alt="" className="img-fluid" /></a>
                                <h3>FN Motivation</h3>
                                <div className="copyright">
                                    <p>All Rights Reserved 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-link">
                                <ul>
                                    <li><a href="/"> About FNM</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-social">
                                <ul>
                                    <li><a href="https://twitter.com/"><img src={TwitterImg} alt="" /></a></li>
                                    <li><a href="https://www.linkedin.com/"><img src={LinkdinImg} alt="" /></a></li>
                                    <li><a href="https://www.facebook.com/ "><img src={FacebookImg} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div className="copyright mobile-version">
                        <p>All Rights Reserved 2020</p>
                    </div>
                </div>
            </footer>
    </div>
  );
}

export default Footer;
