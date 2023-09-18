import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , useNavigate} from 'react-router-dom';
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
            const response = await axios.post('/api/signup/', formData);
            console.log(response.data.message); // Registration successful
            // Redirect the user to the settings page or perform other actions.
        } catch (error) {
            console.error(error.response.data.error); // Display error message
        }
    };

    return (
        <Router>
        <div className="flex justify-center items-center h-screen">
        <div className="md:h-[500px] md:w-[400px] bg-[#FCFBF9] bg-opacity-40 rounded-3xl border-2 border-[#053B63]">
          <h2 className="text-center text-[#053B63] text-[45px] font-bold p-8">Sign Up</h2>
          
            <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder='Username'
                  required
                /> 
              </div>
              <div className="mb-4">
                <input
                 type="text"
                 className="form-conrol shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="Email"
                 required
             />
              </div>
              <div className="mb-4">
                <input
                  type="password" // Zmiana typu na "password"
                  className="form-conrol shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Password'
                  required
                /> 
              </div>
              <div className="mb-4">
                <input
                  type="password2" // Zmiana typu na "password2"
                  className="form-conrol shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  placeholder='Password'
                  required
                /> 
              </div>
              <button type="submit" className="bg-gradient-to-br from-[#053B63] py-3 rounded-md text-white text-xl to-[#043356] w-full">Login</button>
              <div className="text-center mt-5 space-x-2">
              <p class="text-base"> Do you have an account? <a href="/signin"> Login </a></p>
              </div>
          </form>
        </div>
      </div>
      </Router>
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="text"
        //         name="username"
        //         value={formData.username}
        //         onChange={handleChange}
        //         placeholder="Username"
        //     />
        //     <input
        //         type="text"
        //         name="email"
        //         value={formData.email}
        //         onChange={handleChange}
        //         placeholder="Email"
        //     />
        //     <input
        //         type="password" // Use type="password" for password fields
        //         name="password" // Unique name for password
        //         value={formData.password}
        //         onChange={handleChange}
        //         placeholder="Password"
        //     />
        //     <input
        //         type="password" // Use type="password" for password fields
        //         name="password2" // Unique name for password confirmation
        //         value={formData.password2}
        //         onChange={handleChange}
        //         placeholder="Confirm Password"
        //     />
            
        //     <button type="submit">Sign Up</button>
        // </form>
    );
};

export default SignUpForm;