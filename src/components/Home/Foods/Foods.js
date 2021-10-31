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
        // fetch('./db.json')
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data[0].breakfast)
                setFoods(data)
            })

    }, []);
    return (
        <div className="text-center  d-flex justify-content-center">
            <div className="cards-item w-75 ">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        foods.map(food => <Food
                            key={food.id}
                            food={food} />)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Foods;