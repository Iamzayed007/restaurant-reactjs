import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';

const Breakfast = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, []);
    return (
        <>
            <Banner />
            <Menu />
            <div className="text-center d-flex justify-content-center">
                <div className="card-item w-75">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            foods.map(food => <SingleBreakfast key={food.id} food={food} />)
                        }
                    </Row>

                </div>
            </div>
        </>
    );
};

const SingleBreakfast = (props) => {
    const { img, name, price, description } = props.food;
    console.log(props.food)
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

export default Breakfast;