import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { singInWithGoogle } = useAuth();
    const [loading, setLoading] = useState(true)

    const location = useLocation()
    const history = useHistory()

    // const handleGoogleSingIn = () => {
    //     return singInWithGoogle()


    // }
    return (
        <div>
            login
            <button onClick={singInWithGoogle}>sign in google</button>

        </div>
    );
};

export default Login;