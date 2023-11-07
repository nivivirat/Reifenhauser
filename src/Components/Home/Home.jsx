import AboutUs from './HomeComponents/AboutUs'
import Banner from './HomeComponents/Banner'
import HomePrincipals from './HomeComponents/HomePrincipals'
import HomeServices from './HomeComponents/HomeServices'

export default function Home() {


    return (
        <div className='xl:p-10 p-3 flex flex-col xl:gap-[70px] lg:gap-[30px] md:gap-[20px] gap-[10px]'>
            {/* banner */}
            <Banner />

            {/* about us */}
            <AboutUs />


            {/* principals */}
            <HomePrincipals />


            {/* services */}
            <HomeServices />


            {/* tesimonials */}
            <div></div>


            {/* global */}
            <div></div>
        </div>
    )
}