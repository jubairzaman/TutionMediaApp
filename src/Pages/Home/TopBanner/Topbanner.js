import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Topbanner = () => {
    return (
        <div className='backgroundColor1 '>
            <div className='container'>
                <Container className='pt-3 '>
                    <Row>
                        <Col className='d-flex align-items-center' sm={6}>
                            <div>
                                <h1 className='text-start'>দেশের ১ নম্বর <br></br>
                                    <span className='text-success'>টিউশন মিডিয়া</span>
                                </h1>

                                <p className='text-secondary text-start'>এক ওয়েবসাইটেই সকল বিষয়ের শিক্ষক এর সন্ধান </p>


                                <Link className='TDN' to="/needTeacher">
                                    <Button className='d-flex flex-row bd-highlight mb-3' variant="success" size="md">
                                        শিক্ষকের জন্য আবেদন করুন <FontAwesomeIcon className='mx-2 my-1' icon={faArrowRight} />

                                    </Button>
                                </Link>
                                <Link className='TDN' to="/teacherReg">
                                    <Button className='d-flex flex-row bd-highlight mb-3' variant="success" size="md">
                                        শিক্ষক হিসেবে যুক্ত হোন <FontAwesomeIcon className='mx-2 my-1' icon={faArrowRight} />

                                    </Button>
                                </Link>



                            </div>

                        </Col>
                        <Col sm={6}>
                            <Image className='img-fluid p-5' src='https://i.ibb.co/6YHgTkk/Screenshot-2022-04-28-005936-removebg-preview.png'></Image>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    );
};

export default Topbanner;