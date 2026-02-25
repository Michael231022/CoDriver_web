import React from 'react';

function Footer() {
  // 获取当前年份的简便写法
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-codriver-footer">
        <div className="footer-content">
            <div className="footer-top-content">
                {/* Logo 区域 */}
                <div className="footer-logo-container">
                    <a href="/">
                        <div className="footer-codriver-logo">
                            {/* 记得路径前加斜杠 / */}
                            <img draggable="false" src="/image/logo/codriver-logo-dark.png" alt="Logo" />
                        </div>
                    </a>
                    <p>Ride Together, Arrive Safely</p>
                    <select name="language_selection" id="codriver-multi-language" defaultValue="english">
                        <option value="english">English (United Kingdom)</option>
                        <option value="chinese">Chinese (China)</option>                        
                    </select>
                </div>

                {/* 链接列表 1 */}
                <div className="footer-top-div">
                    <p>Services</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Ride Booking</a></li>
                        <li><a href="#">Airport Transfer</a></li>
                        <li><a href="#">Goods Delivery</a></li>
                        <li><a href="#">Pets Taxi</a></li>
                        <li><a href="#">More Services</a></li>
                    </ul>
                </div>

                {/* 链接列表 2 (Drivers) */}
                <div className="footer-top-div">
                    <p>Drivers</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Be A Driver</a></li>
                        <li><a href="#">Conditions</a></li>
                        <li><a href="#">Awards</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Online retail</a></li>
                    </ul>
                </div>

                {/* 链接列表 3 (Newsroom) */}
                <div className="footer-top-div">
                    <p>Newsroom</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                
                 {/* 链接列表 4 (About Us) - 我省略了一部分，你可以照着搬 */}
                 <div className="footer-top-div">
                    <p>About Us</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
                
                 {/* 链接列表 5 (More) */}
                 <div className="footer-top-div">
                    <p>More</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Safety</a></li>
                        <li><a href="#">How CoDriver Works</a></li>
                    </ul>
                </div>

            </div> {/* footer top content */}

            <div className="footer-bottom-content">
                <div className="footer-social-content">
                    <div className="footer-line-div">
                        <div className="footer-line"></div>
                    </div>

                    <div className="content-below-line">
                        <div className="footer-bottom-div">
                            <ul className="terms-div">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Code of Conduct</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-div">
                            <ul className="social-div">
                                {/* 记得给 img 加上 alt 属性，路径加 / */}
                                <li><a id="social-x" className="social-icon" href="#" title="X"><img src="/image/social_app_icon/x.svg" alt="X"/></a></li>
                                <li><a id="social-facebook" className="social-icon" href="#" title="Facebook"><img src="/image/social_app_icon/facebook.svg" alt="Facebook"/></a></li>
                                <li><a id="social-instagram" className="social-icon" href="#" title="Instagram"><img src="/image/social_app_icon/instagram.svg" alt="Instagram"/></a></li>
                                <li><a id="social-whatsapp" className="social-icon" href="#" title="Whatsapp"><img src="/image/social_app_icon/whatsapp.svg" alt="Whatsapp"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        
                <div className="footer-last-bottom">
                    <div className="footer-last-div">
                        {/* 重点看这里：原本的 <script> 变成了 {currentYear} */}
                        <p>© {currentYear} <a id="MIC_TECHNOLOGIES" href="https://michael231022.github.io/MIC-TECH/Website/mic_tech.html" target="_blank" rel="noreferrer">MIC TECHNOLOGIES</a></p>
                    </div>
                </div>
            </div> {/* footer bottom content */}
        </div> {/* FOOTER CONTENT */}
    </footer>
  );
}

export default Footer;