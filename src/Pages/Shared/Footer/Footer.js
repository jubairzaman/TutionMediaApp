import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="site-footer mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6 className='text-start'>ঠিকানা</h6>
                        <p class="text-justify text-start">আমাদের অফিসের ঠিকানা : সেক্টর ১২ ,উত্তরা
                            মোবাইল : ০১৭২৮৬৮৭১৮০</p>
                    </div>


                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><Link to="/about">আমাদের সম্পর্কে</Link></li>
                            <li><Link to="/about">আমাদের সাথে যোগাযোগ করুন</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text text-start">Copyright &copy; 2017 All Rights Reserved by
                            <a href="#">Jubair</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="linkedin" href="https://www.linkedin.com/in/jubair-zaman01/"><i class="fa fa-linkedin"></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fab fa-github-alt"></i></a></li>
                            <li><a class="facebook" href="https://www.facebook.com/profile.php?id=100021941829549"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>


                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;