import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import initializeAuth from '../firebase/firebase.initialize';

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const auth = getAuth();
    const singInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(res.user)
                console.log(user)
            })

    }

    return {
        singInWithGoogle,
        user,
        setUser
    }
}
export default useFirebase;