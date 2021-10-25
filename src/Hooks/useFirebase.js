import {
    GoogleAuthProvider, getAuth, signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import initializeAuth from '../firebase/firebase.initialize';

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(true)
    const [isLogIn, setIsLogIn] = useState(false)
    const [isRegister, setIsRegister] = useState(true)

    const history = useHistory()
    const auth = getAuth();

    //Get Data 
    // const emailRef = useRef()
    // const passwordRef = useRef()

    //Email Register
    const registerNewUser = (email, password) => {

        // setEmail(emailRef.current.value)
        // setPassword(passwordRef.current.value)
        return createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                const user = res.user;
                setUser(user)
                setIsLogIn(true)
                history.push('/')
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    //Email Sign In

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                const user = res.user;
                setUser(user)
                setIsLogIn(true)
                history.push('/')
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    //Google Login
    const singInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(res.user);
                setIsLogIn(true)
                console.log(user)
            })

    }

    //Sign Out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser('')
            setIsLogIn(false)
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        email,
        password,
        isLogIn,
        isRegister,

        setEmail,
        setPassword,
        setIsRegister,
        setUser,
        setIsLogIn,


        registerNewUser,
        emailLogin,
        singInWithGoogle,
        logOut

    }
}
export default useFirebase;