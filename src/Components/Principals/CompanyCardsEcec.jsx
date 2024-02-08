import React, { useState } from 'react';
import PropTypes from "prop-types";

export default function CompanyCardsEcec({ companyName, img, backContent, back2, back3, backLink }) {

    const [card, setCard] = useState(true);

    function handleClick() {
        setCard(!card);
    }

    // const formattedLink = backLink.startsWith('http://') || backLink.startsWith('https://') ? backLink : `https://${backLink}`;
    const handleMouseEnter = () => {
        setCard(false);
    };

    const handleMouseLeave = () => {
        setCard(true);
    };

    const formattedLink = backLink && (backLink.startsWith('http://') || backLink.startsWith('https://')) ? backLink : `https://${backLink}`;

    return (
        <div className='lg:w-[220px] w-[90%] flex flex-col gap-3 cursor-pointer'>

            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                className='border border-[#b3b3b3] rounded-[20px] flex justify-center place-items-center content-center h-[110px]'
            >
                {card ?
                   <img src={img} alt={companyName} className='w-full h-auto' />
                    :
                    <div className='w-full flex-col gap-3 bg-[#e5eaea] border border-[#b3b3b3] rounded-[20px] flex justify-center place-items-center content-center h-[110px]'>
                        <p className='text-[#013A98] text-center md:text-[10px] text-[9px] px-4 font-medium'>{backContent}</p>
                        <p className='text-[#013A98] text-center md:text-[10px] text-[9px] px-4 -mt-3 -mb-3 font-medium'>{back2}</p>
                        <p className='text-[#013A98] text-center md:text-[10px] text-[9px] px-4 font-medium'>{back3}</p>
                        {formattedLink && <a href={formattedLink} target="_blank" rel="noopener noreferrer" className='text-wrap break-words lg:w-[220px] w-[90%] text-black text-center text-[10px] underline font-medium '>{backLink}</a>}
                    </div>
                }
            </div>

            <p className='font-semibold'>
                {companyName}
            </p>
        </div>
    );
}

CompanyCardsEcec.propTypes = {
    companyName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    backContent: PropTypes.string.isRequired,
    back2: PropTypes.string.isRequired,
    back3: PropTypes.string.isRequired,
    backLink: PropTypes.string.isRequired,
};

