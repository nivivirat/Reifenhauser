import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import thirtyYears from '../../assets/Images/Home/30years.svg';
import bannerbg from '../../assets/Images/Home/bannerbg.svg';
import bannerbgmobile from '../../assets/Images/Home/bannerbgmobile.svg';
import r from '../../assets/Images/Home/r.svg';
import bannerData from './data/bannerData.json';

export default function Banner() {
    const [currentSection, setCurrentSection] = useState(1);

    const handleNextSection = () => {
        if (currentSection < bannerData.length - 1) {
            setCurrentSection(currentSection + 1);
        }
    };

    const handlePrevSection = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
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
    
    return (
        <div>
            <div className="rounded-lg relative">
                <img src={bannerbg} className='md:relative md:block hidden md:h-auto md:w-auto h-[400px] object-cover object-right'></img>
                <img src={bannerbgmobile} className='md:relative md:hidden md:h-auto md:w-auto h-[400px] w-full object-cover object-right rounded-xl'></img>
                <div className='absolute top-0 left-0 xl:top-[40px] md:top-[20px] md:left-[30px] w-[55%] md:p-0 p-4 z-10'>
                    {currentSection === 0 ?
                        <img src={thirtyYears} className='md:h-[190px]'></img>
                        :
                        <div className='md:text-[20px] xl:text-[50px] text-[18px] lg:text-[35px] text-white font-semibold'>{bannerData[currentSection].text}</div>
                    }
                    <div className='xl:text-[30px] md:text-[16px] text-[16px] lg:text-[18px] text-white font-thin mt-5'>{bannerData[currentSection].subtext}</div>

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


                    <div className='mt-10 bg-white lg:mt-[60px] md:w-[150px] w-[120px] md:text-[18px] text-[12px] text-center rounded-lg md:p-4 p-2 text-[#00295F] font-bold'>
                        Know More
                    </div>

                    {/* Previous and Next buttons */}
                    <div className='md:absolute md:block left-[70%] bottom-[20%] hidden '>
                        <div className='flex flex-row gap-5'>
                            <div className='rounded-full border-2 text-white -rotate-90 border-white p-2' onClick={handlePrevSection} disabled={currentSection === 0}>
                                <Icon icon="prime:arrow-up" />
                            </div>
                            <div className='rounded-full border-2 text-white rotate-90 border-white p-2' onClick={handleNextSection} disabled={currentSection === bannerData.length - 1}>
                                <Icon icon="prime:arrow-up" />
                            </div>
                        </div>
                    </div>


                    <div className='md:absolute md:block left-[73%] bottom-0 hidden text-center'>
                        <div className='text-white'>SCROLL</div>
                        <div className='border border-white h-[50px] w-[30px] rounded-[20px] ml-2'>
                            <div>
                                <div className='border-2 h-0 w-3 border-white rotate-90 mt-5 ml-2'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute sm:right-[100px] md:right-0 right-0 top-0 z-0 opacity-80'>
                    <img src={r} className='md:h-[250px] xl:h-[451px] h-[299px] lg:h-[350px]'></img>
                </div>


                <div className='absolute text-white sm:right-[5%] xl-right-[4%] md:right-[6%] sm:bottom-0 right-[8%] bottom-[6%] z-0 opacity-80'>
                    <p className='text-[10px] font-medium md:text-[12px] lg:text-[20px]'>Number of Installations</p>
                    <p className='text-[30px] font-semibold'>250+</p>
                </div>


            </div>
        </div>
    )
}