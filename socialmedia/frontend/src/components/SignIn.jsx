import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link , useNavigate} from 'react-router-dom';
import SignUp from './SingUpForm';

function SignInForm() {
  
  const [formData, setFormData] = useState({
    // Tutaj zdefiniuj pola formularza i ich początkowe wartości
    username: '',
    password: '',
  });

  const {username, password} = formData;

  const handleChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.username, formData.password);
    try {
        const response = await axios.post('/signin/', {
            username,
            password,
        });
        console.log('Login successful!', response.data);
    } catch (error) {
      if (error.response) {
        // Serwer zwrócił odpowiedź z kodem innym niż 2xx (np. 404, 500)
        console.error('Login failed with server error:', error.response.status, error.response.data);
    } else if (error.request) {
        // Żądanie nie doczekało się odpowiedzi (np. brak połączenia z serwerem)
        console.error('Login request failed:', error.request);
    } else {
        // Inny błąd
        console.error('Login failed:', error.message);
    }
    }
  };


    return (
      <Router  path="/SignUp" component={SignUp}>
      <div className="flex justify-center items-center h-screen">
      <div className="md:h-[500px] md:w-[400px] bg-[#FCFBF9] bg-opacity-40 rounded-3xl border-2 border-[#053B63]">
        <h2 className="text-center text-[#053B63] text-[45px] font-bold p-8">Sign In</h2>
        
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
                type="password" // Zmiana typu na "password"
                className="form-conrol shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                required
              /> 
            </div>
            <button type="submit" className="bg-gradient-to-br from-[#053B63] py-3 rounded-md text-white text-xl to-[#043356] w-full">Login</button>
            <div className="text-center mt-5 space-x-2">
                <p className="text-base"> Not registered? <a href="/signup"> Create a account </a></p>
                <Link to="SignUp">Go to Component A</Link>
            </div>
        </form>
      </div>
    </div>
    </Router>
    );
}

export default SignInForm;
// export default connect()(SignInForm);