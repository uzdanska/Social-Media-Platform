import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Header from "./components/Header"
import SignUpForm from './components/SingUpForm'
import SignInForm from './components/SignIn';

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
      <SignInForm></SignInForm>
      {/* <SignUpForm></SignUpForm> */}
      <Header/>
    </>
  )
}

export default App
