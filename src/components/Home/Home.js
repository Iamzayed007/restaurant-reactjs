import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Foods from './Foods/Foods';
import Services from './Services/Services';
import './Home.css'
const Home = () => {
    useEffect(() => {
        document.title = 'Restaurant'
    }, [])
    return (
        <div>
            <Banner />

            <Menu />

            <Foods />
            <Services />
        </div>
    );
};

export default Home;