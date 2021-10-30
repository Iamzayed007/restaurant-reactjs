import React from 'react';
import { useParams } from 'react-router';

const FoodDetails = () => {
    const { id } = useParams()
    return (
        <div>
            food deatails
            <h1>{id}</h1>
        </div>
    );
};

export default FoodDetails;