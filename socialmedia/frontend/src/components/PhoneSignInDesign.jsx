import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PhoneSignInDesign = () => {
    const image_url = '/static/assets/images/logo.png';

    return (
        <div id="login" className="hidden md:flex text-center md:h-[500px] md:w-[250px] md:bg-white md:rounded-2xl md:bg-gradient-to-t from-[#EDF5E0] to-[#053B63]">
            <a>
                <b>
                    <h1 className="pt-7 uppercase text-white text-[48px] font-poppins font-medium leading-normal">Yoga
                    </h1>
                    <img src={image_url} alt="logo" className="width-[404px] h-80 md:h-60 mx-auto"/>
                    <p className="text-white text-[24px] p-2 font-poppins font-medium leading-normal">Start with Fresh Morning</p>
                    <button className="absolute md:relative inset-x-0 bottom-0 m-7 md:m-0 rounded-full bg-[#053B63] w-[200px] h-[50px] text-white text-[18px] font-poppins font-medium leading-normal mx-auto"
                    >Sign In   
                        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }}/>
                    </button>
                </b>
            </a>
        </div>
    )
}

export default PhoneSignInDesign;