import ourPrincipal from '../../assets/Images/Principals/OurPrincipal/ourPrincipal.svg'
import Rlogo from '../../assets/Images/Principals/Rlogo.svg'
import extrusionmachinaryLink from './Data/extrusionmachinaryLink.json';
import CompanyDataExec from './Data/CompanyDataExec.json';
import convertingMachinaryData from './Data/convertingMachinaryData.json'
import ancillaryData from './Data/ancillaryData.json'
import SMCData from './Data/SMCData.json'
import ExtrusionMachineryCard from './ExtrusionMachineryCard';
import CompanyCardsEcec from './CompanyCardsEcec';
import React from 'react';

export default function Principals() {
    return (
        <div className="p-6 lg:p-10 flex flex-col lg:gap-10 gap-8 md:mx-[50px]">

            {/* our principals */}
            <div className="w-full xl:mt-10 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:h-[380px] place-items-center justify-between lg:px-[10px]">
                <div className="flex flex-col lg:w-[55%]">
                    <div className="md:hidden flex-row flex gap-1">
                        <p className="text-[#999999]">Home-</p>
                        <p className="text-primary font-semibold">Contact Us</p>
                    </div>

                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Our Principals</p>
                    <p className="text-[#183B56] lg:opacity-100 opacity-80 text-[22px] lg:mt-4">An undaunted team spirit always stirs up to serve diverse organizations established in the Indian subcontinent competently. Here’s a glimpse of our principals which have embraced cutting edge technology for a better future.</p>
                </div>

                <img src={ourPrincipal} className='h-[400px]'></img>
            </div>

            {/* Extrusion Machinery  */}
            <div className='flex flex-col lg:gap-24 gap-16 xl:mt-10'>
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
                        <div className='grid lg:grid-rows-2 lg:grid-flow-col lg:px-10 lg:gap-10 gap-5 grid-cols-2 md:grid-cols-2'>
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

                    <div className='grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 lg:grid-flow-col'>
                        {/* more cards */}

                        {CompanyDataExec.map((machinery, index) => (
                            (
                                <CompanyCardsEcec
                                    key={index}
                                    companyName={machinery.company_name}
                                    img={machinery.img}
                                />
                            )
                        ))}
                    </div>

                </div>
            </div>

            {/* companies */}
            <div className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Converting Machinery</p>
                </div>
                <div className='grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 lg:grid-flow-col'>
                    {/* more cards */}

                    {convertingMachinaryData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                            />
                        )
                    ))}
                </div>
            </div>

            {/* Ancillary */}
            <div className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Ancillary</p>
                </div>
                <div className='grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 lg:grid-flow-col'>
                    {/* more cards */}

                    {ancillaryData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                            />
                        )
                    ))}
                </div>
            </div>

            {/* Slitting, Metallizing & Coating */}
            <div className='flex flex-col lg:gap-22 gap-16'>
                <div>
                    <p className="text-primary font-semibold lg:text-[55px] text-[35px]">Slitting, Metallizing & Coating</p>
                </div>
                <div className='grid lg:grid-rows-1 grid-cols-2 lg:grid-cols-3 lg:grid-flow-col'>
                    {/* more cards */}

                    {SMCData.map((machinery, index) => (
                        (
                            <CompanyCardsEcec
                                key={index}
                                companyName={machinery.company_name}
                                img={machinery.img}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}