import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SignIn from './SignIn';
const Home = () => {
    const image_url = '/static/assets/images/logo.png'; 
    const [showSignIn, setShowSignIn] = useState(false);

  const handleClick = () => {
    setShowSignIn(true);
  };

    return (
        <div className="items-center h-screen">
            <div id="logo" className="text-center">
                <a href="home.html">
                    <b>
                        <h1 className="pt-7 uppercase text-white text-[48px] font-poppins font-medium leading-normal">Yoga
                         </h1>
                         <img src={image_url} alt="logo" className="width-[404px] h-80 mx-auto"/>
                         <p className="text-white text-[24px] p-2 font-poppins font-medium leading-normal">Start with Fresh Morning</p>
                         <button className="absolute inset-x-0 bottom-0 m-7 rounded-full bg-[#053B63] w-[200px] h-[50px] text-white text-[18px] font-poppins font-medium leading-normal mx-auto"
                         >Sign In   
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }}/>
                         </button>
                         {/* {!showSignIn ? (
        <button
          className="absolute inset-x-0 bottom-0 m-7 rounded-full bg-[#053B63] w-[200px] h-[50px] text-white text-[18px] font-poppins font-medium leading-normal mx-auto"
          onClick={handleClick}
        >
          Sign In
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} />
        </button>
      ) : (
      <SignIn />)}*/}
                    </b>
                </a>
            </div>
            {/* <div className="left-side ml-4 hidden sm:block">
                <input
                    type="text"
                    name="username"
                    placeholder="Search for username.."
                    className="border rounded px-2 py-1"
                />
                <button type="submit" className="ml-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div> */}
        </div>
    )
}

export default Home