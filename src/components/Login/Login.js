import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import background from '../../image/bannerbackground.png'
import './Login.css'
const Login = () => {
    const { singInWithGoogle } = useAuth();
    const [loading, setLoading] = useState(true)

    const location = useLocation()
    const history = useHistory()

    // const handleGoogleSingIn = () => {
    //     return singInWithGoogle()


    // }

    return (
        <div className="h-full d-flex justify-content-center bg-img">
            <img src={background} alt="" />
            <div className="h-100 w-50 mt-5 form-card">

                <h1 className="mb-4"> Login</h1>
                <form action="" className="h-100 w-50" >
                    <input className="form-control mb-3" type="email" name="email" id="email" placeholder="Email" />
                    <input className="form-control mb-3" type="password" name="email" id="password" placeholder="Password" />
                    <button className="btn btn-danger mb-3">Login</button>
                </form>
                <button onClick={singInWithGoogle}
                    className="btn btn-warning mb-5"
                >Google Signin</button>
            </div>

        </div>
    );
};

export default Login;