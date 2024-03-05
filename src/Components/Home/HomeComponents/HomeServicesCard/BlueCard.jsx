import service from '../../../../assets/Images/Home/services/serviceimg.svg';
import GlobalServices from '../../../../assets/Images/Home/services/CardImages/GlobalServices.svg'
import BreakdownMaintenance from '../../../../assets/Images/Home/services/CardImages/BreakdownMaintenance.svg'
import Installation_Commissioning from '../../../../assets/Images/Home/services/CardImages/Installation&Commissioning.svg'
import PMS_AMC from '../../../../assets/Images/Home/services/CardImages/PMS&AMC.svg'
import PropTypes from 'prop-types';

const BlueCard = ({ title, img, selected, handleLocationClick, content, alt }) => {

    const images = {
        GlobalServices,
        BreakdownMaintenance,
        Installation_Commissioning,
        PMS_AMC
    }

    return (
        <a
            href='/#/services'
            onMouseEnter={() => handleLocationClick(title)}
            className={`flex flex-row md:gap-5 gap-3 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-400 md:h-[200px] h-[150px] md:p-6 p-3 transition-opacity duration-300 ${selected === title ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className='w-[50%] h-full'>
                <img src={images[img]} className='w-full h-full rounded-2xl object-cover' alt={alt} />
            </div>
            <div className='text-white md:w-[60%] w-[50%] gap-4 flex flex-col'>
                <p className='font-semibold'>{title}</p>
                <p className='font-extralight md:text-[16px] text-[12px]'>{content}</p>
            </div>
        </a>
    );
};

BlueCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    handleLocationClick: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default BlueCard;