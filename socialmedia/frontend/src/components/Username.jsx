import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';
function UsernameComponent() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Replace with your Django API endpoint URL
        fetch('//')
            .then((response) => response.json())
            .then((data) => {
                setUsername(data.username);
            })
            .catch((error) => {
                console.error('Error fetching username:', error);
            });
    }, []);

    return (
        <div>
            <p>Username: {username}</p>
            <ProfileComponent/>
        </div>
    );
}

export default UsernameComponent;