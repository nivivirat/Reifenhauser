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
    <div className="App">

    <div className="flex flex-col rounded-lg rounded-md bg-white md:max-w-full md:flex-row mm">
              <div className="flex flex-col p-6 q">

                <h5 className="mb-2 text-5xl leading-tight q ll">
                Our Services
                </h5>
                <p className="text-2xs  leading-tight w ll">
                As we deliver insights to companies regarding the current trends and the ever evolving needs of the industry, we strive to offer innovative solutions. While we work with an undaunted team spirit, we also serve organizations established in the Indian subcontinent. Our services assure process excellence to a considerable extent.
                </p>
              </div><br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm" src ={Serv} alt="image"></img>
            </div>
            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col q p-6">

                <h5 className="mb-2 text-5xl leading-tight q ll">
                Global Services
                </h5>
                <p className="mb-4 text-2xs mr-20 leading-tight  ll">
                Our commitment to absolute support makes sure that our clients receive 24 x 7 after-sales service and stays updated with the industry trends. Our team also offers technical guidance while ordering spare parts, top-tier machinery refurbishments, and machine upgrades when it’s a need on the shop floor.
                </p>
              </div><br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm" src ={Serv1} alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
            <img className="fm" src ={Serv2} alt="image"></img>
              <br></br><br></br><br></br>
              <div className="flex flex-col q p-6">



                <h5 className="mb-2 text-5xl w leading-tight ll">
                Breakdown Maintenance
                </h5>
                <p className="mb-4 text-2xs mr-20 leading-tight  ll">
                With breakdown maintenance services, Reifenhauser India Marketing Pvt. Ltd. offers services whenever a component of the machinery is broken, seems faulty or is not functioning properly. Once such an instance arises on the shop floor, our experienced engineers plan well in advance and arrive at the location promptly. Way ahead, our engineers replace the component and make sure that the machinery is running smoothly and at the optimal capacity. This, ultimately, reduces the maintenance costs by minimizing the instances of preventive maintenance
                </p>
                </div>
                </div>
                <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col p-6">

                <h5 className="mb-2 text-5xl q leading-tight ll">
                Installation & Commission
                </h5>
                <p className="mb-4 text-2xs mr-20  leading-tight  ll">
                When your company makes a purchase, our engineers are proactive in installing the machinery. Moving forward, the engineers not only install the machinery but also ensure that it is operating smoothly after considering the environment and the conditions of the site. Commissioning of machinery is yet another service our engineers offer meticulously. Once the engineer installs the machine, he always spends ample time for its operational readiness. Even after taking the machinery through this phase, we spend some time imparting knowledge on using the machinery competently.
                </p>
              </div><br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="fm" src ={Serv3} alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
            <img className="fm" src ={Serv4} alt="image"></img>
              <br></br><br></br><br></br>
              <div className="flex flex-col q p-6">



                <h5 className="mb-2 text-5xl w leading-tight ll">
                Preventive Maintenance Services
                </h5>
                <p className="mb-4 text-2xs mr-20 leading-tight  ll">
                While we diligently offer preventive maintenance services, our experienced and trained schedule maintenance of machineries on a regular basis. This mitigates the risk of unprecedented failures and assures process excellence to a considerable extent. Preventive maintenance also increases the life span of the machineries when they undergo repairs or replacement of any component. As the maintenance is conducted periodically, we follow a systematic approach that is aimed at minimizing or reducing failures. Eventually, our engineers make sure that there are no backlogs regarding preventive maintenance.
                </p>
                </div>
             </div>
            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col q p-6">

                <h5 className="mb-2 text-5xl leading-tight ll">
                AMC</h5><h5 className="mb-2 text-xl leading-tight ll"> (Annual Maintenance Contract)
                </h5>
                <p className="mb-4 text-2xs mr-20 leading-tight  ll">
                When your company is concerned with repairs as well as maintenance of machineries, our experienced engineers are agile at every instance. Our team never violates the terms of the contract and fails to offer services as per the agreement. We always assure you with maximum uptime as the team keeps itself updated with new technical developments. Above all, we abide by the terms of the contract and plan all types of maintenance even when unexpected failures of machineries arise. Our satisfaction lies only when the customer is more than happy with the services our engineers offer.
                </p>
                
             
    </div>
    <img className="fm" src ={Serv5} alt="image"></img>
              <br></br><br></br><br></br>
    </div>
    </div>
  );
}