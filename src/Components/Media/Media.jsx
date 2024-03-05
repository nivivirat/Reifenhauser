import React, { useState, useEffect } from 'react';
import { db, ref, get } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import rimg from '../../assets/Images/Media/R.svg';
import CardComponent from "./CardComponent";
import { Helmet } from 'react-helmet';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Media() {
  const [mediaData, setMediaData] = useState([]);
  const navigate = useNavigate();

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

  const generateRoute = (media) => {
    if (1) {
      const sanitizedHeading = media.heading.replace(/\s+/g, '-');
      return `/#/media/${media.id}/${sanitizedHeading}`;
    } else {
      console.error('Invalid media object:', media);
      return '/error';
    }
  };

  const handleCardClick = (item) => {
    if (item.routerlink) {
      // If routerlink is present, open link in new tab
      window.open(item.routerlink, '_blank');
    } else {
      // If routerlink is empty, navigate to the internal route in a new tab
      const route = generateRoute(item);
      window.open(route, '_blank');
    }
  };


  return (
    <div className="App w-screen flex flex-col">

      <Helmet>
        <title>Insights on Plastic Extrusion and Converting | Reifenhauser India</title>
        <link rel="canonical" href="https://reifenhauserindia.com/#/media" />
      </Helmet>

      <div className="flex-flex media1 mr-36 w-[90%] text-center">Media</div>
      <div className="md:text-[18px] text-[16px] flex-flex media2 w-[90%]">Glimpse through the round up of the latest trends in the packaging industry</div>
      <div className="text-3xl flex-flex media3 w-[90%]">Articles</div>
      <div className="md:text-[18px] text-[14px] flex-flex media4 mb-10 w-[90%]">Our platform serves as a hub for insights, trends, and stories who lead the company forward.</div>

      <div className='flex flex-col gap-10'>
        {mediaData.slice().reverse().map((item) => (
          <div className="flex flex-col rounded-lg md:flex-row mr-8 w-[90%] cursor-pointer" key={item.id}>
            <div className='w-full' onClick={() => handleCardClick(item)}>
              <Card className="w-[100%] flex flex-col rounded-lg md:flex-row mr-12 animated-box animate__animated animate__fadeInLeft animate__delay-0.2s">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 sm:w-2/5 md:w-2/5 lg:w-2/5 shrink-0 object-fit flex items-center"
                >
                  <img
                    src={item.img}
                    alt="card-image mediax"
                    className="h-full max-w-full -ml-1 mr-2  rounded-l-md object-fit rounded-t-lg object-cover md:rounded-none md:rounded-l-lg sm:max-w-full media6"
                  />
                </CardHeader>
                <CardBody>
                  <div className="flex flex-col justify-start p-2 s">
                    <Typography variant="h4" className="mb-8 media7 text-2xl flex flex-col">
                      {item.heading}
                    </Typography>
                    <Typography color="gray" className="mb-8 media17 mr-12 flex flex-col text-[18px]">
                      {item.description}
                    </Typography>
                  </div>
                  <Typography color="gray" className="mb-8 font-[600] media9 md:-ml-4 text-[18px] media17">
                    {item.date}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <div className="text-3xl flex-flex media3">Social Media</div>
        <div className="text-[18px] flex-flex media4 -mb-24 mr-8">Here’s what we've been up to recently.</div>
        <br></br>
        <CardComponent></CardComponent>
      </div>
    </div>
  );
};
