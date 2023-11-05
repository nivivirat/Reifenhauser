import bannerbg from '../../assets/Images/Home/bannerbg.svg'
import bannerbgmobile from '../../assets/Images/Home/bannerbgmobile.svg'
import thirtyYears from '../../assets/Images/Home/30years.svg'
import r from '../../assets/Images/Home/r.svg'
import bannerData from './data/bannerData.json'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Banner from './Banner'

export default function Home() {
    

    return (
        <div className='md:p-10 p-3'>
            {/* banner */}
            <Banner />

            {/* about us */}
            <div></div>


            {/* principals */}
            <div></div>


            {/* services */}
            <div></div>


            {/* tesimonials */}
            <div></div>


            {/* global */}
            <div></div>
        </div>
    )
}