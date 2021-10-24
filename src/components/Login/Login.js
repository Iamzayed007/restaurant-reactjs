import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import background from '../../image/bannerbackground.png'
import './Login.css'
const Login = () => {
    const { singInWithGoogle, isRegister } = useAuth();


    const location = useLocation()
    const history = useHistory()

    const handleGoogleSingIn = () => {
        singInWithGoogle()
            .then(() => {

                history.push('/')
            })


    }

    return (
        <div className="">
            <div className=" h-full  d-flex justify-content-center bg-img">
                <img src={background} alt="" />
                <div className=" w-50 mt-5 form-card px-4 py-5 col-sm-12">

                    <h1 className="mb-4"> {isRegister ? 'Login' : 'Register'}</h1>
                    <form action="" className=" w-75" >
                        <input className="form-control mb-3" type="email" name="email" id="email" placeholder="Email" />
                        <input className="form-control mb-3" type="password" name="email" id="password" placeholder="Password" />
                        <button className="btn btn-danger mb-3">{isRegister ? 'Login' : 'Register'}</button>
                    </form>
                    {
                        isRegister ? <>

                            <button onClick={handleGoogleSingIn}
                                className="btn btn-warning mb-5"
                            >Google Signin</button>
                            <h5>Create New account ?  </h5>
                        </> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;