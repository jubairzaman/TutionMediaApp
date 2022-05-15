import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Topnav from '../Shared/Topnav/Topnav';

const About = () => {
    return (
        <div className='backgroundColor1 '>
            <Topnav></Topnav>
            <h3 className='mt-5'> আমাদের সম্পর্কে</h3>
            <Container className='mt-5'>
                <Row>
                    <Col>হোম টিউশন বিডি ঢাকার অন্যতম বৃহত্তম টিউশন মিডিয়া। যার লক্ষ্য হল আমাদের ঢাকা শহরের অভিজ্ঞ শিক্ষক খুঁজে বের করা এবং অভিভাবক দের সাথে তাদের যোগাযোগ স্থাপন করিয়ে দেয়া। আমাদের রয়েছে বিভিন্ন বিশ্ববিদ্যালয় এবং বিভিন্ন বিষয় থেকে প্রচুর সংখ্যক টিউটর যাদের আমরা ইন্টারভিউ এর মাধ্যমে খুঁজে নিয়েছি ।
                        <br></br>
                        <br></br>
                        <br></br>


                        <h4>আমাদের অফিসের ঠিকানা : সেক্টর ১২ ,উত্তরা</h4>
                        <h4>মোবাইল : ০১৭২৮৬৮৭১৮০</h4>
                    </Col>
                    <Col>
                        <Image className="img-fluid" src="https://i.ibb.co/Lp7y2fg/2895133-removebg-preview.png"></Image>
                    </Col>
                </Row>
            </Container>



            <Footer></Footer>

        </div>
    );
};

export default About;