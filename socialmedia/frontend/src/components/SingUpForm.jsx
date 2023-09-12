import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup/', formData);
            console.log(response.data.message); // Registration successful
            // Redirect the user to the settings page or perform other actions.
        } catch (error) {
            console.error(error.response.data.error); // Display error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password" // Use type="password" for password fields
                name="password" // Unique name for password
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="password" // Use type="password" for password fields
                name="password2" // Unique name for password confirmation
                value={formData.password2}
                onChange={handleChange}
                placeholder="Confirm Password"
            />
            
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;