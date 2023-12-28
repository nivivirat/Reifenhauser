import aboutUsBg from '../../../assets/Images/Home/aboutUs/aboutUsBg.svg'
import companies from '../../../assets/Images/Home/aboutUs/companies.svg'


export default function AboutUs() {
    return (
        <div>
            <div className='xl:p-10 p-3 flex md:flex-row flex-col place-items-center xl:gap-0 gap-10'>
                <div className='xl:w-[45%] w-full flex flex-col xl:gap-4 gap-[10px]'>
                    {/* connect with us */}
                    <div className='xl:rounded-[35px] rounded-[20px] shadow-lg relative'>
                        <div className='xl:h-[320px] lg:h-[300px] h-[200px] '>
                            <img className='h-full w-full object-cover xl:rounded-[35px] rounded-[20px]' src={aboutUsBg}></img>
                        </div>

                        <div className='absolute top-0 left-0 xl:font-medium xl:p-9 lg:p-7 md:p-5 p-4 leading-6 text-white xl:text-4xl lg:text-3xl text-xl tracking-wide'>
                            <div className=''>
                                <p className=''>Connect with us to make a meaningful impact across various industries we specialize in.</p>
                            </div>
                        </div>

                        <div className='absolute bottom-0 left-0 xl:p-9 lg:p-7 md:p-5 p-4 text-white w-[60%] xl:text-[16px] text-[12px] lg:tracking-wide'>
                            <p className=''>We continue to bring in the latest technology in the Indian Subcontinent</p>
                        </div>

                        <div className='absolute bottom-0 right-0 xl:p-9 p-4 text-white w-[42%] xl:text-[16px] md:text-[10px] text-[12px] tracking-wide'>
                            <div className='bg-white rounded-[40px] p-1 flex justify-center place-items-center'>
                                <a href='/contactUs' className='text-primary font-semibold'>Connect with us</a>
                            </div>
                        </div>

                    </div>

                    {/* other two */}
                    <div className='flex flex-row xl:gap-2 gap-1 justify-between'>

                        <div className='w-[48%] rounded-[20px] shadow-lg relative'>
                            <div className='xl:h-[300px] h-[150px]'>
                                <img className='h-full w-full object-cover rounded-[20px]' src={companies}></img>
                                <div className='flex flex-col h-full w-full justify-center place-items-center text-[#295DB1] font-normal absolute bottom-0 xl:p-9 p-4 tracking-wide'>
                                    <span className='xl:text-[75px] md:text-[60px] text-[40px] font-bold'>30</span>
                                    <span className='xl:text-[25px] pb-[4%] font-normal'>&nbsp;Companies</span>
                                </div>
                            </div>


                            {/* <div className='flex flex-row justify-center place-items-center text-[#295DB1] font-semibold absolute bottom-0 xl:text-[16px] text-[10px] left-0 xl:p-6 p-4 tracking-wide'>
                                <p className=''>Our team has served ingenious companies across the Asia Pacific region.</p>
                            </div> */}
                        </div>


                        <div className='w-[48%] rounded-[20px] shadow-lg relative'>
                            <div className='xl:h-[300px] h-[150px] pb-7'>
                                <iframe className='h-full w-full object-cover xl:rounded-[35px] rounded-[20px]' src="https://lottie.host/?file=2f1c7a11-438a-4f0a-8709-6af229d0cc9b/tt8ngeo14t.json"></iframe>
                            </div>

                            <div className='flex  flex-row justify-center place-items-center text-[#295DB1] font-semibold absolute bottom-0 right-[8%] xl:text-[18px] text-[15px] left-0 xl:p-6 p-4 tracking-wide'>
                                <p className='bg-gradient-to-r from-blue-900 to-blue-700 text-transparent bg-clip-text'>24 x 7 Service</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* about us part */}
                <div className='xl:w-[55%] flex flex-col xl:gap-10 gap-4 xl:p-[30px]'>
                    <p className='xl:text-3xl text-2xl xl:font-normal font-medium text-primary'>About Us</p>
                    <div className='font-semibold xl:text-4xl text-3xl xl:leading-snug'>
                        <span className='text-black'>At RIMPL, we have gone beyond the industry's</span>
                        <span className='text-primary'> conventional notion of service.</span>
                    </div>
                    <a href='/aboutUs' className="flex justify-center place-items-center text-white text-[14px] p-3 rounded-xl xl:w-[25%] w-[40%] bg-gradient-to-r from-blue-900 to-blue-400">
                        Read more
                    </a>

                </div>
            </div>

        </div>
    )
}