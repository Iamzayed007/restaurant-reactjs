import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';


const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('./comments.json')
            .then(res => res.json())
            .then(data => setservices(data))

    }, []);
    return (
        <>
            <h1>Why you Choose us</h1>
            <div className="text-center">
                <div className="card-item">
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