import 'font-awesome/css/font-awesome.min.css';

import "./index.css"

const Contact = () => (

    <footer className="contact-bg">
        <div className="contact-container">
            <img src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png" 
                alt="logo" class="logo"/>
                <div className="icons-container">
                    <div class="icon-bg">
                        <i class="fa fa-google icon"></i>
                    </div>
                    <div class="icon-bg">
                        <i class="fa fa-twitter icon"></i>
                    </div>
                    <div class="icon-bg">
                        <i class="fa fa-instagram icon"></i>
                    </div>
                    <div class="icon-bg">
                        <i class="fa fa-linkedin icon"></i>
                    </div>
                </div>
 
                <div className="contact-sections">
                    <div className="contact-left">
                    <h1 className="head">Contact Us</h1>
                        <ul className="contact-info">
                            <li>
                            <i className="fa fa-envelope icon"></i>
                            <span className="contact-text">stonepedia@gmail.com</span>
                            </li>
                            <li>
                            <i className="fa fa-phone icon"></i>
                            <span className="contact-text">123456789</span>
                            </li>
                            <li>
                            <i className="fa fa-skype icon"></i>
                            <span className="contact-text">Jigeesha</span>
                            </li>
                        </ul>
                    </div>
                
                    <div className="contact-right">
                        <h1 className="head">Let Us Help You</h1>
                        <ul className="contact-info">
                            <li className="contact-text">100% Purchase Protection</li>
                            <li className="contact-text">Your Account</li>
                            <li className="contact-text">Return Center</li>
                            <li className="contact-text">Help Center</li>
                        </ul>
                    </div>
                </div> 

                <hr class="hr-line" />
                    <div class="text-center">
                        <i class="fa fa-copyright icon" aria-hidden="true"></i>
                        <span class="footer-section">2020-StonePedia Private Limited.All Rights Reserved.</span>
                    </div>            
        </div>
    </footer>
)

export default Contact

