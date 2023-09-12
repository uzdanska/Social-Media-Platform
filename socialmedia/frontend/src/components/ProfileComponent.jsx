import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';

function ProfileComponent({ profileId }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/profile/${profileId}/`);
                setProfile(response.data);
                setLoading(false); // Mark loading as complete
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError(error.message);
                setLoading(false); // Mark loading as complete even on error
            }
        };

        fetchData();
    }, [profileId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container maxWidth='lg'>
            <div className='profile'>
                <Typography variant='h3'>{profile.id_user}</Typography>
                <Typography paragraph>{profile.bio}</Typography>
                <Typography paragraph>{profile.username}</Typography>
            </div>
        </Container>
    );
}

export default ProfileComponent;
