import AboutUs from './HomeComponents/AboutUs'
import Banner from './HomeComponents/Banner'
import HomePrincipals from './HomeComponents/HomePrincipals'
import HomeServices from './HomeComponents/HomeServices'
import HomeTestimonials from './HomeComponents/HomeTestimonials'
import HomeGlobal from './HomeComponents/HomeGlobal'
import Newsletter from './HomeComponents/Newsletter'

export default function Home() {

    return (
        <div className='flex flex-col xl:gap-[50px] lg:gap-[30px] md:gap-[20px] gap-[10px]'>

            <div className='md:h-screen'>
                <div className='md:h-[90%]'>
                    {/* banner */}
                    <Banner />
                </div>
            </div>

            <div className='md:-mt-[10%] animated-box animate__animated animate__fadeInLeft animate__delay-1s'>
                {/* about us */}
                <AboutUs />
            </div>

            {/* principals */}
            <HomePrincipals />


            {/* services */}
            <HomeServices />


            {/* tesimonials */}
            <HomeTestimonials />


            {/* global */}
            <HomeGlobal />

            <Newsletter />

        </div>
    )
}