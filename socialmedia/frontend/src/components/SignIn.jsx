import React, { useState } from 'react';
import axios from 'axios';

function SignInForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/signin', formData); // Adjust the API endpoint as needed
            console.log('Sign-in successful:', response.data);

            // You can handle success here, such as redirecting the user
        } catch (error) {
            console.error('Sign-in error:', error);

            // Handle the error, e.g., displaying an error message to the user
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
                    <div className="text-center mt-5 space-x-2">
                        <p className="text-base"> Not registered? <a href="/signup"> Create a account </a></p>
                    </div>
            </form>
        </div>
    );
}

export default SignInForm;