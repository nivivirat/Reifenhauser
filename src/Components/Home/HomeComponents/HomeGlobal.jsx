import React, { useState } from 'react';
import globe from '../../../assets/Images/Home/global/globe.svg';
import circle from '../../../assets/Images/Home/global/circle.svg';


export default function HomeGlobal() {
    const [selectedLocation, setSelectedLocation] = useState("Mumbai");

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    return (
       
        <div className='flex flex-col font-medium justify-center place-items-center md:gap-2 animate__animated animate__fadeIn animate__delay-6s'>
            <p className='text-primary text-[26px]'>Presence</p>
            <p className='lg:text-4xl md:text-2xl text-xl p-3 text-center tracking-wider'>
                Ingraining technology in and around India since years
            </p>
           <div className='md:p-10 p-2 px-4 pb-14 md:mb-12 mb-8 w-full h-full  flex justify-center'>
                <div className='md:w-[70%] w-[450px] h-[500px] relative'>

                    {/* Sri Lanka */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[17%] md:left-[46%] bottom-[20%] left-[40%] ${
                            selectedLocation === 'Sri Lanka' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Sri Lanka')}
                        onMouseEnter={() => handleLocationClick('Sri Lanka')}
                    >
                        Sri Lanka
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[13%] md:left-[47%] bottom-[15%] left-[42%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Chennai */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[30%] md:left-[45%] bottom-[31%] left-[38%] ${
                            selectedLocation === 'Chennai' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Chennai')}
                        onMouseEnter={() => handleLocationClick('Chennai')}
                    >
                        Chennai
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[27%] md:left-[45%] bottom-[28%] left-[37%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Bengaluru */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[33%] md:left-[36%] bottom-[35%] left-[14%] ${
                            selectedLocation === 'Bengaluru' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Bengaluru')}
                        onMouseEnter={() => handleLocationClick('Bengaluru')}
                    >
                        Bengaluru
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[29%] md:left-[41%] bottom-[31%] left-[25%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Hyderabad */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[40%] md:left-[44%] bottom-[42%] left-[34%] ${
                            selectedLocation === 'Hyderabad' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Hyderabad')}
                        onMouseEnter={() => handleLocationClick('Hyderabad')}
                    >
                        Hyderabad
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[37%] md:left-[44%] bottom-[39%] left-[36%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Pune */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[44%] md:left-[40%] bottom-[44%] left-[24%] ${
                            selectedLocation === 'Pune' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Pune')}
                        onMouseEnter={() => handleLocationClick('Pune')}
                    >
                        Pune
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[41%] md:left-[40%] bottom-[41%] left-[24%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Mumbai  */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[45%] md:left-[34%] bottom-[46%] left-[8%] ${
                            selectedLocation === 'Mumbai' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Mumbai')}
                        onMouseEnter={() => handleLocationClick('Mumbai')}
                    >
                        Mumbai
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[42%] md:left-[38%] bottom-[43%] left-[19%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Ahmedabad  */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[53%] md:left-[30%] bottom-[55%] left-[1%] ${
                            selectedLocation === 'Ahmedabad' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:md:text-[10px] text-[8px] px-2 py-0.5 rounded-2xl md:pb-0`}
                        onClick={() => handleLocationClick('Ahmedabad')}
                        onMouseEnter={() => handleLocationClick('Ahmedabad')}
                    >
                        Ahmedabad
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[50%] md:left-[36%] bottom-[52%] left-[12%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Kolkata  */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[47%] md:left-[52%] bottom-[47%] left-[58%] ${
                            selectedLocation === 'Kolkata' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Kolkata')}
                        onMouseEnter={() => handleLocationClick('Kolkata')}
                    >
                        Kolkata
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[52%] md:left-[54%] bottom-[51%] left-[62%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Bangladesh  */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[58%] md:left-[57%] bottom-[57%] left-[68%] ${
                            selectedLocation === 'Bangladesh' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:md:text-[10px] text-[8px] px-2 py-0.5 rounded-2xl`}
                        onClick={() => handleLocationClick('Bangladesh')}
                        onMouseEnter={() => handleLocationClick('Bangladesh')}
                    >
                        Bangladesh
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[55%] md:left-[57%] bottom-[54%] left-[69%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Delhi */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[73%] md:left-[39%] bottom-[73%] left-[20%] ${
                            selectedLocation === 'Delhi' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Delhi')}
                        onMouseEnter={() => handleLocationClick('Delhi')}
                    >
                        Delhi
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[70%] md:left-[42%] bottom-[70%] left-[27%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Jammu */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[82%] md:left-[40%] bottom-[81%] left-[22%] ${
                            selectedLocation === 'Jammu' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Jammu')}
                        onMouseEnter={() => handleLocationClick('Jammu')}
                    >
                        Jammu
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[79%] md:left-[41.5%] bottom-[78%] left-[26.5%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Nepal */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[71%] md:left-[46.5%] bottom-[70%] left-[40%] ${
                            selectedLocation === 'Nepal' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Nepal')}
                        onMouseEnter={() => handleLocationClick('Nepal')}
                    >
                        Nepal
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[66%] md:left-[48%] bottom-[65.5%] left-[44.5%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>


                    {/* Kanpur */}
                    <p
                        className={`absolute cursor-pointer md:bottom-[56%] md:left-[47%] bottom-[55%] left-[43%] ${
                            selectedLocation === 'Kanpur' ? 'bg-white text-primary' : 'bg-[#295db1] text-white'
                        } md:text-[10px] text-[8px] px-2 py-0.5 md:pb-0 rounded-2xl`}
                        onClick={() => handleLocationClick('Kanpur')}
                        onMouseEnter={() => handleLocationClick('Kanpur')}
                    >
                        Kanpur
                    </p>
                    <div className='absolute cursor-pointer md:bottom-[60%] md:left-[47.5%] bottom-[59%] left-[43.5%]'>
                        <img src={circle} alt='Circle'></img>
                    </div>



                    <img
                        src={globe}
                        className='h-full w-full md:h-full md:w-full object-cover object-center rounded-3xl bg-primary'
                        alt='Globe'
                    ></img>
                </div>
          
                 </div>
        </div>
    );
    
}
