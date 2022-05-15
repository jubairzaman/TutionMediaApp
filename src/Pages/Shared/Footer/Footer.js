import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="py-4 bg-dark">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-12">
                        <h4>আমাদের সকল অফার সম্পর্কে বিস্তারিত জানতে </h4>
                        <p>
                            আমাদের সকল সোশ্যাল মিডিয়াতে জয়েন হতে পারেন
                        </p>
                        <div>
                            <FontAwesomeIcon className='mx-2' icon={faFacebook} size="xl" />
                            <FontAwesomeIcon className='mx-2' icon={faWhatsapp} size="xl" />
                            <FontAwesomeIcon className='mx-2' icon={faInstagram} size="xl" />
                        </div>
                        <div className='mt-3'>
                            <p className='text-center '>© 2022 <span className='text-danger'>Home Tution BD </span> All right reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;