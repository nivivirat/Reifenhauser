import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import header_phone from '../../assets/Images/Header/header_phone.svg';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation(); // Get the current location

    function handleLogoClick() {
        window.location.href = '/'
    }

    return (
        // <div className='w-screen md:border-b shadow-md md:border-[#b8becb] md:block fixed'>
        <div className='z-50 md:h-auto h-[85px] bg-white md:border-b shadow-md md:border-[#b8becb] md:block fixed md:static inset-0 md:relative'>
            <div className='w-full flex flex-row justify-between place-items-center px-5 pt-2 md:px-5 lg:pt-3 lg:pb-2 lg:px-5' >
                <div className='cursor-pointer' onClick={handleLogoClick}>
                    <img className='sm:h-[70px] sm:w-[120px] h-12 w-20' src='https://res.cloudinary.com/dzhdarh4q/image/upload/v1699014385/Reifenhauser/ReifenhauserLogo_hhc7wi.svg' alt='Logo' />
                    <p className="sm:pl-[15%] font-display text-primary italic text-[12px] sm:text-14 leading-normal tracking-tighter font-serif">
                        That Extra Mile!
                    </p>
                </div>

                <div className='md:flex hidden space-x-3 lg:space-x-7 xl:space-x-12 text-[12px] lg:text-[18px] text-[#666666] font-semibold'>
                    <a
                        href='/#/aboutUs'
                        className={`hover:text-primary ${location.pathname === '/aboutUs' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/aboutUs'
                    >
                        About Us
                    </a>
                    <a
                        href='/#/services'
                        className={`hover:text-primary ${location.pathname === '/services' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/services'
                    >
                        Services
                    </a>
                    <a
                        href='/#/principals'
                        className={`hover:text-primary ${location.pathname === '/principals' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/principals'
                    >
                        Principals
                    </a>
                    <a
                        href='/#/events'
                        className={`hover:text-primary ${location.pathname === '/events' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/events'
                    >
                        Events
                    </a>
                    <a
                        href='/#/media'
                        className={`hover:text-primary ${location.pathname === '/media' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/media'
                    >
                        Media
                    </a>
                    <a
                        href='/#/careers'
                        className={`hover:text-primary ${location.pathname === '/careers' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/careers'
                    >
                        Careers
                    </a>
                    <a
                        href='/#/contactUs'
                        className={`hover:text-primary ${location.pathname === '/contactUs' ? 'text-primary' : ''}`} // Apply 'text-primary' if current path is '/contactUs'
                    >
                        Contact us
                    </a>
                </div>

                <a href='https://wa.me/919322338415' target="_blank" rel="noopener noreferrer" className='xl:w-[250px] lg:w-[230px] md:flex hidden flex-row bg-base rounded-lg p-2 px-3 border-[#c8d1db] border-2 justify-center place-items-center gap-5'>
                    <div className=''>
                        <img src={header_phone} alt='Phone' />
                    </div>
                    <div className='flex flex-col md:text-[14px] lg:text-[16px] text-[13px] font-semibold'>
                        <p className='text-[#011C51]'>Service Helpline</p>
                        <p className='text-[#285196]'>+91 9322338415</p>
                    </div>
                </a>
                <div className={`md:hidden w-screen fixed top-20 right-0 justify-start h-screen bg-base transition-transform transform ${mobileMenuOpen ? 'translate-x-0 z-50' : 'translate-x-full z-0'}`}>
                    <div className='w-[100%] h-[95%] p-4'>
                        <div className='flex flex-col h-[85%] justify-between'>
                            <ul className='flex flex-col gap-8'>
                                <li><a href='/#/aboutUs' onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
                                <li><a href='/#/services' onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                                <li><a href='/#/principals' onClick={() => setMobileMenuOpen(false)}>Principals</a></li>
                                <li><a href='/#/events' onClick={() => setMobileMenuOpen(false)}>Events</a></li>
                                <li><a href='/#/media' onClick={() => setMobileMenuOpen(false)}>Media</a></li>
                                <li><a href='/#/careers' onClick={() => setMobileMenuOpen(false)}>Careers</a></li>
                                <li><a href='/#/contactUs' onClick={() => setMobileMenuOpen(false)}>Contact us</a></li>
                            </ul>
                            <div className='xl:w-[250px] lg:w-[230px] flex flex-row bg-base rounded-lg p-2 px-3 border-[#c8d1db] border-2 justify-center place-items-center gap-5'>
                                <div className=''>
                                    <img src={header_phone} alt='Phone' />
                                </div>
                                <a href='https://wa.me/919322338415' target="_blank" rel="noopener noreferrer" className='flex flex-col md:text-[14px] lg:text-[16px] text-[13px] font-semibold'>
                                    <p className='text-[#011C51]'>Service Helpline</p>
                                    <p className='text-[#285196]'>+91 9322338415</p>
                                </a>
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
                        {mobileMenuOpen ? (
                            <Icon icon="maki:cross" />
                        ) : (
                            <Icon icon="iconamoon:menu-burger-horizontal" />
                        )}
                    </button>

                    <p className='font-semibold'>Menu</p>
                </div>
            </div>
        </div>
    );
}
