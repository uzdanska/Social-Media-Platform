import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PhoneSignInDesign from './PhoneSignInDesign';
import SignIn from './SignIn';
import SignUp from './SingUpForm';

const Home = () => {
    
    // const image_url = '/static/assets/images/logo.png'; 
    const image_girl = '/static/assets/images/girl_music.png';

    const [showSignIn, setShowSignIn] = useState(false);

  const handleClick = () => {
    setShowSignIn(true);
  };

    return (
        <div className="flex items-center h-screen md:ml-60 md:p-8 ">
            <PhoneSignInDesign/>

            <div className="left-side mx-auto md:ml-20 flex justify-center">
                {/* <div id="music" className="text-center md:h-[410px] md:w-[450px] md:bg-white md:rounded-2xl md:bg-gradient-to-t from-[#EDF5E0] to-[#053B63]">
                    <a>
                        <b>
                            <h1 className="pt-7 text-[#B9BC7E] text-[15px] font-poppins font-medium leading-normal">#FocusOnYourLife
                            </h1>
                            <p className="pt-2 text-white text-[20px] font-poppins font-medium leading-tight">Listen the sound of forest</p>
                            <p className="text-white text-[20px] font-poppins font-medium leading-tight">and focus on your life!</p>
                            <img src={image_girl} alt="logo" className="width-[404px] h-80 md:h-60 mx-auto"/>
                            
                           <MusicPlayer></MusicPlayer>
                        </b>
                    </a>
                </div> */}
                <SignIn></SignIn>
                {/* <SignUp></SignUp> */}
            </div>
        </div>                                                                                                                 
    )
}

export default Home