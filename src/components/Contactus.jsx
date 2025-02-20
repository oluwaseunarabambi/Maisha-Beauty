import React, { useState } from 'react';
import '../Styles/Contactus.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        });   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can add form submission logic here
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-details">
                <p>Name: Ayishat Temitope Sulaimon</p>
                <p>Email: Miamibolakale@gmail.com</p>
                <p>WhatsApp: 09053267546</p>
            </div>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="but" type="submit">Submit</button>
            </form>
        </div>
    );
};


export default ContactUs;

