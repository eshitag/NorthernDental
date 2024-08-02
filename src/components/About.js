import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <main>

            <section className='about'>
                <div className='doctor-image'>
                <h2>About Dr. Garg</h2>
                <img src={'Dr garg.png'} />
                </div>
                <div className='content-wrapper'>
                <p>Dr. Amandeep Garg is dedicated to providing top-notch dental care to the Happy Valley-Goose Bay community.</p>
                <hr></hr>
                <p> "Add a short quote or testimonial about your product. Other people speaking for you says volumes."</p>
                </div>
            </section>
{/* section separator*/}
                <section>
                <div className='choose'>   
                    <h2 className='centered-heading'>Why Choose Us? </h2> 
                <ul className='inline-list'>
                    <li>Expertise
                        <p>Share what makes your business unique to set you apart from your competition.</p>
                    </li>

                    <li>Philosophy
                        <p>Share what makes your business unique to set you apart from your competition.</p>
                    </li>
                    <li>Technology
                        <p>Share what makes your business unique to set you apart from your competition.</p>
                    </li>
                </ul>
                <div className="image-container">
                <button><Link to="/Contact">Book a Consult</Link></button>
                </div>
                </div>
            </section>

        </main>
    );
};

export default About;
