import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Header from "./components/Header"
import SignUpForm from './components/SingUpForm'
import SignInForm from './components/SignIn';
import Home from './components/Home'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gradient-to-t from-[#EDF5E0] to-[#053B63] md:bg-im'>
    <Home></Home>
      {/* <SignInForm></SignInForm> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <Header/> */}
      </div>
    </>
  )
}

export default App
