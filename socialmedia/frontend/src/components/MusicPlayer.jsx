import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicPlayer = () => {
    const track_url = '/static/assets/images/TRACK.svg'; 
    return (
        <div className='w-80 h-[60px] bg-[#eae0d5] mx-auto rounded-2xl'>
            <img className="p-[5px]" src={track_url} alt="" />
        </div>
    )
}

export default MusicPlayer;