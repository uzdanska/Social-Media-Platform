import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Home from './components/Home';

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
    <div className="bg-[url('static/assets/images/background_image.png')] bg-cover bg-center w-screen h-screen">
    <Home></Home>
      {/* <SignInForm></SignInForm> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <Header/> */}
      </div>
    </>
  )
}

export default App
