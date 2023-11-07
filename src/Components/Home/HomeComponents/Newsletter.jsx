import newsletter from '../../../assets/Images/Home/newsletter/newsletter.svg'
import { Icon } from '@iconify/react'

export default function Newsletter() {
    return (
        <div className='w-screen text-white flex justify-center'>
            <div className='md:w-[80%] md:h-[150px] h-[350px] w-full flex md:flex-row flex-col md:justify-between md:gap-0 gap-2 md:px-10 place-items-center md:p-5 m-3 relative bg-gradient-to-r from-blue-900 to-blue-400 rounded-2xl'>
                <img src={newsletter} className='absolute right-0 bottom-0'></img>
                <div className='flex flex-col md:p-0 p-10'>
                    <p className='font-semibold md:text-3xl text-xl'>Subscribe Our Newsletter!</p>
                    <p>Stay updated with what’s happening in the packaging industry.</p>
                </div>

                <div className='md:w-[30%] flex flex-col gap-4 md:mr-[10%]'>
                    <div className='flex flex-row justify-between bg-white text-primary md:w-[400px] w-[300px] p-3 px-5 rounded-xl'>
                        <p className=''>E-mail</p>
                        <Icon icon="material-symbols-light:keyboard-arrow-right" />
                    </div>
                    <div className='flex flex-row justify-center bg-white text-primary md:w-[400px] p-1 px-2 rounded-xl'>
                        <p className=''>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}