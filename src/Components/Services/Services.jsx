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
    <div className="App mt-[40px]">
    <div className="flex flex-col hr rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col p-6">

                <h5 className="mb-2 text-5xl leading-tight q ll">
                Our Services
                </h5>
                <p className="text-xl  leading-tight w ll">
                At Reifenhauser India, we diligently focus on providing comprehensive support, catering to the evolving needs of the industry and ensuring operational excellence for our clients in the Indian subcontinent.
                </p>
              </div>
              

              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm" src ={Serv} alt="image"></img>
            </div>
            <hr className="ggg h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col  p-6">

                <h5 className="mb-2 text-5xl leading-tight q ll">
                Global Services
                </h5>
                <p className=" text-xl leading-tight  ll">
                We are committed to offering continuous 24x7 after-sales support, keeping our clients abreast of industry trends. Our dedicated team provides expert technical guidance for spare parts procurement, top-tier machinery refurbishments, necessary upgrades, and meticulous breakdown maintenance.
                </p>

              </div>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm" src ={Serv1} alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">
            <img className="fm" src ={Serv2} alt="image"></img>
             
              <div className="flex flex-col  p-6">



                <h5 className="mb-2 text-5xl ha leading-tight w q ll">
                Breakdown Maintenance
                </h5>
                <p className="text-xl ha leading-tight  ll">
                With breakdown maintenance services, Reifenhauser India Marketing Pvt. Ltd. offers services whenever a component of the machinery is broken, seems faulty or is not functioning properly. Once such an instance arises on the shop floor, our experienced engineers plan well in advance and arrive at the location promptly. Way ahead, our engineers replace the component and make sure that the machinery is running smoothly and at the optimal capacity. This, ultimately, reduces the maintenance costs by minimizing the instances of preventive maintenance
                </p>
                </div>
                </div>
                <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col p-6 ">

                <h5 className="mb-2 text-5xl q leading-tight ll">
                Installation & Commission
                </h5>
                <p className="mb-4 text-xl mr-20  leading-tight  ll">
                Our proactive approach extends to the installation of purchased machinery. Our engineers ensure seamless operation, considering environmental and site conditions. Meticulously handling machinery commissioning, they guarantee operational readiness, providing comprehensive training for competent machinery utilization. Simultaneously, we conduct scheduled preventive maintenance, addressing issues systematically to minimize unforeseen failures and ensure prolonged machinery lifespan. This approach aims at reducing backlogs, assuring uninterrupted operations, and maintaining process excellence.
                </p>
              </div><br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm" src ={Serv3} alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">
            <img className="fm" src ={Serv4} alt="image"></img>
              <br></br><br></br><br></br>
              <div className="flex flex-col">



                <h5 className="mb-2 text-5xl w ha leading-tight q ll">
                Preventive Maintenance Services
                </h5>
                <p className="mb-4 text-xl mr-20 ha leading-tight  ll">
                While we diligently offer preventive maintenance services, our experienced and trained schedule maintenance of machineries on a regular basis. This mitigates the risk of unprecedented failures and assures process excellence to a considerable extent. Preventive maintenance also increases the life span of the machineries when they undergo repairs or replacement of any component. As the maintenance is conducted periodically, we follow a systematic approach that is aimed at minimizing or reducing failures. Eventually, our engineers make sure that there are no backlogs regarding preventive maintenance.
                </p>
                </div>
             </div>
            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col  p-6">

                <h5 className="mb-2 text-5xl leading-tight q ll">
                AMC</h5><h5 className="text-xl ss leading-tight q ll"> (Annual Maintenance Contract)
                </h5>
                <p className="mb-4 text-xl mr-20 leading-tight ggh ll">
                We provide comprehensive repair and maintenance services, adhering to our commitments made as per contract terms. We prioritize maximum uptime, continually updating our technical expertise and planning for periodic maintenance to avoid unexpected machinery failures. Customer satisfaction is paramount, ensuring services exceed expectations.
                </p>
                
             
    </div>
    <img className="fm" src ={Serv5} alt="image"></img>
              <br></br><br></br><br></br>
    </div>
    </div>
  );
}
