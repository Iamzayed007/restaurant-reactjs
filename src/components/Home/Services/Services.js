import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Service.css'

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('./comments.json')
            .then(res => res.json())
            .then(data => setservices(data))

    }, []);
    return (
        <>
            <div className="mt-5 mb-5 service-head">
                <h1 >Why you Choose us</h1> <br />
                <p>Barton waited twenty always repair in  within we do. An delighted offending <br /> curiosity my is dashwoods at, Boy prosperous increasing surrounded</p>

            </div>
            <div className="text-center d-flex justify-content-center">
                <div className="services-item w-75  ">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.map(food => <SingleServices food={food} />)
                        }
                    </Row>

                </div>
            </div>
        </>
    );
};

const SingleServices = (props) => {
    const { img, title, description } = props.food;
    console.log(props.food)
    return (
        <div >
            <Col>
                <Card className="card-item">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Services;