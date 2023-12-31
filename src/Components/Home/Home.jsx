import React, { useState, useEffect } from 'react';
import Banner from './HomeComponents/Banner';
import AboutUs from './HomeComponents/AboutUs';
import HomePrincipals from './HomeComponents/HomePrincipals';
import HomeServices from './HomeComponents/HomeServices';
import HomeTestimonials from './HomeComponents/HomeTestimonials';
import HomeGlobal from './HomeComponents/HomeGlobal';
import Newsletter from './HomeComponents/Newsletter';

export default function Home() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let bannerHeight;
    
    if (screenHeight > 610 && screenHeight < 720 && screenWidth > 768) {
        bannerHeight = '90%';
    } else if(screenWidth < 768)
    {
        bannerHeight = "400px"
    } else {
        bannerHeight = '600px'
    }

    return (
        <div className='flex flex-col xl:gap-[50px] lg:gap-[30px] md:gap-[20px] gap-[10px]'>

            {bannerHeight === '90%' && (
                <div className='md:h-screen'>
                    <div style={{ height: bannerHeight }}>
                        {/* banner */}
                        <Banner />
                    </div>
                </div>
            )}

            {bannerHeight !== '90%' && (
                <div style={{ height: bannerHeight }}>
                    {/* banner */}
                    <Banner />
                </div>
            )}


            <div className={`${bannerHeight === '90%' ? 'md:-mt-[10%]' : ''}`}>
                {/* about us */}
                <AboutUs />
            </div>


            {/* principals */}
            <HomePrincipals />

            {/* services */}
            <HomeServices />

            {/* testimonials */}
            <HomeTestimonials />

            {/* global */}
            <HomeGlobal />

            <Newsletter />

        </div>
    );
}
