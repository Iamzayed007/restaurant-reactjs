import React from 'react';
import { Card } from 'react-bootstrap';
import './UserCart.css'
import useAuth from '../../Hooks/useAuth'


const UserCart = () => {
    const { user } = useAuth()
    return (
        <div className="user-cart text-center">
            {user.email ?
                <div className="user-details">
                    <div className="img-section text-center">
                        <img src="https://i.pinimg.com/736x/b3/19/12/b31912daa078a5c04228599f275f2ae1.jpg" alt="" />
                    </div>
                    <Card.Body >
                        <Card.Title>{user.email}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>

                </div>
                :
                ''
            }
        </div>
    );
};

export default UserCart;