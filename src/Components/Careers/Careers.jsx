import React, { useState } from 'react';
import one from '../../assets/Images/Careers/one.svg';
import grpImg from '../../assets/Images/Careers/grpImg.svg';
import managingDirector from '../../assets/Images/Careers/managingDirector.svg';
import resume from '../../assets/Images/Careers/resume.svg';
import { Icon } from '@iconify/react';

export default function Careers() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className='lg:p-10 p-5 flex flex-col lg:gap-10 gap-8'>
            <div className='bg-[#cfe1ff] lg:h-[500px] xl:h-[400px] h-[250px] lg:rounded-[25px] rounded-[20px] overflow-clip relative'>
                <img src={one} className='h-full w-full md:object-cover' alt='One' />
                <div className='absolute z-10 top-0 flex flex-col justify-center place-items-center w-full lg:gap-8 md:gap-6 gap-5 p-10'>
                    <div className='text-[#5997FF] lg:text-[18px]'>Careers</div>
                    <div className='text-primary md:text-[30px] lg:text-[45px] text-center font-bold lg:px-28 md:px-18'>Become part of our agile and quick-thinking team, shaping a brighter future together.</div>
                    <button className='lg:px-10 md:px-6 px-4 lg:py-3 py-2 bg-primary lg:rounded-3xl md:rounded-xl rounded-lg lg:text-xl md:text-[16px] text-[12px] text-white' onClick={toggleForm}>Apply Now</button>
                </div>
            </div>
            <div className=''>
                <img src={grpImg} className='px-[10%]' alt='Group' />
            </div>
            <div className='w-full flex md:flex-row flex-col-reverse justify-center place-items-center'>
                <div className='md:w-[40%] md:p-10'>
                    <img src={managingDirector} className='md:px-10 p-10' alt='Managing Director' />
                </div>
                <div className='md:p-10 md:w-[60%] flex flex-col md:gap-6 p-2'>
                    <p className='text-primary opacity-90 italic md:text-[24px] text-[18px] md:p-0 p-4'>“A vibrant work culture and a team building spirit is what you will perceive while working with us. Your journey will certainly be memorable and unforgettable when you commence on a fresh note. While we work hard, we celebrate harder!”</p>
                    <div className='md:p-0 p-4'>
                        <span className='opacity-50 font-bold'>— Mr. Manish Mehta, </span>
                        <span className='opacity-50 italic'>Managing Director</span>
                    </div>
                </div>
            </div>

            {showForm && (
                <div className='fixed md:top-[40%] top-[25%] left-[10%] w-[80%] md:h-[50%] h-[70%] flex items-center justify-center z-20'>
                    <div className='bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-5'>
                        <div className='flex flex-row justify-between'>
                            <p className='w-[90%] text-center text-primary font-semibold md:text-[18px]'>Please fill the details and submit your resume. We shall get back to you in case our team shortlists your profile</p>
                            <div className='w-[10px] text-xl cursor-pointer' onClick={toggleForm}>
                                <Icon icon="ph:x" />
                            </div>
                        </div>
                        <form className='flex flex-col justify-center place-items-center md:px-10'>
                            {/* <label htmlFor='name'>Name*</label> */}
                            <input type='text' id='name' className='border-b border-black p-2 w-full mb-4' required placeholder='Name*' />

                            {/* <label htmlFor='number'></label> */}
                            <input type='tel' id='number' className='border-b border-black p-2 w-full mb-4' required placeholder='Number*' />

                            {/* <label htmlFor='email'></label> */}
                            <input type='email' id='email' className='border-b border-black p-2 w-full mb-4' required placeholder='Email Address*' />

                            {/* <label htmlFor='message'></label> */}
                            <textarea id='message' className='border-b border-black p-2 w-full mb-4 bg-[#f5f7fb]' placeholder='Message'></textarea>

                            <div className='relative flex place-items-center justify-center cursor-pointer border border-gray-400 w-full rounded-lg'>
                                <input type='file' id='resume' placeholder='upload' className='z-20 cursor-pointer opacity-0 border border-gray-300 w-full mb-4' accept='.pdf,.doc,.docx' title="There aren't any files chosen yet." />
                                <div className='flex flex-row absolute top-3 gap-2 opacity-30 z-10 place-items-center justify-center'>
                                    <img src={resume}></img>
                                    <p>Upload Your Resume</p>
                                </div>
                            </div>

                            <button className='text-white px-4 py-2 rounded-md md:mt-5 mt-2 w-full md:w-[30%] bg-gradient-to-r from-blue-900 to-blue-400' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
