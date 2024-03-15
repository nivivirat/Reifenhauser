import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Icon } from '@iconify/react';

export default function HomeYouTubeVideo() {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Initialize Firebase database
        const db = getDatabase();

        // Reference to 'ytlinks' node in the database
        const ytLinksRef = ref(db, 'ytlinks');

        // Listen for changes to the data
        onValue(ytLinksRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert data object to array and sort by order value
                const sortedVideos = Object.values(data).sort((a, b) => a.order - b.order);
                setVideos(sortedVideos);
            }
        });
    }, []);

    // Function to extract video ID from YouTube URL
    const extractVideoId = (url) => {
        let videoId = '';
        if (url.includes('youtube.com')) {
            const urlParams = new URLSearchParams(new URL(url).search);
            videoId = urlParams.get('v');
        } else if (url.includes('youtu.be')) {
            videoId = url.split('/').pop();
        }
        return videoId;
    };

    const goToNextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const goToPreviousVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className='flex justify-center flex-row md:pb-10 md:mb-0 mb-24'>
            {videos.length > 0 && (
                <div className='flex flex-row items-center'>
                    <button className='text-primary text-3xl px-1 py-2 rounded-r' onClick={goToPreviousVideo}>
                        <Icon icon="grommet-icons:form-previous" />
                    </button>
                    <iframe
                        width="700"
                        height="415"
                        src={`https://www.youtube.com/embed/${extractVideoId(videos[currentIndex].link)}?controls=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='md:w-[700px] md:h-[415px] w-full h-full'
                    ></iframe>
                    <button className='text-primary text-3xl px-1 py-2 rounded-r' onClick={goToNextVideo}>
                        <Icon icon="grommet-icons:form-next" />
                    </button>
                    <iframe
                        width="200"
                        height="115"
                        src={`https://www.youtube.com/embed/${extractVideoId(videos[(currentIndex + 1) % videos.length].link)}?controls=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='hidden md:block ml-10 md:w-[200px] md:h-[115px] w-full h-full'
                    ></iframe>
                </div>
            )}
        </div>
    );
}
