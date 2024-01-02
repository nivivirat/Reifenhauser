import { Icon } from '@iconify/react'
import aboutUs1 from '../../assets/Images/AboutUs/aboutUs1.svg'
import aboutUs1mobile from '../../assets/Images/AboutUs/aboutUs1mobile.svg'
import aboutUs2mobile from '../../assets/Images/AboutUs/aboutUs2mobile.jpg'
import aboutUs2 from '../../assets/Images/AboutUs/aboutUs2.svg'
import boardOfDirectors from './Data/boardOfDirectors.json'
import DirectorCard from './DirectorCard'

export default function AboutUs() {
    return (
        <div className="lg:p-10 p-5 flex flex-col gap-10 md:mx-[50px]">

            {/* <div className="lg:text-[20px] text-[16px] ">
                <p className="lg:block hidden text-primary font-semibold">About Us</p>
                <div className="lg:hidden flex-row flex gap-1">
                    <p className="text-[#999999]">Home-</p>
                    <p className="text-primary font-semibold">About Us</p>
                </div>
            </div> */}

            <div className="md:hidden block text-primary font-semibold text-[24px]">
                <p>About Us</p>
            </div>

            <div className="flex md:flex-row flex-col gap-5 md:gap-0">

                <div className="md:w-[100%] whitespace-normal">
                    <div className="font-semibold w-[90%] animate__animated animate__fadeInLeft animate__delay-0s">
                        <div className="text-black lg:text-[24px] md:text-[20px] text-[26px]">At RIMPL, we have gone beyond the industry's conventional notion of service.</div>
                        <div className="text-[#777777] text-[12px] hidden md:block">Our expertise lies in facilitating global companies' access to the Indian Subcontinent with cutting-edge</div>
                        <div className='text-[#777777] text-[12px] hidden md:block'>technology.</div>
                        <div className='text-[#777777] text-[12px] md:hidden block'>Our expertise lies in facilitating global companies' access to the Indian Subcontinent with cutting-edge technology.</div>
                    </div>
                </div>

                {/* <div className="text-black opacity-50 md:w-[35%] pr-10 animate__animated animate__fadeInRight animate__delay-0s">
                    <p className="md:text-[13px] text-[15px]">As we ascend high, we have progressed immensely in the competitive world.
                        Our primary focus rests on showcasing our excellence in service, unparalleled after-sales support, and comprehensive Annual Maintenance Contracts (AMCs).
                    </p>
                </div> */}

            </div>


            <div className='md:flex hidden md:flex-row lg:gap-[40px] md:gap-[30px] justify-between md:overflow-auto overflow-x-scroll'>
                <div className='md:w-[70%] w-full'>
                    <div className="md:overflow-hidden">
                        <img src={aboutUs1} className='md:h-[300px] lg:h-[400px] object-cover w-full h-full object-right animate__animated animate__fadeInLeft animate__delay-0s' alt="Image 1" />
                    </div>
                </div>
                <div className='md:w-[40%] w-full animate__animated animate__fadeInRight animate__delay-0s animate__animated animate__fadeInLeft animate__delay-0s'>
                    <div className="md:overflow-hidden overflow-x-scroll">
                        <img src={aboutUs2} className='md:h-[300px] lg:h-[400px] object-cover' alt="Image 2" />
                    </div>
                </div>
            </div>

            <div className='md:hidden gap-3 flex flex-row overflow-x-scroll h-[150px] w-screen'>
                <img src={aboutUs1} alt="" className='object-cover' />
                <img src={aboutUs2} alt="" className='' />
            </div>

            {/* Our Story */}
            <div className='flex flex-col md:flex-row md:gap-10 gap-4 md:mt-10'>
                <div className='md:w-[100%]'>
                    <div>
                        <p className="text-primary font-semibold lg:text-[45px] text-[35px]">Our Story</p>
                    </div>
                </div>

                <div className='md:gap-6 gap-2 flex flex-col md:text-[16px] text-[18px] md:pr-[100px] font-medium'>
                    <div className='text-primary'>
                        <p>
                        Since its establishment in 1994, Reifenhäuser India Marketing Private Limited (RIMPL) has been under the management of Mr. Manish Mehta and his family, in close collaboration with Reifenhäuser GmbH & Co. KG Maschinenfabrik. </p>
                    </div>
                    <div className='text-[#555555]'>
                        <p>
                        From its inception, RIMPL has proactively harnessed the potential of plastic extrusion machines in India and globally. Guided by the visionary leadership of our founder, Mr. Manish Mehta, we continuously introduce cutting-edge technologies to the Indian subcontinent. Our extensive expertise spans multiple industries, including Plastic Extrusion, Converting and Labels, Paper, as well as Wire & Cable.   </p>
                    </div>
                    <div className='text-[#555555]'>
                        <p>
                        At RIMPL, we are introducing 'Disruptive Technologies,' expanding the minds and horizons of our customers, guiding them toward new arenas, and helping them venture into new avenues. </p>
                    </div>
                    <div className='text-[#555555]'>
                        <p>
                        Moving beyond the conventional definition of service within the industry, we have transcended boundaries. We have assembled a 24X7, fully equipped after-sales service team, providing technical support and preventive maintenance for machines to all our customers. </p>
                    </div>
                </div>
            </div>

            {/* mission & vission */}

            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 md:justify-between md:px-0 lg:px[10px] xl:px-[100px] md:mt-10  animate__animated animate__fadeInRight animate__delay-2s'>

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
                    <div className='overflow-hidden md:ml-[200px] md:mt-10 lg:ml-0 lg:mt-[200px] relative md:w-[400px] h-[350px] w-[100%] text-white rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 '>
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
            <div className='flex flex-col md:gap-10 gap-5  animate__animated animate__fadeIn animate__delay-3s'>
                <div className='md:w-[100%]'>
                    <div>
                        <p className="text-primary font-semibold lg:text-[45px] text-[20px]">Board of Directors</p>
                    </div>
                </div>

                <div className='whitespace-normal font-semibold md:text-[35px] text-[20px] hidden md:block'>
                    <span className='text-black'>Meet the</span>
                    <span className='text-primary'>&nbsp;visionary minds</span>
                    <span className='text-black'>&nbsp;who drive our business <br></br>towards</span>
                    <span className='text-primary'>&nbsp;unparalleled success.</span>
                </div>


                <div className='whitespace-normal font-semibold text-[30px] block md:hidden'>
                    <span className='text-black'>Discover the leaders</span>
                    <span className='text-primary'>&nbsp;behind business success</span>
                </div>

                <div className='flex justify-center'>
                    <div className='grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 lg:grid-flow-row md:gap-[100px] gap-10'>
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
