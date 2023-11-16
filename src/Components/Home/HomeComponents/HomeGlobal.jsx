import globe from '../../../assets/Images/Home/global/globe.svg'

export default function HomeGlobal() {
    return (
        <div className='flex flex-col font-semibold justify-center place-items-center md:gap-2'>
            <p className='text-primary text-[26px]'>Presence</p>
            <p className='lg:text-4xl md:text-2xl text-xl p-3 text-center'>Ingraining technology in and around India since years</p>
            <div className='p-10 w-full h-full flex justify-center'>
                <img src={globe} className='h-[450px] object-cover rounded-3xl md:w-[70%] w-[450px] bg-primary'></img>
            </div>
        </div>
    )
}