import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import thirtyYears from '../../../assets/Images/Home/30years.svg';
import bannerbg from '../../../assets/Images/Home/bannerbg.svg';
import bannerbgmobile from '../../../assets/Images/Home/bannerbgmobile.svg';
import r from '../../../assets/Images/Home/r.svg';
import bannerData from '../data/bannerData.json';

export default function Banner() {
    const [currentSection, setCurrentSection] = useState(0);
    const [downCurrentSection, setDownCurrentSection] = useState(0);

    const downData = [
        {
            top: "Number of Installations",
            bottom: "1000+",
        },
        {
            top: "Number of Installations",
            bottom: "1000+",
        }
        // {
        //     top: "Testimonials Received",
        //     bottom: "25+",
        // }
    ]

    const handleNextSection = () => {
        if (currentSection < bannerData.length - 1) {
            setCurrentSection(currentSection + 1);
        }
        else {
            setCurrentSection(0)
        }
    };

    const handlePrevSection = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
        else {
            setCurrentSection(2);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSection < bannerData.length - 1) {
                setCurrentSection(currentSection + 1);
            } else {
                setCurrentSection(0);
            }
        }, 3000); // 3000 milliseconds (3 seconds)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentSection]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (downCurrentSection === 0) {
                setDownCurrentSection(1);
            } else {
                setDownCurrentSection(0);
            }
        }, 3000); // 3000 milliseconds (3 seconds)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [downCurrentSection]);

    return (
        <div className='xl:p-10 p-3 md:h-full'>
            <div className="rounded-lg relative overflow-clip md:h-[95%]">
                <img src={bannerbg} className='md:relative md:block hidden md:h-full md:w-full object-cover object-right-bottom rounded-[50px]'></img>
                <img src={bannerbgmobile} className='md:relative md:hidden md:h-auto md:w-auto h-[400px] w-full object-cover object-right rounded-xl'></img>
                <div className='xl:p-0 absolute top-0 left-0 xl:top-[40px] md:top-[20px] md:left-[30px] md:w-[55%] w-[70%] md:p-0 p-4 z-10 border border-black'>
                    {currentSection === 0 ?
                        <img src={thirtyYears} className='lg:h-[180px] md:h-[80px] sm:h-[120px] sm:w-[55%]'></img>
                        :
                        <div className='md:text-[25px] sm:text-[20px] xl:text-[40px] text-[18px] border border-black lg:text-[35px] text-white font-semibold'>{bannerData[currentSection].text}</div>
                    }
                    <div className='2xl:text-[30px] xl:text-[24px] md:text-[16px] sm:text-[18px] text-[16px] lg:text-[18px] text-white font-thin mt-5'>{bannerData[currentSection].subtext}</div>

                    {/* <div className='md:absolute md:block md:left-[75%] lg:left-[72%] lg:bottom-0 -bottom-5 hidden text-center'>
                        <div className='text-white text-[12px]'>SCROLL</div>
                        <div className='border border-white h-[50px] w-[30px] rounded-[20px] ml-2'>
                            <div>
                                <div className='border-2 h-0 w-3 border-white rotate-90 mt-5 ml-2'></div>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className='xl:p-5 absolute 2xl:bottom-[6%] xl:bottom-[0%] lg:bottom-[15%] xl:pl-10 lg:pl-4 md:pl-4 pl-4 md:bottom-[3%] sm:bottom-[5%] bottom-[10%] flex flex-row 2xl:gap-[180%] xl:gap-[150%] lg:gap-[130%] md:gap-[80%]'>
                    <div>
                        <div className='flex mt-10 lg:mt-[80px]'>
                            {bannerData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`md:w-10 md:h-2 w-4 h-1 mx-1 rounded-full cursor-pointer ${currentSection === index ? 'bg-white' : 'bg-[#275DB6]'
                                        }`}
                                    onClick={() => setCurrentSection(index)}
                                ></div>
                            ))}
                        </div>


                        <div className='mt-10 md:mt-5 bg-white xl:mt-[40px] lg:mt-[60px] md:w-[150px] w-[120px] md:text-[18px] text-[12px] text-center rounded-lg md:p-4 p-2 text-[#00295F] font-bold'>
                            <a className='h-full w-full' href="/aboutUs">
                                Know More
                            </a>
                        </div>
                    </div>

                    {/* Previous and Next buttons */}
                    <div className='lg:flex flex-col place-items-center gap-5 lg:left-[70%] md:left-[20%] bottom-[2%] hidden lg:mt-[35%] md:mt-[15%]'>
                        <div className='flex flex-row gap-5'>
                            <div className='opacity-0 rounded-full border-2 text-white -rotate-90 border-white p-2' onClick={handlePrevSection} disabled={currentSection === 0}>
                                <Icon icon="prime:arrow-up" />
                            </div>
                            <div className='opacity-0 rounded-full border-2 text-white rotate-90 border-white p-2' onClick={handleNextSection} disabled={currentSection === bannerData.length - 1}>
                                <Icon icon="prime:arrow-up" />
                            </div>
                        </div>
                        <div>
                            <div className='text-white text-[12px]'>SCROLL</div>
                            <div className='border border-white h-[50px] w-[30px] rounded-[20px] ml-1.5'>
                                <div className=''>
                                    <div className='border-2 h-0 w-3 border-white rotate-90 mt-5 ml-2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-full absolute sm:right-[100px] md:right-[3%] right-0 bottom-0 overflow-hidden z-0 opacity-80'>
                    <div className='xl:h-[71%] 2xl:h-[74%] sm:h-[74%] h-[74%]'>
                        <img src={r} className='h-full w-full'></img>
                    </div>
                </div>


                <div className='absolute flex flex-row justify-center place-items-center md:gap-10 text-white sm:right-[5%] xl-right-[4%] md:right-[6%] sm:bottom-0 right-[8%] xl:bottom-10 lg:bottom-7 md:bottom-3 bottom-[6%] z-0 opacity-80'>
                    <div>
                        <p className='text-[10px] font-medium md:text-[12px] lg:text-[20px]'>{downData[downCurrentSection].top}</p>
                        <p className='text-[30px] font-semibold'>{downData[downCurrentSection].bottom}</p>
                    </div>
                    <div className='md:flex flex-col gap-2 hidden'>
                        {/* <div
                            className="bg-white md:w-2 md:h-2 w-4 h-1 rounded-full cursor-pointer"
                        ></div>
                        <div
                            className="bg-[#5997ff] md:w-2 md:h-2 w-4 h-1 rounded-full cursor-pointer"
                        ></div> */}

                        {/* {downData.map((_, index) => (
                            <div
                                key={index}
                                className={`md:w-2 md:h-2 w-4 h-1 rounded-full cursor-pointer ${downCurrentSection === index ? 'bg-white' : 'bg-[#5997ff]'
                                    }`}
                            ></div>
                        ))} */}

                    </div>

                </div>


            </div>
        </div>
    )
}