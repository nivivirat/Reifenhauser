import React from 'react';
import './services.css';
import Serv from '../../assets/Images/Services/Service1.svg';
import Serv2 from '../../assets/Images/Services/Frame 21509 (1).svg';
import Serv3 from '../../assets/Images/Services/Frame 21509 (2).svg';
import Serv1 from '../../assets/Images/Services/Frame 21509.svg';
import Serv4 from '../../assets/Images/Services/Frame 21509 (3).svg';
import Serv5 from '../../assets/Images/Services/Frame 21509 (4).svg';

export default function Services() {
  return (
    <div className="App mt-20 ">
     <div className="lg:hidden flex-row flex gap-1 ml-3 mt-3">
                    <p className="text-[#999999]">Home-</p>
                    <p className="text-primary font-semibold">Services</p>
                </div>
                <div className="tr">
    <div className="flex flex-col hr rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col p-6">
<br></br><br></br>
                <h5 className="mb-2 text-5xl text-4xl leading-tight q ll animated-box animate__animated animate__fadeInLeft">
                Our Services
                </h5>
                <p className="text-[18px]  leading-tight w ll animated-box animate__animated animate__fadeInLeft">
                 At RIMPL, our commitment extends to offering comprehensive on-site technical support, aligning with the industry's dynamic requirements and ensuring operational excellence for our clients.
                </p>
              </div>
              

              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm animate__animated animate__fadeInRight" src ={Serv} alt="image"></img>
            </div>
            <hr className="ggg h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col  p-6 ">
<br></br> <br></br><br></br>
                <h5 className="mb-2 lg:text-5xl text-4xl leading-tight q ll ">
                Global Services
                </h5>
                <p className=" text-[18px] md:2xs leading-tight  ll">
                In our commitment to excellence, we assure seamless 24x7 after-sales support. Our dedicated team offers expert technical guidance for spare parts procurement, top-tier machinery refurbishments, essential upgrades, and meticulous breakdown maintenance, ensuring uninterrupted operational efficiency for our clients.
                </p>

              </div>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm  animated-box animate__animated animate__fadeInRight animate__delay-1s" src ={Serv1} alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">
            
             
              <div className="flex flex-col  p-6 ">



                <h5 className="mb-2 lg:text-5xl text-4xl ha leading-tight w q ll nn">
                Breakdown Maintenance
                </h5>
                <p className="text-[18px] ha leading-tight  ll nn">
                With breakdown maintenance services, Reifenhauser India Marketing Pvt. Ltd. offers services whenever a component of the machinery is broken, seems faulty or is not functioning properly. Once such an instance arises on the shop floor, our experienced engineers plan well in advance and arrive at the location promptly. Way ahead, our engineers replace the component and make sure that the machinery is running smoothly and at the optimal capacity. This, ultimately, reduces the maintenance costs by minimizing the instances of preventive maintenance
                </p>
                </div>
                <br></br><br></br>

                <img className="fm hj bbg  animated-box animate__animated animate__fadeInLeft animate__delay-2s" src ={Serv3} alt="image"></img>
                </div>
                <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col p-6 ">
<br></br><br></br>
                <h5 className="mb-2 lg:text-5xl text-4xl q leading-tight ll">
                Installation, Commission and Preventive Maintenance
                </h5>
                <p className="mb-4 text-[18px] mr-20  leading-tight  ll">Our proactive approach extends to the installation of purchased machinery. Our engineers ensure seamless operation, considering environmental and site conditions. Meticulously handling machinery commissioning, they guarantee operational readiness, providing comprehensive training for competent machinery utilization. Simultaneously, we conduct scheduled preventive maintenance, addressing issues systematically to minimize unforeseen failures and ensure prolonged machinery lifespan. This approach aims at reducing backlogs, assuring uninterrupted operations, and maintaining process excellence.Our proactive approach extends to the installation of purchased machinery. Our engineers ensure seamless operation, considering environmental and site conditions.
                </p>
              </div><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm  animate__animated animate__fadeInRight animate__delay-3s" src ={Serv4} alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm  ">
           
              <div className="flex flex-col">

<br></br><br></br>

                <h5 className="mb-2 lg:text-5xl text-4xl w ha leading-tight q ll nn">
                Annual Maintenance Contract (AMC)
                </h5>
                <p className="mb-4 text-[18px] mr-20 ha leading-tight  ll nn">
                We provide comprehensive repair and maintenance services, adhering to our commitments made as per contract terms. We prioritize maximum uptime, continually updating our technical expertise and planning for periodic maintenance to avoid unexpected machinery failures. Customer satisfaction is paramount, ensuring services exceed expectations.
                </p>
                </div>
                <br></br><br></br><br></br>
                <img className="fm hj bbg animated-box animate__animated animate__fadeInLeft animate__delay-4s" src ={Serv5} alt="image"></img>
              

             </div>
            {/* <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm ">
              <div className="flex flex-col  p-6">

                <h5 className="mb-2 lg:text-5xl text-4xl leading-tight q ff cfg ll">
                AMC</h5><h5 className="text-[18px] ss leading-tight q ll bnn"> (Annual Maintenance Contract)
                </h5>
                <p className="mb-4 text-[18px] mr-20 leading-tight ggh hui ll">
                We provide comprehensive repair and maintenance services, adhering to our commitments made as per contract terms. We prioritize maximum uptime, continually updating our technical expertise and planning for periodic maintenance to avoid unexpected machinery failures. Customer satisfaction is paramount, ensuring services exceed expectations.
                </p>
                
             
    </div>
    <img className="fm animated-box animate__animated animate__fadeInRight  animate__delay-5s" src ={Serv5} alt="image"></img>
              <br></br><br></br><br></br>
    </div> */}
    </div>
    </div>
  );
}
