import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register', formData, {
                withCredentials: true // allow cookies (needed for sanctum auth)
            });
            console.log('User registered:', response.data);
        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
