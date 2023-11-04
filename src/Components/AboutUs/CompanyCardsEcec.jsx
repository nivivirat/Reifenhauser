import React from 'react';
import blesson from '../../assets/Images/AboutUs/CompanyLogoExec/blesson.svg';
import buss from '../../assets/Images/AboutUs/CompanyLogoExec/buss.svg';
import fimic from '../../assets/Images/AboutUs/CompanyLogoExec/fimic.svg';
import herbold from '../../assets/Images/AboutUs/CompanyLogoExec/herbold.svg';
import kurre from '../../assets/Images/AboutUs/CompanyLogoExec/kurre.svg';
import horauf from '../../assets/Images/AboutUs/CompanyLogoExec/horauf.svg';
import ngr from '../../assets/Images/AboutUs/CompanyLogoExec/ngr.svg';

import bobst from '../../assets/Images/AboutUs/ConvertingMachinary/bobst.svg';
import comexi from '../../assets/Images/AboutUs/ConvertingMachinary/comexi.svg';
import energy_sciences from '../../assets/Images/AboutUs/ConvertingMachinary/energy_sciences.svg';
import gic from '../../assets/Images/AboutUs/ConvertingMachinary/gic.svg';
import konica_minolta from '../../assets/Images/AboutUs/ConvertingMachinary/konica_minolta.svg';
import lang_laser from '../../assets/Images/AboutUs/ConvertingMachinary/lang_laser.svg';
import pelican_rotoflex from '../../assets/Images/AboutUs/ConvertingMachinary/pelican_rotoflex.svg';
import totani from '../../assets/Images/AboutUs/ConvertingMachinary/totani.svg';

import acigraf from '../../assets/Images/AboutUs/Ancillary/acigraf.svg';
import av_flexologic from '../../assets/Images/AboutUs/Ancillary/av_flexologic.svg';
import esko from '../../assets/Images/AboutUs/Ancillary/esko.svg';
import grafotronic from '../../assets/Images/AboutUs/Ancillary/grafotronic.svg';
import mero_spa from '../../assets/Images/AboutUs/Ancillary/mero_spa.svg';
import praxair from '../../assets/Images/AboutUs/Ancillary/praxair.svg';
import reprochem from '../../assets/Images/AboutUs/Ancillary/reprochem.svg';
import synaptik_lamination from '../../assets/Images/AboutUs/Ancillary/synaptik_lamination.svg';

import acelli from '../../assets/Images/AboutUs/SMC/acelli.svg'
import buhler from '../../assets/Images/AboutUs/SMC/buhler.svg'
import ims from '../../assets/Images/AboutUs/SMC/ims.svg'
import kroenert from '../../assets/Images/AboutUs/SMC/kroenert.svg'

export default function CompanyCardsEcec({ companyName, img }) {
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

    return (
        <div className='lg:w-[220px] w-[90%] flex flex-col gap-3'>
            <div className='border border-[#b3b3b3] rounded-[20px] flex justify-center place-items-center content-center h-[110px]'>
                <img src={images[img]} alt={companyName} className='w-24 h-auto' />
            </div>
            <p className='font-semibold'>
                {companyName}
            </p>
        </div>
    );
}
