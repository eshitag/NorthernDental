import React from 'react';
import '../App.css';
import Consult from './Consult';
import About from './About';

const Home = () => {
    return (
        <div className='App'>
            <Consult/>
            <About/>
        </div>
    );
};

export default Home;
