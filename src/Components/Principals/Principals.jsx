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
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Principals() {

    const [principalsData, setPrincipalsData] = useState({});

    useEffect(() => {
        const database = getDatabase();
        const principalsRef = ref(database, 'principals');

        onValue(principalsRef, (snapshot) => {
            setPrincipalsData(snapshot.val() || {});
        });
    }, []);

    useEffect(() => {
        const scrollToHash = () => {
            const url = window.location.href;
            const hashIndex = url.lastIndexOf('#');
            if (hashIndex !== -1) {
                const heading = url.substring(hashIndex + 1);
                console.log(heading);
                const element = document.getElementById(heading);
                console.log(element);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const delayScroll = setTimeout(() => {
            console.log("donneee");
            scrollToHash();
            clearTimeout(delayScroll);

        }, 4000); // Adjust the delay time if needed

        return () => {
            clearTimeout(delayScroll);
        };
    }, []);

    return (
        <div className="p-6 lg:p-10 flex flex-col lg:gap-10 gap-8 md:mx-[50px]">

            {/* our principals */}
            <div className="w-full xl:mt-10 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:h-[380px] place-items-center justify-between lg:px-[10px]">
                <div className="flex flex-col lg:w-[55%] animated-box animate__animated animate__fadeInLeft">

                    <p className="mt-2 text-primary font-semibold text-5xl mb-4 ">Our Principals</p>
                    <p className="text-[#183B56] lg:opacity-100 opacity-80 text-[18px] lg:mt-4">We extend our gratitude to our principals for entrusting us as the bridge between global innovation and the thriving industrial community. Our extensive expertise spans across multiple industries, including Plastic Extrusion, Converting and Labels, Paper, Wire, and Cable (Up until this moment).</p>
                </div>

                <img src={ourPrincipal} className='h-[400px] animate__animated animate__fadeInRight'></img>
            </div>

            {/* Extrusion Machinery  */}
            {/* <div id='ExtrusionMachinery' className='flex flex-col lg:gap-24 gap-16 xl:mt-10'>
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
                        </div> */}
            {/* <div className='grid grid-rows-3'> */}
            {/* <div className='grid lg:grid-rows-2 lg:grid-flow-row lg:px-10 lg:gap-10 gap-5 grid-cols-2 md:grid-rows-2'> */}
            {/* cards */}
            {/* <div className='hidden lg:block'>
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
                    </div> */}

            {/* <div className='grid lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10'> */}
            {/* more cards */}

            {/* {CompanyDataExec.map((machinery, index) => (
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
                    </div> */}

            {/* </div>
            </div> */}

            {/* Converting Machinery */}
            {Object.entries(principalsData)
                .sort(([, a], [, b]) => a.s_order - b.s_order)
                .map(([section, sectionData]) => (
                    <div key={section} className="mb-8 relative">
                        <div id={section === 'Extrusion Machinery' ? 'ExtrusionMachinery' : section === 'Converting Machinery' ? 'ConvertingMachinery' : section === 'Labels' ? 'Labels' : section === 'Ancillary' ? 'Ancillary' : section === 'Slitting & Metallizing' ? 'Slitting-Metallizing' : ''}>
                            <p className="text-primary font-semibold lg:text-[55px] my-5 text-[35px]">{section}</p>
                        </div>


                        {section === 'Reifenhauser Machinary' && sectionData && Object.values(sectionData).length > 0 ? (
                            <div className='flex flex-col lg:flex-row mt-[100px]'>
                                <div className='flex flex-row justify-between'>
                                    <img src={Rlogo} className='w-[35%] md:w-[10%] sm:w-[15%] lg:w-full'></img>
                                    <div className='lg:hidden block w-[50%]'>
                                        <ExtrusionMachineryCard
                                            heading={Object.values(sectionData)[0].heading}
                                            sub={Object.values(sectionData)[0].sub}
                                            link={Object.values(sectionData)[0].link}
                                        />
                                    </div>
                                </div>
                                <div className='grid lg:grid-rows-2 lg:grid-flow-row lg:px-10 lg:gap-10 gap-5 grid-cols-2 md:grid-rows-2'>
                                    <div className='hidden lg:block'>
                                        <ExtrusionMachineryCard
                                            heading={Object.values(sectionData)[0].heading}
                                            sub={Object.values(sectionData)[0].sub}
                                            link={Object.values(sectionData)[0].link}
                                        />
                                    </div>
                                    {Object.values(sectionData).slice(1).map((machinery, index) => (
                                        <React.Fragment key={index}>
                                            {machinery && (
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
                        ) : (
                            <div className="grid lg:grid-cols-4 grid-cols-2 lg:grid-flow-row gap-10">
                                {Object.entries(sectionData)
                                    .filter(([key]) => key !== 's_order')
                                    .sort(([, a], [, b]) => a.order - b.order)
                                    .map(([itemId, item]) => (
                                        <CompanyCardsEcec
                                            key={itemId}
                                            companyName={item.company_name}
                                            img={item.img}
                                            backContent={item.backContent}
                                            back2={item.back2}
                                            back3={item.back3}
                                            backLink={item.backLink}
                                        />
                                    ))}
                            </div>
                        )}
                    </div>
                ))}





        </div>
    )
}
