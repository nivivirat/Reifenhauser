import { Icon } from '@iconify/react'
import aboutUs1 from '../../assets/Images/AboutUs/aboutUs1.svg'
import aboutUs1mobile from '../../assets/Images/AboutUs/aboutUs1mobile.svg'
import aboutUs2 from '../../assets/Images/AboutUs/aboutUs2.svg'
import boardOfDirectors from './Data/boardOfDirectors.json'
import DirectorCard from './DirectorCard'

export default function AboutUs() {
    return (
        <div className="lg:p-10 p-5 flex flex-col gap-10 md:mx-[50px]">

            <div className="lg:text-[20px] text-[16px]">
                <p className="lg:block hidden text-primary font-semibold">About Us</p>
                <div className="lg:hidden flex-row flex gap-1">
                    <p className="text-[#999999]">Home-</p>
                    <p className="text-primary font-semibold">About Us</p>
                </div>
            </div>

            <div className="md:hidden block text-primary font-semibold text-[24px]">
                <p>About Us</p>
            </div>

            <div className="flex md:flex-row flex-col gap-5 md:gap-0">

                <div className="md:w-[65%] whitespace-normal">
                    <div className="md:text-[23px] text-[26px] font-semibold w-[90%]">
                        <span className="text-black">We excel in crafting superior packaging solutions and enhancing</span>
                        <span className="text-[#777777]">&nbsp; customer experiences through our exceptional after-sales service.</span>
                    </div>
                </div>

                <div className="text-black opacity-50 md:w-[35%] pr-10">
                    <p className="md:text-[13px] text-[15px]">RIMPL has been milestones ahead with stupendous business growth. As we ascend high, we have progressed immensely in the competitive world.</p>
                </div>

            </div>


            <div className='md:flex hidden md:flex-row lg:gap-[100px] md:gap-[70px] justify-between md:overflow-auto overflow-x-scroll'>
                <div className='md:w-[60%] w-full'>
                    <div className="md:overflow-hidden">
                        <img src={aboutUs1} className='md:h-[300px] lg:h-[400px] w-full h-full' alt="Image 1" />
                    </div>
                </div>
                <div className='md:w-[40%] w-full'>
                    <div className="md:overflow-hidden overflow-x-scroll">
                        <img src={aboutUs2} className='md:h-[300px] lg:h-[400px]' alt="Image 2" />
                    </div>
                </div>
            </div>

            <div className='md:hidden gap-5 flex flex-row overflow-x-scroll'>
                <img src={aboutUs1mobile} alt="" />
                <img src={aboutUs1mobile} alt="" />
            </div>

            {/* Our Story */}
            <div className='flex flex-col md:flex-row md:gap-10 gap-4 md:mt-10'>
                <div className='md:w-[100%]'>
                    <div>
                        <p className="text-primary font-semibold lg:text-[45px] text-[35px]">Our Story</p>
                    </div>
                </div>

                <div className='md:gap-10 gap-2 flex flex-col md:text-[16px] text-[18px] md:pr-[100px] font-medium'>
                    <div className='text-primary'>
                        <p>
                            Since its establishment in 1994, Reifenhäuser (India) Marketing Private Limited (RIMPL) was managed by Mr. Manish Mehta & family as a joint venture closely with Reifenhäuser GmbH & Co. KG Maschinenfabrik.
                        </p>
                    </div>
                    <div className='text-[#555555]'>
                        <p>
                            At the nascent phase, RIMPL was proactively engaged in unleashing the power of plastic extrusion machines India and in other countries. Moving ahead, the vision of our founder, Mr. Manish Metha, introduced new technologies to India and around the globe ranging across Plastic Extrusion, Converting, Injection Molding & Labels Industry.
                        </p>
                    </div>
                    <div className='text-[#555555]'>
                        <p>
                            While the team continues to deliver unparalleled services, RIMPL has triumphed miles ahead along with stellar after sales services and preventative maintenance for machinery globally.
                        </p>
                    </div>

                </div>
            </div>

            {/* mission & vission */}

            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 md:justify-between md:px-0 lg:px[10px] xl:px-[100px] md:mt-10'>

                {/* vision */}
                <div className='overflow-hidden relative md:w-[400px] h-[390px] lg:h-[350px] w-[100%] text-white rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500'>
                    <div className='absolute -right-10 -top-10 text-[200px] text-white opacity-25 '>
                        <Icon icon="ph:binoculars-light" />
                    </div>
                    <div className='px-10 pt-10 font-semibold text-[25px]'>
                        Our Vision
                    </div>
                    <div className='opacity-80 px-8 p-6 text-[20px]'>To establish RIMPL as a “One Stop Solution” for the Packaging Industry, by  bringing innovative technologies and world class customer service experiences that help drive towards a sustainable future.</div>
                </div>


                {/* mission */}
                <div>
                    <div className='overflow-hidden md:ml-[200px] md:mt-10 lg:ml-0 lg:mt-[200px] relative md:w-[400px] h-[350px] w-[100%] text-white rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800'>
                        <div className='absolute -right-10 -top-10 text-[180px] text-white opacity-25 '>
                            <Icon icon="ic:outline-task-alt" />
                        </div>
                        <div className='px-10 pt-10 font-semibold text-[25px]'>
                            Our Mission
                        </div>
                        <div className='opacity-80 px-8 p-6 text-[20px]'>To bring the latest, state of the art, innovative technologies into the Indian subcontinent markets while providing a compelling customer service experience for our clients.</div>
                    </div>
                </div>
            </div>

            {/* Board of directors */}
            <div className='flex flex-col md:gap-10 gap-5'>
                <div className='md:w-[100%]'>
                    <div>
                        <p className="text-primary font-semibold lg:text-[45px] text-[20px]">Board of directors</p>
                    </div>
                </div>

                <div className='whitespace-normal font-semibold md:text-[35px] text-[20px] hidden md:block'>
                    <span className='text-black'>Meet the</span>
                    <span className='text-primary'>&nbsp;visionary minds</span>
                    <span className='text-black'>&nbsp;who drive our business towards</span>
                    <span className='text-primary'>&nbsp;unparalleled success.</span>
                </div>


                <div className='whitespace-normal font-semibold text-[30px] block md:hidden'>
                    <span className='text-black'>Discover the leaders</span>
                    <span className='text-primary'>&nbsp;behind business success</span>
                </div>

                <div className='flex justify-center'>
                    <div className='grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 lg:grid-flow-col md:gap-[100px] gap-10'>
                        {/* more cards */}

                        {boardOfDirectors.map((data, index) => (
                            (
                                <DirectorCard
                                    key={index}
                                    name={data.name}
                                    role={data.role}
                                    img={data.img}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}