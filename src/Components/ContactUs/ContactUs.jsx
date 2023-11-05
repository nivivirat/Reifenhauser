import ContactUsForm from "./ContactUsForm"
import headOffice from '../../assets/Images/ContactUs/headOffice.svg'
import phone from '../../assets/Images/ContactUs/phone1.svg'
import map from '../../assets/Images/ContactUs/map.svg'
import bluebg from '../../assets/Images/ContactUs/bluebg.svg'
import { Icon } from "@iconify/react"
import GoogleMap from "./GoogleMap"


export default function ContactUs() {
    return (
        <div className="lg:p-10 p-5">

            <div className="flex flex-row lg:gap-[10%]">

                <div className="flex flex-col gap-8 lg:w-[45%]">
                    <div className="lg:text-[20px] text-[16px]">
                        <p className="lg:block hidden text-primary font-semibold">Contact Us</p>
                        <div className="lg:hidden flex-row flex gap-1">
                            <p className="text-[#999999]">Home-</p>
                            <p className="text-primary font-semibold">Contact Us</p>
                        </div>
                    </div>

                    <div>
                        <div className="font-semibold flex flex-row gap-1 lg:text-[30px] text-[24px]">
                            <p className="text-black">Get in Touch</p>
                            <p className="text-[#285196]">With Us</p>
                        </div>
                        <div className="lg:w-[60%]">
                            <p className="text-[18px]">Contact us right away if you want to embrace technology</p>
                        </div>
                    </div>

                    <div className="lg:hidden flex">
                        <ContactUsForm />
                    </div>

                    <div className="grid lg:grid-cols-1 grid-cols-2 gap-8">
                        <div className="w-full lg:w-2/5 lg:w-1/2">
                            <div className="flex flex-row items-center gap-2">
                                <img src={headOffice} alt="Head Office" className="w-8 h-8" />
                                <p className="text-primary lg:text-2xl font-semibold text-xl">Head Office</p>
                            </div>
                            <p className="text-[12px] lg:text-[16px]">229, Udyog Bhavan, Sonawala Road, Opp Bridge Warsi, Goregaon East, Mumbai, Maharashtra 400063, India</p>
                        </div>

                        {/* only for mobile */}
                        <div className="w-full lg:w-3/5 lg:w-1/2 lg:hidden block">
                            <div className="flex flex-row items-center gap-2">
                                <img src={phone} alt="Contact" className="w-8 h-8" />
                                <p className="text-primary lg:text-2xl font-semibold text-xl">Contact</p>
                            </div>
                            <p>+91 932 233 84 51</p>
                        </div>

                        {/* only for mobile */}
                        <div className="grid lg:grid-cols-2 grid-cols-2 gap-4">
                            <div className="w-full lg:w-3/5 lg:w-1/2 lg:block hidden">
                                <div className="flex flex-row items-center gap-2">
                                    <img src={phone} alt="Contact" className="w-8 h-8" />
                                    <p className="text-primary lg:text-2xl font-semibold text-xl">Contact</p>
                                </div>
                                <p>+91 932 233 84 51</p>
                            </div>

                            <div className="w-full lg:w-3/5 lg:w-1/2">
                                <div className="flex flex-row items-center gap-2">
                                    <img src={phone} alt="Email" className="w-8 h-8" />
                                    <p className="text-primary lg:text-2xl font-semibold text-xl">Email</p>
                                </div>
                                <p>info@reifenhauserindia.com</p>
                            </div>
                        </div>

                    </div>

                    {/* States */}
                    <div className="flex flex-col gap-4 lg:text-[18px] text-[12px] text-primary font-semibold">
                        <div className="flex flex-row justify-between">
                            <p>Mumbai</p>
                            <p>Ahmedabad</p>
                            <p>Bengaluru</p>
                            <p>Chennai</p>
                            <p>Delhi</p>
                        </div>
                        <div className="flex flex-row justify-between px-4">
                            <p>Hyderabad</p>
                            <p>Jammu</p>
                            <p>Kanpur</p>
                            <p>Kolkata</p>
                            <p>Pune</p>
                        </div>
                    </div>


                </div>

                <div className="lg:absolute lg:block z-0 right-0 hidden w-full pt-[10px]">
                    <div className="relative">
                        <img src={bluebg} className="absolute z-0 h-[550px] right-0 top-0" alt="Background Image" />
                        <div className="absolute w-1/2 z-10 top-10 right-0">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>


            </div>

            {/* google map */}
            <div className="lg:p-10 p-2 lg:mt-16">
                {/* <GoogleMap /> */}
                <img src={map} className="rounded-lg"></img>
            </div>
        </div>
    )
}