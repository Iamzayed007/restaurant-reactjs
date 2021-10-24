import {
    GoogleAuthProvider, getAuth, signInWithPopup,
    signOut,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { useState } from 'react';
import initializeAuth from '../firebase/firebase.initialize';

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(true)
    const [isLogIn, setIsLogIn] = useState(false)
    const [isRegister, setIsRegister] = useState(true)

    const auth = getAuth();

    //Email Register
    const registerNewUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                const user = res.user;
                setUser(user)
                setIsLogIn(true)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
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
        isLogIn,
        isRegister,
        singInWithGoogle,
        logOut,
        setUser
    }
}
export default useFirebase;