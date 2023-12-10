import { useState } from 'react'
import customerService from '../../../assets/Images/Home/services/customerService.svg'
import heart from '../../../assets/Images/Home/services/heart.svg'
import people from '../../../assets/Images/Home/services/people.svg'
import BlueCard from './HomeServicesCard/BlueCard'
import GreyCard from './HomeServicesCard/GreyCard'
import HomeServiceData from './HomeServicesCard/HomeServiceData.json'

export default function HomeServices() {

    const [selected, setSelected] = useState("Global Services");
    const [delayedAction, setDelayedAction] = useState(null);

    const handleLocationClick = (location) => {
        setSelected(location);
    };

    const handleDelayedLocationClick = (location) => {
        // Clear any existing delayed action
        if (delayedAction) {
            clearTimeout(delayedAction);
        }

        // Set the new delayed action
        const timeoutId = setTimeout(() => {
            handleLocationClick(location);
        }, 1000); // 1 second delay

        setDelayedAction(timeoutId);
    };

    return (
        <div className="xl:p-10 p-3 flex flex-col xl:gap-5 md:gap-4 gap-5 md:mt-0 mt-5 md:ml-10">
            <div className="text-primary flex flex-row justify-between">

                <a href='/services' className="xl:text-3xl text-2xl xl:font-extrabold font-normal md:font-extrabold md:text-4xl">Services</a>

                {/* mobile 24 x 7 Service Available */}
                <a href='/services' className="md:hidden flex flex-row justify-center place-items-center p-x rounded-md bg-gradient-to-r from-blue-900 to-blue-400 md:w-[30%] w-[40%]">
                    <img src={customerService} className='h-8 w-8'></img>
                    <p className='text-white text-[8px]'>24 x 7 Service Available</p>
                </a>
            </div>

            {/* content */}
            <div className='flex flex-row gap-10'>
                <div className='md:w-[70%] md:leading-snug xl:text-[30px] lg:text-[28px] md:text-[26px] text-3xl font-semibold'>
                    <span className=''>It's a fundamental part of our DNA, propelling us toward </span>
                    <span className='text-primary'>customer service excellence </span>
                </div>

                <a href='/services' className="hidden md:flex h-[60px] flex-row gap-2 justify-center place-items-center rounded-md bg-gradient-to-r from-blue-900 to-blue-400 md:w-[20%] w-[40%]">
                    <img src={customerService} className='h-8 w-8'></img>
                    <p className='text-white text-[16px]'>24 x 7 Service Available</p>
                </a>
            </div>


            {/* main */}
            <div className='md:w-[100%] md:h-[460px] flex md:flex-wrap md:flex-col flex-col gap-6'>
                {/* Global Service */}
                {HomeServiceData.map((card, index) => (
                    <div className='md:w-[47%]' key={card.id} onMouseEnter={() => handleDelayedLocationClick(card.title)}>
                        {selected === card.title ? (
                            card.id !== 4 ? (
                                <BlueCard content={card.title} selected={selected} handleLocationClick={handleLocationClick} />
                            ) : (
                                <div>
                                    {/* <GreyCard content={"Installation & Commissioning"} selected={selected} handleLocationClick={handleLocationClick} /> */}
                                    <BlueCard content={card.title} selected={selected} handleLocationClick={handleLocationClick} />
                                    {/* <div className='h-full bg-black'></div> */}
                                    {/* return the map function, the map must not iterate after this */}
                                </div>
                            )
                        ) : (
                            selected === "Breakdown Maintenance" && card.id === 5 ?
                                (
                                    <></>
                                ) : (
                                    selected === "Breakdown Maintenance" && card.id === 3 ?
                                        (
                                            <div>
                                                <GreyCard content={card.title} selected={selected} handleLocationClick={handleLocationClick} />
                                                <div className='md:mt-[30px] mt-[20px]'>
                                                    <GreyCard content={"Installation & Commissioning"} selected={selected} handleLocationClick={handleLocationClick} />
                                                </div>
                                            </div>
                                        ) : (
                                            <GreyCard content={card.title} selected={selected} handleLocationClick={handleLocationClick} />
                                        )
                                )
                        )}
                    </div>
                ))}

                {/* Card */}
                <div className='md:w-[45%] w-full flex flex-row gap-4'>
                    <div className='w-[44%] rounded-3xl shadow-lg font-medium relative p-6 pb-10 md:h-[210px] h-[150px]'>
                        <div className='lg:text-2xl md:text-xl text-[12px]'>SATISFIED</div>
                        <div className='lg:text-[40px] md:text-[30px] text-[#242424] font-poppins text-3xl font-medium leading-normal'>90%</div>
                        <div className='lg:text-[14px] md:text-[10px] text-[8px]'>Our consistent record of client satisfaction speaks loudly to the quality and reliability of our services.</div>
                        <img src={heart} className='h-24 w-24 absolute top-0 right-0'></img>
                    </div>

                    <div className='md:w-[54%] w-[49%] rounded-3xl shadow-lg font-medium relative p-6 md:h-[210px] h-[150px] bg-gradient-to-r from-blue-900 to-blue-400'>
                        <div className='lg:text-2xl md:text-xl text-[12px] opacity-0'>SATISFIED</div>
                        <div className='lg:text-[40px] md:text-[30px] text-white text-3xl font-medium leading-10 tracking-tighter'>30+</div>
                        <div className='lg:text-[14px] md:text-[10px] text-[8px] text-white font-normal'>Our unwavering dedication shines through with a team of 30+ internationally trained technical experts, ensuring exceptional customer service.</div>
                        <img src={people} className='opacity-90 h-24 w-24 absolute top-0 right-0'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}