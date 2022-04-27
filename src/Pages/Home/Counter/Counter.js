import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Counter = () => {
    return (
        <div className='container  pt-5'>
            <Row xs={1} md={3} className="g-4 w-75 mx-auto">
                <Col>
                    <Card className='cardh'>
                        <Card.Img className='counterImg mx-auto p-3' variant="top" src="https://i.ibb.co/tX6pSRt/6704735-preview-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>১৫০০+ অভিজ্ঞ শিক্ষক</Card.Title>
                            <span className='smalltext'>দেশের স্বনামধন্য বিশ্ববিদ্যালয়ে অধ্যায়নরত</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardh'>
                        <Card.Img className='counterImg2 mx-auto p-3' variant="top" src="https://i.ibb.co/dpx738M/student-vector-384406-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>৭৫০০+ শিক্ষার্থী</Card.Title>
                            <span className='smalltext'>বাংলা ,ইংলিশ মিডিয়াম ও মাদ্রাসা</span>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardh'>
                        <Card.Img className='counterImg2 mx-auto p-3' variant="top" src="https://i.ibb.co/CMXZRFv/1000-F-233177310-u-Ynv-Asf-OF2-Dw-RJZlefs-KSLK3p-GN5b-Ns-L-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>৪৫০০+ সন্তুষ্ট অভিভাবক</Card.Title>
                            <span className='smalltext'>ঢাকার যে কোন প্রান্ত থেকে</span>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>
    );
};

export default Counter;