import { useState } from 'react';
import { Icon } from '@iconify/react';
import header_phone from '../../assets/Images/Header/header_phone.svg';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='w-screen md:border-b shadow-md md:border-[#b8becb]'>
            <div className='w-full flex flex-row justify-between place-items-center px-5 pt-2 md:px-5 lg:pt-3 lg:pb-2 lg:px-5'>
                <div className=''>
                    <img className='sm:h-[70px] sm:w-[120px] h-12 w-20' src='https://res.cloudinary.com/dzhdarh4q/image/upload/v1699014385/Reifenhauser/ReifenhauserLogo_hhc7wi.svg' alt='Logo' />
                    <p className="sm:pl-[15%] font-display text-primary italic text-[12px] sm:text-14 leading-normal tracking-tighter font-serif">
                        That Extra Mile!
                    </p>
                </div>

                <div className='md:flex hidden space-x-5 lg:space-x-6 xl:space-x-16 text-[12px] lg:text-[18px] text-[#666666] font-semibold'>
                    <a href='#' className='hover:text-primary'>
                        About Us
                    </a>
                    <a href='#' className='hover:text-primary'>
                        Services
                    </a>
                    <a href='#' className='hover:text-primary'>
                        Principals
                    </a>
                    <a href='#' className='hover:text-primary'>
                        Events
                    </a>
                    <a href='#' className='hover:text-primary'>
                        Media
                    </a>
                    <a href='#' className='hover:text-primary'>
                        Careers
                    </a>
                    <a href='#' className='hover:text-primary'>
                        Contact us
                    </a>
                </div>

                <div className='xl:w-[250px] lg:w-[230px] md:flex hidden flex-row bg-base rounded-lg p-2 px-3 border-[#c8d1db] border-2 justify-center place-items-center gap-2'>
                    <div className=''>
                        <img src={header_phone} alt='Phone' />
                    </div>
                    <div className='flex flex-col md:text-[14px] lg:text-[16px] text-[13px] font-semibold'>
                        <p className='text-[#011C51]'>Service Helpline</p>
                        <p className='text-[#285196]'>+91 9322338451</p>
                    </div>
                </div>
                <div className={`md:hidden w-screen fixed top-20 right-0 justify-start h-screen bg-base transition-transform transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='w-[100%] h-full p-4'>
                        <div className='flex flex-col h-[90%] justify-between'>
                            <ul className='flex flex-col gap-8'>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Services</a></li>
                                <li><a href='#'>Principals</a></li>
                                <li><a href='#'>Events</a></li>
                                <li><a href='#'>Media</a></li>
                                <li><a href='#'>Careers</a></li>
                                <li><a href='#'>Contact us</a></li>
                            </ul>
                            <div className='xl:w-[250px] lg:w-[230px] flex flex-row bg-base rounded-lg p-2 px-3 border-[#c8d1db] border-2 justify-center place-items-center gap-5'>
                                <div className=''>
                                    <img src={header_phone} alt='Phone' />
                                </div>
                                <div className='flex flex-col md:text-[14px] lg:text-[16px] text-[13px] font-semibold'>
                                    <p className='text-[#011C51]'>Service Helpline</p>
                                    <p className='text-[#285196]'>+91 9322338451</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden text-primary'>
                    <button
                        className="px-2 pt-2 text-3xl focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Icon icon="iconamoon:menu-burger-horizontal" />
                    </button>
                    <p className='font-semibold'>Menu</p>
                </div>
            </div>
        </div>
    );
}
