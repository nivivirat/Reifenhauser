import service from '../../../../assets/Images/Home/services/serviceimg.svg';
import GlobalServices from '../../../../assets/Images/Home/services/CardImages/GlobalServices.svg'
import BreakdownMaintenance from '../../../../assets/Images/Home/services/CardImages/BreakdownMaintenance.svg'
import Installation_Commissioning from '../../../../assets/Images/Home/services/CardImages/Installation&Commissioning.svg'
import PMS_AMC from '../../../../assets/Images/Home/services/CardImages/PMS&AMC.svg'

const BlueCard = ({ content, img, selected, handleLocationClick }) => {

    const images = {
        GlobalServices,
        BreakdownMaintenance,
        Installation_Commissioning,
        PMS_AMC
    }

    return (
        <a
            href='/services'
            onMouseEnter={() => handleLocationClick(content)}
            className={`flex flex-row md:gap-5 gap-3 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-400 md:h-[200px] h-[150px] md:p-6 p-3 transition-opacity duration-300 ${selected === content ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className='w-[50%] h-full'>
                <img src={images[img]} className='w-full h-full rounded-2xl object-cover' alt="Service Image" />
                {/* <img src={PMS_AMC} className='w-full h-full rounded-2xl object-cover' alt="Service Image" /> */}
            </div>
            <div className='text-white md:w-[60%] w-[50%] md:justify-between flex flex-col'>
                <p className='font-semibold'>{content}</p>
                <p className='font-extralight md:text-[16px] text-[12px]'>We're not just a service provider; we're pioneers, shaping tomorrow through foresight and adapting to emerging trends.</p>
            </div>
        </a>
    );
};

export default BlueCard;
