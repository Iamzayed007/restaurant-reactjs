import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.confis';


const initialeAuth = () => {
    initializeApp(firebaseConfig);
}
export default initialeAuth