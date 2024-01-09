import React, { useState, useEffect } from "react";
import Slider from "../Blog/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Media.css';
import '../Blog/Blog.css';

// Import only the required Firebase modules
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

// Initialize Firebase with your own config
const firebaseConfig = {
    apiKey: "AIzaSyDiNLjf19bW0-5cvkOtdlqYI7YiDzt3WA0",
    authDomain: "reifenhauser-2d366.firebaseapp.com",
    projectId: "reifenhauser-2d366",
    storageBucket: "reifenhauser-2d366.appspot.com",
    messagingSenderId: "1000320736803",
    appId: "1:1000320736803:web:c9db2603f14597edf45b96",
    measurementId: "G-80E388KDKZ",
  };

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default function CardComponent() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Reference to the 'mediacard' node in the Firebase Realtime Database
                const mediacardRef = ref(database, 'mediacard');

                // Fetch data from Firebase
                const snapshot = await get(mediacardRef);
                const data = snapshot.val();

                if (data) {
                    // Convert the object to an array of mediacards
                    const mediaArray = Object.keys(data).map(uid => ({ uid, ...data[uid] }));
                    setMediaData(mediaArray);
                }
            } catch (error) {
                console.error("Error fetching media data:", error);
            }
        };

        fetchData();
    }, [database]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
            // Your responsive settings
        ],
    };

    return (
        <div className="w-screen fg flex flex-col md:gap-5 gap-[100px] pb-10 -mb-24 -mx-4 overflow-x-auto">
            <Slider options={{ align: "center" }}>
                {mediaData.map((mediaCard) => (
                    <div key={mediaCard.uid} className="flex-[0_0_90%] md:flex-[0_0_23%] mx-2">
                        <div className="h-auto w-auto bg-white shadow-lg rounded-lg my-40">
                            <div className="flex justify-center md:justify-end -mt-16 relative">
                                <div style={{ height: '100%', width: '100%' }} className="relative">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={mediaCard.img}
                                        alt={mediaCard.title}
                                    />
                                    <h3  className="text-xs h-12 w-full font-semibold text-white media77 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300"
                                        >{mediaCard.title}</h3>
       <a
  className="text-xs h-12 w-full font-semibold text-white media77 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300"
  href={`http://${mediaCard.title}`}  // Add the appropriate protocol
  target="_blank"  // Optional: Opens the link in a new tab
  rel="noopener noreferrer"  // Recommended for security reasons when using target="_blank"
>
  {mediaCard.title}
</a>

                                    
                                </div>
                            </div>
                            <div>
                                {/* Other content goes here */}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
