import './Media.css';
import React from 'react';
import rimg from '../../assets/Images/Media/R.svg'
import CardComponent from "./CardComponent";
import img from '../../assets/Images/Media/Image@2x.svg';
import img1 from '../../assets/Images/Media/Image.svg';
import img2 from'../../assets/Images/Media/Rectangle 6275.svg';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Media() {
  return (
    <div className="App">
       {/* <div className="lg:hidden flex-row flex gap-1 ml-3 mt-3">
                    <p className="text-[#999999]">Home-</p>
                    <p className="text-primary font-semibold">Media</p>
                </div> */}
      <div className="flex-flex media1">Media</div>
      <div className="text-[18px] flex-flex media2">Glimpse through the round up of the latest  trends in the packaging industry</div>
      <div className="text-3xl flex-flex media3 ">News & Updates</div>
      <div className="text-[18px] flex-flex media4 ">Our platform serves as a hub for insights, trends, and stories who lead the company forward.</div>
      <img className="media56" src={rimg} alt="image"></img>
      <div className="flex flex-col rounded-lg   md:max-w-full md:flex-row media5 mr--9">
      <a href='/blogs'>  <Card className="flex flex-col rounded-lg   md:max-w-full md:flex-row media5 animated-box animate__animated animate__fadeInLeft animate__delay-0.2s">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 sm:w-3/5 md:w-2/5 lg:w-1/5 shrink-0 rounded-r-none"
          >
            <img
              src={img}
              alt="card-image mediax"
             
              className="h-full w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg sm:max-w-full media6"
            />

          </CardHeader>
          <CardBody>
       
            <div className="flex flex-col justify-start p-2 s">
            {/* <Typography variant="h4" className="sm: mb-8 text-2xl w-32 h-8 text-[#1565D8] bg-[#E0E7F2] hhgg ">
                FEATURED
              </Typography> */}
              <Typography variant="h4" className="mb-8 media7 text-2xl">
              Sustainable and tricky materials work well with CI flexo
               
              </Typography>
              
              <Typography color="gray" className="mb-8 media17 flex flex-col text-[18px]">
                Manish Mehta, managing director, Reifenhäuser India talks about how gravure and CI flexo are competing in terms of space, speed, cost and more. He highlights the benefits of CI flexo trade shops which are scaling up the industry
              </Typography>
            </div>

            <Typography color="gray" className="mb-8 font-normal media9 text-[18px] media17">
              31 July 2023
            </Typography>
           
          </CardBody>
        </Card> </a>
      </div>
   


      <div className="flex flex-col rounded-lg h-96  md:max-w-full md:flex-row media5 hhg animated-box animate__animated animate__fadeInRight animate__delay-2s">
      <a href='/blogs'>
        <Card className="flex flex-col rounded-lg   md:max-w-full md:flex-row media5">
        
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 sm:w-3/5 md:w-2/5 lg:w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={img1}
              alt="card-image mediax"
              className="h-full w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg sm:max-w-full media6"
            />
          </CardHeader>
          <CardBody>
          
            <Typography variant="h4" className="mb-2 media7 text-2xl">
             Reifenhäuser India participates with principals at PlastIndia 2023
              Reifenhäuser India participates with principals at PlastIndia 2023
            </Typography>


            <Typography color="gray" className="mb-8 font-normal media10 text-2xs">
              31 July 2023
            </Typography>
            <img
              src={img2}
              alt="card-image mediax"
              height={96}
              width={96}
              className=" object-cover media11"
            />
            <Typography variant="h4" className="mb-2 media12 text-xs mml">
              Packaging Southasia
            </Typography>

           

          </CardBody>
          
        </Card></a>
      </div>
      <div className="text-3xl flex-flex media3">Let’s Connect</div>
      <div className="text-[18px] flex-flex media4 -mb-24">Here’s what we've been up to recently.</div>
      <br></br>
      <CardComponent>
      </CardComponent>

    </div>

  );
};
