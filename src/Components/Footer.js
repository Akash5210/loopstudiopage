import React from 'react';
import '../Styles/footer.css';

function Footer(props) {
    return (
        <div className="footer px-5 pt-4 bg-dark text-light">
            <div className="row">
                <div className="col-12 col-md-3 footer-brand">
                    <h5 className="ms-4">loopstudios</h5>
                </div>
                <div className="col-0 col-md-3"></div>
                <div className="col-0 col-md-3"></div>
                <div className="col-12 col-md-3">
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" className="p-1" ><i className="fa fa-facebook-square" style={{"font-size":"24px"}}></i></a>
                        <a href="https://twitter.com/" className="p-1"><i className="fa fa-twitter" style={{"font-size":"24px"}}></i></a>
                        <a href="https://in.pinterest.com/" className="p-1"><i className="fa fa-pinterest" style={{"font-size":"24px"}}></i></a>
                        <a href="https://www.instagram.com/" className="p-1"><i className="fa fa-instagram" style={{"font-size":"24px"}}></i></a>
                    </div>
                </div>
            </div>
            
            
            <div className='footer-link ms-4'>
                <span className="me-3"><a href="#">About</a></span>
                <span className="me-3"><a href="#">Careers</a></span>
                <span className="me-3"><a href="#">Events</a></span>
                <span className="me-3"><a href="#">Products</a></span>
                <span className=""><a href="#">Support</a></span>
            </div>
            
            <span>© 2021 Loopstudios. All rights reserved.</span>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Akash Kumar</a>.
            </div>
        </div>
    );
}

export default Footer;