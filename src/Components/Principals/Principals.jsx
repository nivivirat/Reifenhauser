import ourPrincipal from '../../assets/Images/Principals/OurPrincipal/ourPrincipal.svg'
import Rlogo from '../../assets/Images/Principals/Rlogo.svg'
import extrusionmachinaryLink from './Data/extrusionmachinaryLink.json';
import CompanyDataExec from './Data/CompanyDataExec.json';
import convertingMachinaryData from './Data/convertingMachinaryData.json'
import labelsData from './Data/labelsData.json'
import ancillaryData from './Data/ancillaryData.json'
import SMCData from './Data/SMCData.json'
import ExtrusionMachineryCard from './ExtrusionMachineryCard';
import CompanyCardsEcec from './CompanyCardsEcec';
import React, { useEffect } from 'react';

export default function Principals() {

    useEffect(() => {
        const scrollToHash = () => {
            const url = window.location.href;
            const hashIndex = url.lastIndexOf('#');
            if (hashIndex !== -1) {
                const heading = url.substring(hashIndex + 1);
                const element = document.getElementById(heading);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const delayScroll = setTimeout(() => {
            scrollToHash();
            clearTimeout(delayScroll);
        }, 500); // Adjust the delay time if needed

        return () => {
            clearTimeout(delayScroll);
        };
    }, []);

    return (
        <div className="p-6 lg:p-10 flex flex-col lg:gap-10 gap-8 md:mx-[50px]">

            {/* our principals */}
            <div className="w-full xl:mt-10 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:h-[380px] place-items-center justify-between lg:px-[10px]">
                <div className="flex flex-col lg:w-[55%] animated-box animate__animated animate__fadeInLeft">
                    {/* <div className="md:hidden flex-row flex gap-1">
                        <p className="text-[#999999]">Home-</p>
                        <p className="text-primary font-semibold">Contact Us</p>
                    </div> */}

                    <p className="mt-2 text-primary font-semibold text-5xl mb-4 ">Our Principals</p>
                    <p className="text-[#183B56] lg:opacity-100 opacity-80 text-[18px] lg:mt-4">We extend our gratitude to our principals for entrusting us as the bridge between global innovation and the thriving industrial community. Our extensive expertise spans across multiple industries, including Plastic Extrusion, Converting and Labels, Paper, Wire, and Cable (Up until this moment).</p>
                </div>

                <img src={ourPrincipal} className='h-[400px] animate__animated animate__fadeInRight'></img>
            </div>

            {/* Extrusion Machinery  */}
            <div id='ExtrusionMachinery' className='flex flex-col lg:gap-24 gap-16 xl:mt-10'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Extrusion Machinery</p>
                </div>

                <div className='flex flex-col lg:gap-24 gap-16'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='flex flex-row justify-between'>
                            <img src={Rlogo} className='w-[35%] md:w-[10%] sm:w-[15%] lg:w-full'></img>
                            <div className='lg:hidden block w-[50%]'>
                                <ExtrusionMachineryCard
                                    heading={extrusionmachinaryLink[0].heading}
                                    sub={extrusionmachinaryLink[0].sub}
                                    link={extrusionmachinaryLink[0].link}
                                />
                            </div>
                        </div>
                        {/* <div className='grid grid-rows-3'> */}
                        <div className='grid lg:grid-rows-2 lg:grid-flow-row lg:px-10 lg:gap-10 gap-5 grid-cols-2 md:grid-rows-2'>
                            {/* cards */}
                            <div className='hidden lg:block'>
                                <ExtrusionMachineryCard
                                    heading={extrusionmachinaryLink[0].heading}
                                    sub={extrusionmachinaryLink[0].sub}
                                    link={extrusionmachinaryLink[0].link}
                                />
                            </div>
                            {extrusionmachinaryLink.map((machinery, index) => (
                                <React.Fragment key={index}>
                                    {index !== 0 && (
                                        <ExtrusionMachineryCard
                                            heading={machinery.heading}
                                            sub={machinery.sub}
                                            link={machinery.link}
                                        />
                                    )}
                                </React.Fragment>
                            ))}

                        </div>
                    </div>

                    <div className='grid lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10'>
                        {/* more cards */}

                        {CompanyDataExec.map((machinery, index) => (
                            (
                                <CompanyCardsEcec
                                    key={index}
                                    companyName={machinery.company_name}
                                    img={machinery.img}
                                    backContent={machinery.backContent}
                                    back2={machinery.back2}
                                    back3={machinery.back3}
                                    backLink={machinery.backLink}
                                />
                            )
                        ))}
                    </div>

                </div>
            </div>

            {/* Converting Machinery */}
            <div id='ConvertingMachinery' className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Converting Machinery</p>
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10'>
                    {/* more cards */}

                    {convertingMachinaryData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                                backContent={machinery.backContent}
                                back2={machinery.back2}
                                back3={machinery.back3}
                                backLink={machinery.backLink}
                            />
                        )
                    ))}
                </div>
            </div>

            {/* Labels */}
            <div id='Labels' className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Labels</p>
                </div>
                <div className='grid lg:grid-rows-1 lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10'>

                    {/* more cards */}

                    {labelsData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                                backContent={machinery.backContent}
                                back2={machinery.back2}
                                back3={machinery.back3}
                                backLink={machinery.backLink}
                            />
                        )
                    ))}
                </div>
            </div>

            {/* Ancillary */}
            <div id='Ancillary' className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Ancillary</p>
                </div>
                <div className='grid lg:grid-rows-2 lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10'>
                    {/* more cards */}

                    {ancillaryData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                                backContent={machinery.backContent}
                                back2={machinery.back2}
                                back3={machinery.back3}
                                backLink={machinery.backLink}
                            />
                        )
                    ))}
                </div>
            </div>

            {/* Slitting, Metallizing */}
            <div id='Slitting-Metallizing' className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Slitting &  Metallizing </p>
                </div>
                <div className='grid lg:grid-rows-1 lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10'>

                    {/* more cards */}

                    {SMCData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                                backContent={machinery.backContent}
                                back2={machinery.back2}
                                back3={machinery.back3}
                                backLink={machinery.backLink}
                            />
                        )
                    ))}
                </div>
            </div>



        </div>
    )
}
