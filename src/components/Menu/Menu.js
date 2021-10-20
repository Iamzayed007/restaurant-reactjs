import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <Link to="/breakfast" className="toggle-link" >Breakfast</Link>
                <Link to="/lunch" className="toggle-link" >Lunch</Link>
                <Link to="/dinner" className="toggle-link" >Dinner</Link>
            </div>
        </div>
    );
};

export default Menu;