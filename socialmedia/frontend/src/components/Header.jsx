import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfileComponent from './ProfileComponent';

const Header = () => {
    return (
        <div className="flex items-start">
            <div id="logo" className="items-start">
                <a href="home.html">
                    <b>
                        <h1 className="uppercase">Yoga
                        <ProfileComponent/>
                         </h1>
                    </b>
                </a>
            </div>
            <div className="left-side ml-4 hidden sm:block">
                <input
                    type="text"
                    name="username"
                    placeholder="Search for username.."
                    className="border rounded px-2 py-1"
                />
                <button type="submit" className="ml-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default Header