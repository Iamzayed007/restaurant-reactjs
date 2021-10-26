import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Home/Services/Services';
import Menu from '../Menu/Menu';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        document.title = 'Dinner'
    }, [])

    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setDinners(data))

    }, []);
    return (
        <>
            <Banner />
            <Menu />
            <div className="text-center d-flex justify-content-center">
                <div className="card-item w-75">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            dinners.map(dinner => <SingleDinner key={dinner.id} dinner={dinner} />)
                        }
                    </Row>

                </div>
            </div>
            <Services />
        </>
    );
};

const SingleDinner = (props) => {
    const { img, name, price, description } = props.dinner;
    console.log(props.dinner)
    return (
        <div >
            <Col>
                <Card className="card-item w-100">
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