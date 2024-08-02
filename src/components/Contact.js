import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <main className='contact-main'>
            <section className='contact-section'>
                <ContactForm />
                <h2>Contact Us</h2>
                <p>Contact Details: (709) 896-9668 | northerndental@bellaliant.com</p>
                <p>Connect with us on social media.</p>
            </section>
        </main>
    );
};

export default Contact;
