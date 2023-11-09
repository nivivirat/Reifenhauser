import AboutUs from './HomeComponents/AboutUs'
import Banner from './HomeComponents/Banner'
import HomePrincipals from './HomeComponents/HomePrincipals'
import HomeServices from './HomeComponents/HomeServices'
import HomeTestimonials from './HomeComponents/HomeTestimonials'
import HomeGlobal from './HomeComponents/HomeGlobal'
import Newsletter from './HomeComponents/Newsletter'

export default function Home() {


    return (
        <div className='flex flex-col xl:gap-[5P0px] lg:gap-[30px] md:gap-[20px] gap-[10px]'>
            {/* banner */}
            <Banner />

            {/* about us */}
            <AboutUs />


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