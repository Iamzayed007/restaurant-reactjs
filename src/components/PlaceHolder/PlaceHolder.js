import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import './PlaceHolder.css'

const PlaceHolder = () => {
    const { user } = useAuth()
    const { aId } = useParams()
    const [service, setService] = useState({})
    // useEffect(() => {
    //     const url = `http://localhost:5000/services/${aId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setService(data)
    //         })
    // }, [])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    // clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div>

            <h1>{service.title}</h1>

            <div className="">
                <Container>
                    <Row className="justify-content-center">
                        <h2 className="text-center mb-4 mt-5">Place Holder</h2>
                        <Col xs={5} sm={6} lg={4} className="text-center form-class">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={service.title} {...register('place', { required: true })} placeholder={service.title} readOnly /> {/* register an input */}
                                {errors.age && <p>Please enter number for age.</p>}

                                <br />
                                <input defaultValue={user.email} {...register('email', { required: true })} placeholder={user.email} readOnly />
                                {errors.lastName && <p>Last name is required.</p>}
                                <br />
                                <input defaultValue={service.title} {...register('place', { required: true })} placeholder={service.title} readOnly /> {/* register an input */}

                                <input defaultValue={service._id} {...register('age', { required: true })} />
                                <input defaultValue={service._id} {...register('age', { required: true })} />
                                {errors.age && <p>Please enter number for age.</p>}
                                <br />

                                <input className="btn btn-outline-warning" type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default PlaceHolder;