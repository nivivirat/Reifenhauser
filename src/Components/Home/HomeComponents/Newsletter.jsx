import newsletter from '../../../assets/Images/Home/newsletter/newsletter.svg'
import { Icon } from '@iconify/react'

export default function Newsletter() {
    return (
        <div className='md:shadow-sm shadow-2xl shadow-blue-500/50 w-screen text-white flex justify-center relative md:mt-[8%] mt-[40%]'>
            <div className='absolute -bottom-[50px] left-[10%] w-full'>
                <div className='md:w-[80%] md:h-[180px] h-[230px] w-[75%] flex md:flex-row flex-col md:justify-between justify-center md:gap-0 gap-2 md:px-10 place-items-center md:p-5 m-3 relative bg-gradient-to-r from-blue-900 to-blue-400 rounded-2xl'>
                    <img src={newsletter} className='absolute right-0 bottom-0'></img>
                    <div className='flex flex-col md:p-0 p-5 gap-1'>
                        <p className='font-semibold md:text-3xl text-[18px]'>Subscribe Our Newsletter!</p>
                        <p className='text-[12px] md:text-[16px]'>Stay updated with what’s happening in the packaging industry.</p>
                    </div>

                    <div className='md:pb-0 pb-2 md:w-[30%] w-full flex flex-col md:justify-normal justify-center place-items-center gap-4 md:mr-[10%]'>
                        <div className='flex flex-row justify-between bg-white text-primary md:w-[400px] w-[90%] md:p-3 p-2 px-5 rounded-xl'>
                            <p className=''>E-mail</p>
                            <Icon icon="material-symbols-light:keyboard-arrow-right" />
                        </div>
                        <div className='flex flex-row justify-center bg-white text-primary md:w-[400px] w-[90%]  p-1 px-2 rounded-xl'>
                            <p className=''>Submit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}