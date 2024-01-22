// Media.js

import './Media.css';
import React, { useState, useEffect } from 'react';
import { db, ref, get } from '../../firebase';
import rimg from '../../assets/Images/Media/R.svg';
import CardComponent from "./CardComponent";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Media() {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaSnapshot = await get(ref(db, 'media'));
        const mediaData = mediaSnapshot.val();

        if (mediaData) {
          const dataArray = Object.entries(mediaData).map(([uid, { img, heading, description, routerlink, date }]) => ({
            id: uid,
            img,
            heading,
            description,
            routerlink,
            date,
          }));

          setMediaData(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="flex-flex media1">Media</div>
      <div className="text-[18px] flex-flex media2">Glimpse through the round up of the latest trends in the packaging industry</div>
      <div className="text-3xl flex-flex media3">News & Updates</div>
      <div className="text-[18px] flex-flex media4">Our platform serves as a hub for insights, trends, and stories who lead the company forward.</div>
     

      {mediaData.map((item) => (
        <div className="flex flex-col rounded-lg md:max-w-full md:flex-row media5 mr--9" key={item.id}>
          <a href={`http://${item.routerlink}`}>
            <Card className="flex flex-col rounded-lg md:max-w-full md:flex-row media5 animated-box animate__animated animate__fadeInLeft animate__delay-0.2s">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-2/5 md:w-2/5 lg:w-2/5 shrink-0  object-fit flex items-center"
              >
                <img
                  src={item.img}
                  alt="card-image mediax"
                  className="h-full max-w-full rounded-l-md object-fit rounded-t-lg object-cover md:rounded-none md:rounded-l-lg sm:max-w-full media6"
                />
              </CardHeader>
              <CardBody>
                <div className="flex flex-col justify-start p-2 s">
                  <Typography variant="h4" className="mb-8 media7 text-2xl">
                    {item.heading}
                  </Typography>
                  <Typography color="gray" className="mb-8 media17 flex flex-col text-[18px]">
                    {item.description}
                  </Typography>
                </div>
                <Typography color="gray" className="mb-8 font-[600] media9 text-[18px] media17">
                  {item.date}
                </Typography>
              </CardBody>
            </Card>
          </a>
        </div>
      ))}

      <div className="">
        <div className="text-3xl flex-flex media3">Let’s Connect</div>
        <div className="text-[18px] flex-flex media4 -mb-24">Here’s what we've been up to recently.</div>
        <br></br>
        <CardComponent></CardComponent>
      </div>
    </div>
  );
};
