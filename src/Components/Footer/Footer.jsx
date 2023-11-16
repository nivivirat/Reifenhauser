import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <div className='bg-primary xl:flex flex-col mg:gap-0 gap-5 text-white lg:h-[450px] md:p-14 md:px-24 p-10 w-full'>

            {/* top */}
            <div className='flex md:flex-row flex-col-reverse justify-between h-[90%] w-full'>

                <div className='md:w-[30%] w-[100%] md:mt-0 mt-10 flex flex-col gap-5'>
                    <p className='text-white'>CONTACT US</p>

                    <div className='flex flex-row bg-base w-[200px] lg:w-[220px]  md:w-[220px] text-[30px] xl:w-[220px] xl:h-[70px] md:gap-4 rounded-lg justify-center place-items-center p-5'>
                        <Icon icon="logos:whatsapp-icon" />
                        <div className='flex flex-col md:text-[14px] lg:text-[16px] text-[13px] font-semibold'>
                            <p className='text-[#011C51]'>Say Hello!!</p>
                            <p className='text-[#285196]'>+91 9322338451</p>
                        </div>
                    </div>

                    <div className='flex md:flex-col flex-col gap-5'>
                        <div className='flex md:flex-row flex-row place-items-center gap-3'>
                            <div className='text-white'>
                                <Icon icon="ic:outline-email" />
                            </div>
                            <p>hello@reifenhauserindia.com</p>
                        </div>
                        <p>229, Udyog Bhavan, Sonawala Road, Opp Bridge Warsi, Goregaon East, Mumbai, Maharashtra 400063, India</p>
                    </div>
                </div>


                <div className='md:w-[70%] md:mt-4 w-[100%] flex flex-row md:justify-center gap-[15%] md:gap-[20%] lg:gap-[30%] xl:gap-[50%] justify-between'>
                    <div>
                        <ul className='flex flex-col gap-3 font-semibold'>
                            <li><a href='/services'>Services</a></li>
                            <li><a href='/articles'>Articles</a></li>
                            <li><a href='/careers'>Careers</a></li>
                            <li><a href='/aboutUs'>About Us</a></li>
                            <li><a href='/events'>Events</a></li>
                            <li><a href='/testimonials'>Testimonials</a></li>
                            <li><a href='/blogs'>Blogs</a></li>
                        </ul>
                        <div className='flex-col gap-3 justify-start lg:flex hidden absolute lg:mt-9     xl:mt-4'>
                            <p className='text-[12px]'>Connect with us on</p>
                            <div className='flex flex-row gap-2'>
                                <a href='https://www.linkedin.com/company/reifenhauserindia/?viewAsMember=true' className='rounded-full p-2 pl-1.5 text-center bg-white h-10 w-10 text-[26px] text-[#275AAD]'>
                                    <Icon icon="mdi:linkedin" />
                                </a>
                                <a href='https://www.facebook.com/RIML01' className='rounded-full p-2 text-center bg-white h-10 w-10 text-[26px] text-[#0C59B4]'>
                                    <Icon icon="uil:facebook" />
                                </a>
                                <a href='https://www.instagram.com/rimplindia/' className='rounded-full p-2 text-center bg-white h-10 w-10 text-[26px] text-[#ED26FE]'>
                                    <Icon icon="iconoir:instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold pb-8 uppercase'>Our Principals</p>
                        <ul className='flex flex-col gap-4 font-semibold'>
                            <li><a href='/principals'>Extrusion Machinery</a></li>
                            <li><a href='/principals'>Converting Machinery</a></li>
                            <li><a href='/principals'>Packaging Machinery</a></li>
                            <li><a href='/principals'>Blow Moulding</a></li>
                            <li><a href='/principals'>Ancillary</a></li>
                        </ul>
                    </div>

                </div>

            </div>


            {/* bottom */}
            <div className='flex md:flex-row flex-col gap-[20px] md:mt-0 mt-7 md:gap-[225px]'>
                <a href='/contactUs' className='cursor-pointer bg-base h-[70px] overflow-hidden w-[280px] md:w-[300px] text-primary flex flex-row rounded-lg justify-between place-items-center'>
                    <div className='flex flex-row p-4'>
                        <p className='md:text-[22px] text-[18px] font-semibold'>Contact Us</p>
                        <div className='text-[25px]'>
                            <Icon icon="iconoir:arrow-tr" />
                        </div>
                    </div>
                    <div className='text-[100px] opacity-40 pt-5'>
                        <Icon icon="material-symbols:call-outline" />
                    </div>
                </a>


                <div className='flex lg:hidden flex-col gap-3 justify-start'>
                    <p className='text-[12px]'>Connect with us on</p>
                    <div className='flex flex-row gap-2'>
                        <a href='https://www.linkedin.com/company/reifenhauserindia/?viewAsMember=true' className='rounded-full p-2 pl-1.5 text-center bg-white h-10 w-10 text-[26px] text-[#275AAD]'>
                            <Icon icon="mdi:linkedin" />
                        </a>
                        <a href='https://www.facebook.com/RIML01' className='rounded-full p-2 text-center bg-white h-10 w-10 text-[26px] text-[#0C59B4]'>
                            <Icon icon="uil:facebook" />
                        </a>
                        <a href='https://www.instagram.com/rimplindia/' className='rounded-full p-2 text-center bg-white h-10 w-10 text-[26px] text-[#ED26FE]'>
                            <Icon icon="iconoir:instagram" />
                        </a>
                    </div>
                </div>

                <p className='opacity-40 md:hidden block'>© 2023 — Copyright</p>
            </div>
        </div>
    )
}