import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <main className='main'>
            <section className='section'>
                <h2>Our Services</h2>
            <div class="service-container1">
            <button className="service-button"><Link to="/Contact">Dentistry</Link></button>
            </div>
            <div class="service-container2">
            <button className="service-button"><Link to="/Contact">Hygiene</Link></button>
            </div>
            <div class="service-container3">
            <button className="service-button"><Link to="/Contact">Ortho</Link></button>
            </div>
            </section>
        </main>
    );
};

export default Services;
