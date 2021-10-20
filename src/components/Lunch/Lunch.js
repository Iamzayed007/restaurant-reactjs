import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';

const Lunch = () => {
    const [lunchs, setlunchs] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setlunchs(data))

    }, []);
    return (
        <>
            <Banner />
            <Menu />
            <div className="text-center">
                <div className="card-item">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            lunchs.map(lunch => <SingleLunch lunch={lunch} />)
                        }
                    </Row>

                </div>
            </div>
        </>
    );
};

const SingleLunch = (props) => {


    const { img, name, price, description } = props.lunch;
    console.log(props.lunch)
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

export default Lunch;