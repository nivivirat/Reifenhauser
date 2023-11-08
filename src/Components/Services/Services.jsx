import React from 'react';
import './services.css';
import Serv from '../../assets/Images/Services/Service1.svg'
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
              <img className="fm" src ="https://s3-alpha-sig.figma.com/img/515a/f873/289efc601dd8cde8a47a1c3a6b380c6d?Expires=1699833600&Signature=VVjCQNUNKDBTg9ABd1~1RpYIg0QCATqPfk1Pgv34iirBAyVybC67a~yijrdwEHqJm-rwQYYtAOQuKRAe87N~c5aQ8Elh8LEl3kn~AZOOoKtfDgY8y3q3lYfdcV1b-gQK-HLkz~8bxQAvhtrTDwDpvBv4305AGBFgc2nr11k0lr6qDNoaIY4TIVdHSCSszQ-hnwEyHp5W0jdKm1WsBkIqLy023uT3A2tzczQDwa7j~58aw2A5Mm~lnaLz06DVHuX8I5HdhmNrq9YJl7BzO6jqE94ZsN9JGzdAaK1hyOT3rvNE6UiYV6v-4H8NzoCJf9e3bcoci3SsGZlBvQmCC1HxRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
            <img className="fm" src ="https://s3-alpha-sig.figma.com/img/5810/e02e/82795898e7fdb257f11aa9e8a6e6cd3c?Expires=1699833600&Signature=iwgGqxCtzVks6EN4fgLAAi11Iiqh~vffA8KY8xC5fGZA7ZzTQu6A9x74QC4UaWgJjQuY~ILqEBm~xDr05xk4gHkIrJSobBZIlP7K5OxrHCV9mfLfUk~iDSvUqYFtg7Fk8Ztz~PcRS-o84Zwsjs~41IO41jnZwNaeiwMkMGC-AYNssoYE2F5ZmtIwpgCCLN0GOGuWDCOJ8nnQkwwftw0vunhIQ8NEp36Ri2LWeMlN59mNcMpj40MfleKtOqOYTUPeSfRrkQ4vmjVh33GYiNTWclAXEx0Yo363WKfWhvLT0YNuNStaS6dCUzaMdPdGtmq5imRtq9IK83NsJI2ZRqk1hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image"></img>
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
              <img className="fm" src ="https://s3-alpha-sig.figma.com/img/a519/7692/6a536b4e622139bbc59a315ac38984a3?Expires=1699833600&Signature=J0bpA-u-6gr89Ry-hePzg-8NV3YKrHhclg~MGU-yNOoDhc3l9yK~CJaejBF0~7IEinLjN3vNZuQRVcWvz6QXnPlEWn5RnIbVhuLh~QZnkCxBFlrylXxi0CFz7xe3oeDNQsocgVz2dmYycIBGozfvVY7lDMArUtvc1UEKlMholtFxvDd57BVOHy2dW5pMfh7pHEv1tGSmm3eVwlURdp-VFppo9LVGvxq1Kx5wI-NWb02HwfnwIs3aO6s5XP58jBAJFXoNWwqFMMulrFP8JsZxJwLj~Qg3hZ5DaJ4OL69Jo9UmbUt7EQHRRZJc93dPhKdD9H~fb2pGPUZgn6TBYINT5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image"></img>
            </div>

            <br></br><div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
            <img className="fm" src ="https://s3-alpha-sig.figma.com/img/f457/45c4/ec167dba3e78cc55895cff59d2fcb248?Expires=1699833600&Signature=i0OpzDuChWS6NCZXya3RjTnkzF~SJ9O8N0IibC722z7h4BAgKaGAXiO7VJF78IEKe1FPIsZgafreyOk-ySdOtYMdfsrSx0osEPowQbYf6F5DCxSXuSXRkVfWsH1OxwhLMas4tc5oLx4l7NmVdEhNZ~yqy46WeyoPx83MrT0nmC-R-PCxCPawAtp7MG3iPNvow0W4jKG1FRZk846HaitWl4dsSzHanJwkWLxUZ5wkI270zRty1bvzsroxZe6c4dgS~D6~L668pznQ-~9J1piBFV8Q-JFK1XSOuyRpy~J0W1EEF6LoUnQ~MpyX8Cnw~pTucLXFaRsDdJxrz8F81oh6Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image"></img>
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
    <img className="fm" src ="https://s3-alpha-sig.figma.com/img/268b/a5f9/ce3b5a19b77c8cc1d751fa6146dc9d42?Expires=1699833600&Signature=ZlIHLTxTypBcPQq9a0NGMaBkCSfsXoKRpQooMPd6ANxnrYUTbDV02YzLNJSI-jiYbllAycHeOL4aFnEeRBma9g8iPRAedWmLsh3GHHc-e6-jxjskegJYV-yPu0g14dXpj9Fhv8f~bZCsAqmVT29gKGMRMzubIHsW5aRC6Ejb4nk4wgGZRe3pWyoD85JrM2NUxmusSd21T5Fs6yYSRH4LETsoBDsLc9xBDhlpwC7ggRGyY1vvdkHsiUrHd3WpIF~9eX8Ek6HfJGoqXLAH4Qgt7e-qYj7hBTi6aM5IJ3kreHzQs7RHAzq0oK293-7uJz8LWAD5tz1y38pxjhTk0yyhug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image"></img>
              <br></br><br></br><br></br>
    </div>
    </div>
  );
}