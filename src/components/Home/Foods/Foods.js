import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import useFoods from '../../../Hooks/useFoods'
import useProvider from '../../../Hooks/useProvider';
import Food from '../Food/Food';
import './Foods.css'
const Foods = () => {
    // const { foods } = useProvider()
    // console.log(foods)
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, []);
    return (
        <div className="text-center">
            <div className="card-item">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        foods.map(food => <Food food={food} />)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Foods;