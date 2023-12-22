import HomePrincipalCard from "./HomePrincipalCard/HomePrincipalCard"
import { Icon } from "@iconify/react"
import { useState } from "react";

export default function HomePrincipals() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="xl:p-16 p-3 flex flex-col xl:gap-5 md:gap-4 gap-5 md:mt-0 mt-5 md:ml-10 animated-box animate__animated animate__fadeInRight animate__delay-2s">
            <div className="bg-gradient-to-r from-blue-800 to-teal-100 text-transparent bg-clip-text">
                <p className="xl:text-3xl text-2xl xl:font-extrabold font-normal md:font-extrabold md:text-4xl">Principals</p>
            </div>

            {/* content */}
            <div className="xl:text-[40px] lg:text-[28px] md:text-[26px] text-3xl font-medium w-full">
                <div className="hidden md:block leading-snug">
                    <span className="">Over the years, we have gained trust across </span>
                    <span className="text-primary">various segments of the technology-led organizations </span>
                    <span className="">in the industry. </span>
                    {/* <span className="text-primary">segments of the industry.</span> */}
                </div>

                <div className="md:hidden block">
                    <span className="">Through the years, we have earned trust of </span>
                    <span className="text-primary">numerous organizations </span>
                    <span className="">across the </span>
                    <span className="text-primary">manufacturing industry.</span>
                </div>
            </div>

            {/* card */}
            <div className="flex flex-wrap md:justify-between md:px-16 md:py-8">

                <HomePrincipalCard content={"Extrusion Machinery"} />

                <HomePrincipalCard content={"Ancillary"} />

                <HomePrincipalCard content={"Converting Machinery"} />

                <HomePrincipalCard content={"Slitting, Metallizing & Coating"} />

            </div>

            <div className="w-full flex justify-center place-items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <a href="/principals" className="text-primary flex flex-row gap-2 p-3 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary">
                    <p>View All Principals</p>
                    {/* <div className="text-primary md:text-xl"> */}
                    <div className={`text-primary md:text-xl transition-transform duration-300 ease-in-out ${isHovered ? 'rotate-45' : ''
                        }`}>
                        <Icon icon="iconoir:arrow-tr" />
                    </div>
                </a>
            </div >


        </div >
    )
}