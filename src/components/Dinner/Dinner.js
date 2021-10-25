import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setDinners(data))

    }, []);
    return (
        <>
            <Banner />
            <Menu />
            <div className="text-center">
                <div className="card-item">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            dinners.map(dinner => <SingleDinner key={dinner.id} dinner={dinner} />)
                        }
                    </Row>

                </div>
            </div>
        </>
    );
};

const SingleDinner = (props) => {
    const { img, name, price, description } = props.dinner;
    console.log(props.dinner)
    return (
        <div >
            <Col>
                <Card className="card-item">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Dinner;