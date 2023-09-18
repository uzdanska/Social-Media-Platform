import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomYouTubePlayer = () => {
  const [videoId, setVideoId] = useState('0L38Z9hIi5s'); // Replace with your desired YouTube video ID
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Load the YouTube IFrame Player API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    // Initialize the YouTube Player API once the script is loaded
    script.onload = () => {
      const YT = window.YT;
      const newPlayer = new YT.Player('youtube-player', {
        videoId,
        events: {
          onReady: onPlayerReady,
        },
      });
      setPlayer(newPlayer);
    };

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
    // You can perform actions when the player is ready here
  };

  return (
    <div>
      <div id="youtube-player"></div>
      {/* Add your custom player controls or design here */}
    </div>
  );
};

export default CustomYouTubePlayer;