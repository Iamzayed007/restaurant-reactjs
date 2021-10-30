import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Food.css'
// "img": "https://i.ibb.co/Q6M6qBt/breakfast1.png"

const Food = (props) => {
    const { _id, img, name, price, description } = props.food;
    console.log(props.food)
    return (
        <div className="container" >
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
                        <Card.Text>
                            <Link to={`/placeHolder/${_id}`}> Details</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Food;