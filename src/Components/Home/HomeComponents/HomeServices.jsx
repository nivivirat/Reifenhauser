import customerService from '../../../assets/Images/Home/services/customerService.svg'
import service from '../../../assets/Images/Home/services/serviceimg.svg'
import people from '../../../assets/Images/Home/services/people.svg'
import heart from '../../../assets/Images/Home/services/heart.svg'
import { Icon } from '@iconify/react'

export default function HomeServices() {
    return (
        <div className="flex flex-col xl:gap-5 md:gap-4 gap-5 md:mt-0 mt-5">
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

                <div className="hidden md:flex h-[60px] flex-row gap-2 justify-center place-items-center rounded-md bg-gradient-to-r from-blue-900 to-blue-400 md:w-[20%] w-[40%]">
                    <img src={customerService} className='h-8 w-8'></img>
                    <p className='text-white text-[16px]'>24 x 7 Service Available</p>
                </div>
            </div>


            {/* main */}
            <div className='flex md:flex-wrap md:flex-row flex-col gap-6'>
                {/* Global Service */}
                <div className='flex flex-row md:gap-5 gap-3 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-400 md:w-[48%] md:h-[200px] h-[150px] md:p-6 p-3'>
                    <div className='w-[50%] h-full'>
                        <img src={service} className='w-full h-full rounded-2xl object-cover'></img>
                    </div>
                    <div className='text-white md:w-[60%] w-[50%] md:justify-between flex flex-col'>
                        <p className='font-semibold'>Global Service</p>
                        <p className='font-extralight md:text-[16px] text-[12px]'>We're not just a service provider; we're pioneers, shaping tomorrow through foresight and adapting to emerging trends.</p>
                    </div>

                </div>

                {/* Rectangle */}
                <div className='md:w-[45%]'>
                    <div className='md:rounded-3xl rounded-xl bg-base md:w-[100%] md:h-[80px] flex flex-row justify-between place-items-center md:p-7 p-3'>
                        <p>Preventive Maintenance Service</p>
                        <div className="text-black md:text-xl">
                            <Icon icon="iconoir:arrow-tr" />
                        </div>
                    </div>

                    <div className='md:mt-[5%] mt-[5%] md:rounded-3xl rounded-xl bg-base md:w-[100%] md:h-[80px] flex flex-row justify-between place-items-center md:p-7 p-3'>
                        <p>AMC (Annual Maintenance Contract)</p>
                        <div className="text-black md:text-xl">
                            <Icon icon="iconoir:arrow-tr" />
                        </div>
                    </div>
                </div>

                {/* Rectangle */}
                <div className='md:w-[48%]'>
                    <div className='md:rounded-3xl rounded-xl bg-base md:w-[100%] md:h-[80px] flex flex-row justify-between place-items-center md:p-7 p-3'>
                        <p>Breakdown Maintenance</p>
                        <div className="text-black md:text-xl">
                            <Icon icon="iconoir:arrow-tr" />
                        </div>
                    </div>

                    <div className='md:mt-[5%] mt-[5%] md:rounded-3xl rounded-xl bg-base md:w-[100%] md:h-[80px] flex flex-row justify-between place-items-center md:p-7 p-3'>
                        <p>Installation & Commissioning</p>
                        <div className="text-black md:text-xl">
                            <Icon icon="iconoir:arrow-tr" />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div className='md:w-[48%] w-full flex flex-row gap-4'>
                    <div className='w-[44%] rounded-3xl shadow-lg font-medium relative p-6 md:h-[200px] h-[150px]'>
                        <div className='lg:text-2xl md:text-xl text-[12px]'>SATISFIED</div>
                        <div className='font-bold lg:text-[40px] md:text-[30px]'>90%</div>
                        <div className='lg:text-[14px] md:text-[10px] text-[10px]'>Our consistent record of client satisfaction speaks loudly to the quality and reliability of our services.</div>
                        <img src={heart} className='h-24 w-24 absolute top-0 right-0'></img>
                    </div>

                    <div className='md:w-[45%] w-[49%] rounded-3xl shadow-lg font-medium relative p-6 md:h-[200px] h-[150px] bg-gradient-to-r from-blue-900 to-blue-400'>
                        {/* <div className='lg:text-2xl md:text-xl text-[12px]'>SATISFIED</div> */}
                        <div className='font-bold lg:text-[40px] md:text-[30px] text-white'>30+</div>
                        <div className='lg:text-[14px] md:text-[10px] text-[10px] text-white font-thin'>Our unwavering dedication shines through with a team of 30+ internationally trained technical experts, ensuring exceptional customer service.</div>
                        <img src={people} className='opacity-90 h-24 w-24 absolute top-0 right-0'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}