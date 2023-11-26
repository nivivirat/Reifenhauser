import React, { useState } from 'react';
import blesson from '../../assets/Images/Principals/CompanyLogoExec/blesson.svg';
import buss from '../../assets/Images/Principals/CompanyLogoExec/buss.svg';
import fimic from '../../assets/Images/Principals/CompanyLogoExec/fimic.svg';
import herbold from '../../assets/Images/Principals/CompanyLogoExec/herbold.svg';
import kurre from '../../assets/Images/Principals/CompanyLogoExec/kurre.svg';
import horauf from '../../assets/Images/Principals/CompanyLogoExec/horauf.svg';
import ngr from '../../assets/Images/Principals/CompanyLogoExec/ngr.svg';

import bobst from '../../assets/Images/Principals/ConvertingMachinary/bobst.svg';
import comexi from '../../assets/Images/Principals/ConvertingMachinary/comexi.svg';
import energy_sciences from '../../assets/Images/Principals/ConvertingMachinary/energy_sciences.svg';
import gic from '../../assets/Images/Principals/ConvertingMachinary/gic.svg';
import konica_minolta from '../../assets/Images/Principals/ConvertingMachinary/konica_minolta.svg';
import lang_laser from '../../assets/Images/Principals/ConvertingMachinary/lang_laser.svg';
import pelican_rotoflex from '../../assets/Images/Principals/ConvertingMachinary/pelican_rotoflex.svg';
import totani from '../../assets/Images/Principals/ConvertingMachinary/totani.svg';

import acigraf from '../../assets/Images/Principals/Ancillary/acigraf.svg';
import av_flexologic from '../../assets/Images/Principals/Ancillary/av_flexologic.svg';
import esko from '../../assets/Images/Principals/Ancillary/esko.svg';
import grafotronic from '../../assets/Images/Principals/Ancillary/grafotronic.svg';
import mero_spa from '../../assets/Images/Principals/Ancillary/mero_spa.svg';
import praxair from '../../assets/Images/Principals/Ancillary/praxair.svg';
import reprochem from '../../assets/Images/Principals/Ancillary/reprochem.svg';
import synaptik_lamination from '../../assets/Images/Principals/Ancillary/synaptik_lamination.svg';

import acelli from '../../assets/Images/Principals/SMC/acelli.svg'
import buhler from '../../assets/Images/Principals/SMC/buhler.svg'
import ims from '../../assets/Images/Principals/SMC/ims.svg'
import kroenert from '../../assets/Images/Principals/SMC/kroenert.svg'

export default function CompanyCardsEcec({ companyName, img, backContent, backLink }) {

    const [card, setCard] = useState(true);

    function handleClick()
    {
        setCard(!card);
    }

    const images = {
        blesson,
        buss,
        fimic,
        herbold,
        kurre,
        horauf,
        ngr,
        bobst,
        comexi,
        energy_sciences,
        gic,
        konica_minolta,
        lang_laser,
        pelican_rotoflex,
        totani,
        acigraf,
        av_flexologic,
        esko,
        grafotronic,
        mero_spa,
        praxair,
        reprochem,
        synaptik_lamination,
        acelli,
        buhler,
        ims,
        kroenert,
    };

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
                className='border border-[#b3b3b3] rounded-[20px] flex justify-center place-items-center content-center h-[110px]'
            >
                {card ?
                    <img src={images[img]} alt={companyName} className='w-24 h-auto' />
                    :
                    <div className='w-full flex-col gap-3 bg-[#e5eaea] border border-[#b3b3b3] rounded-[20px] flex justify-center place-items-center content-center h-[110px]'>
                        <p className='text-[#013A98] text-center text-[10px] px-4 font-medium'>{backContent}</p>
                        {formattedLink && <a href={formattedLink} target="_blank" rel="noopener noreferrer" className='text-black text-center text-[10px] underline px-4 font-medium'>{backLink}</a>}
                    </div>
                }
            </div>

            <p className='font-semibold'>
                {companyName}
            </p>
        </div>
    );
}
