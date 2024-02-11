import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import ourPrincipal from '../../assets/Images/Principals/OurPrincipal/ourPrincipal.svg';
import Rlogo from '../../assets/Images/Principals/Rlogo.svg';
import CompanyCardsEcec from './CompanyCardsEcec';
import ExtrusionMachineryCard from './ExtrusionMachineryCard';

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
                const lastHash = url.substring(hashIndex + 1);
                const heading = lastHash.indexOf('#') === 0 ? lastHash.substring(1) : lastHash;
                const element = document.getElementById(heading);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const handleUrlChange = () => {
            console.log("URL changed");
            const delayScroll = setTimeout(() => {
                console.log("done");
                scrollToHash();
                clearTimeout(delayScroll);
            }, 2000); // Adjust the delay time if needed
        };

        // Attach the event listener when the component mounts
        window.addEventListener('hashchange', handleUrlChange);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('hashchange', handleUrlChange);
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
