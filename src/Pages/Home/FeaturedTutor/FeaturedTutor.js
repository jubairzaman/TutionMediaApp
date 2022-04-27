import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const FeaturedTutor = () => {
    return (
        <div className='pt-5 container w-75'>

            <h3>আমাদের অভিজ্ঞ শিক্ষকদের একাংশ </h3>
            <Row xs={1} md={3} className="g-4 pt-4">
                <Col>
                    <Card className='cardh2'>
                        <Card.Img className='img-fluid mx-auto tCardImg' variant="top" src="https://i.ibb.co/WWK1hWZ/missionpic.jpg" />
                        <Card.Body>
                            <Card.Title>মালিহা খোন্দকার</Card.Title>
                            <Card.Text className='smalltext2'>
                                বি.বি.এ (মার্কেটিং) <br></br>
                                <span>নর্থ সাউথ ইউনিভার্সিটি</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardh2'>
                        <Card.Img className='img-fluid mx-auto tCardImg' variant="top" src="https://i.ibb.co/wQL4WPx/272698106-1144077173000333-1807286784329940591-n.jpg" />
                        <Card.Body>
                            <Card.Title>জুবায়ের জামান</Card.Title>
                            <Card.Text className='smalltext2'>
                                কম্পিউটার সাইন্স <br></br>
                                <span>নর্থ সাউথ ইউনিভার্সিটি</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardh2'>
                        <Card.Img className='img-fluid mx-auto tCardImg' variant="top" src="https://i.ibb.co/gz4924Z/241275063-902447060373272-3643780882628576181-n.jpg" />
                        <Card.Body>
                            <Card.Title>কানিজ সোহেলী</Card.Title>
                            <Card.Text className='smalltext2'>
                                বি.বি.এ (মার্কেটিং) <br></br>
                                <span>নর্থ সাউথ ইউনিভার্সিটি</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default FeaturedTutor;