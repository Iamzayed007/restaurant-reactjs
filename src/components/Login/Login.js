import React, { useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import background from '../../image/bannerbackground.png'
import './Login.css'
const Login = () => {
    const { singInWithGoogle, isRegister, emailRef, passwordRef, setIsRegister, registerNewUser,
        setEmail,
        setPassword,
        emailLogin,
        email,
        password
    } = useAuth();


    const location = useLocation()
    const history = useHistory()

    // //Get Data 
    // const emailRef = useRef()
    // const passwordRef = useRef()

    const handleEmail = (e) => {
        const email = e.target.value
        console.log(email)
        setEmail(email)
    }
    const handlePassword = (e) => {
        const password = e.target.value
        console.log(password)
        setPassword(password)
    }


    const handleGoogleSingIn = () => {
        singInWithGoogle()
            .then(() => {

                history.push('/')
            })


    }

    const toggleRegistration = () => {
        // history.push('/login')
        setIsRegister(false)
    }
    const toggleLogIn = () => {
        // history.push('/login')
        setIsRegister(true)
    }

    const handleButton = (e) => {
        e.preventDefault()

        // const email = emailRef.current.value
        // const password = passwordRef.current.value

        if (isRegister) {
            emailLogin(email, password)
                .then(() => {
                    history.push('/')
                    // e.target.value.reset()
                })
        }
        else {
            registerNewUser(email, password)
                .then(() => {
                    history.push('/')
                    // e.target.value.reset()
                })
        }

    }

    return (

        <div className=" h-100 p-2  d-flex justify-content-center bg-img">
            <img src={background} alt="" />
            <div className=" w-50 mt-5 form-card px-4 py-5 col-sm-12">

                <h1 className="mb-4"> {isRegister ? 'Login' : 'Register'}</h1>
                <form action="" className=" w-75" >
                    <input onBlur={handleEmail} className="form-control mb-3" type="email" name="email" placeholder="Email" />
                    <input onBlur={handlePassword} className="form-control mb-3" type="password" name="email" id="password" ref={passwordRef} placeholder="Password" />
                    <button className="btn btn-danger mb-3"
                        onClick={handleButton}
                    >{isRegister ? 'Login' : 'Register'}</button>
                </form>
                {
                    isRegister ? <>

                        <button onClick={handleGoogleSingIn}
                            className="btn btn-warning mb-5"
                        >Google Signin</button>

                        <h5>Create New account ? <Link to="/register" onClick={toggleRegistration}

                        >Register Now</Link> </h5>
                    </> : <>
                        <h5>Already Register ? <Link to="/login" onClick={toggleLogIn}

                        >Login Now</Link></h5>
                    </>
                }
            </div>
        </div>

    );
};

export default Login;