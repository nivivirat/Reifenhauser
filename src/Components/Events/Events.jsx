import React, { useEffect, useState } from 'react';
import './Events.css';
import eventsData3 from './eventsData3.json';
import evim from '../../assets/Images/Events/event1.svg';
import even11 from '../../assets/Images/Events/Rectangle 6264 (2).svg';
import even12 from '../../assets/Images/Events/Rectangle 6265 (5).svg';
import vg from '../../assets/Images/Events/b.svg';
import yu from '../../assets/Images/Events/a.svg';
import even from "./Vector (1).svg";
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

import aq from "./abg.svg";
import Slider from "./slider";

// firebase
import { getDatabase, ref, onValue } from 'firebase/database';
import { Icon } from '@iconify/react';

const Events = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [archiveEvents, setArchiveEvents] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const eventsRef = ref(database, 'events');

    onValue(eventsRef, (snapshot) => {
      if (snapshot.exists()) {
        const eventData = snapshot.val();
        const currentEventsObject = {};
        const archiveEventsObject = {};

        for (const year in eventData) {
          if (Object.hasOwnProperty.call(eventData, year)) {
            const eventsOfYear = eventData[year];
            const currentEventsArray = [];
            const archiveEventsArray = [];

            for (const eventKey in eventsOfYear) {
              if (Object.hasOwnProperty.call(eventsOfYear, eventKey)) {
                const event = eventsOfYear[eventKey];
                const eventDetails = {
                  year,
                  eventKey,
                  ...event,
                };

                if (event.completed === false) {
                  currentEventsArray.push(eventDetails);
                } else {
                  archiveEventsArray.push(eventDetails);
                }
              }
            }

            currentEventsObject[year] = currentEventsArray;
            archiveEventsObject[year] = archiveEventsArray;
          }
        }

        setCurrentEvents(currentEventsObject);
        setArchiveEvents(archiveEventsObject);
      }
    });
  }, []);

  useEffect(() => {
    console.log(currentEvents);
    console.log(archiveEvents);
  }, [currentEvents, archiveEvents])

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-50px', // Margin to prevent hover box from being cut off by the footer

  };

  const sectionStyle = {
    margin: '1% auto',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    width: '95%',
    height: '35%',
    // flexDirection: 'row',
    justifyContent: 'space-between',
  };
  const sectionStyle2 = {
    margin: '1% auto',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    width: '95%',
    height: '35%',
    // flexDirection: 'row',
    justifyContent: 'space-between',

  };
  const breakpoints = {
    mobile: '(max-width: 900px)',
    desktop: '(min-width: 901px)',
  };

  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    marginLeft: '2%',
    flexDirection: isMobile ? 'row' : 'row',
  };

  const cardStyle = {
    flex: 1,
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    height: '300px', // Fixed height for each card container
    position: 'relative',
    overflow: 'hidden',
    width: '250px', // Change this value to the desired width
  };


  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: '#013A98',
    fontWeight: 'bold',
    marginTop: '-1%',
    textAlign: 'left',
    width: '25%',
  };


  const columnStyle3 = {
    display: 'flex',
    flexDirection: 'column',
    color: '#013A98',
    fontWeight: 'bold',
    width: '95%',
    textAlign: 'left',


  };

  const imageContainerStyle = {
    textAlign: 'center',
    position: 'relative',
    height: '30vh',
    margin: '1%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    position: 'relative',
  };

  const textInsideImage = {
    marginLeft: '3px%',
    position: 'absolute',
    top: '18%',
    left: '6%',
    // transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    zIndex: '2',
  };

  const hoverInfoStyle = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '20px',
    backgroundColor: 'rgba(1, 58, 152, 0.12)',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'none',
    width: '300px',
    height: '300px',
    zIndex: '5',
  };
  const hoverInfoStyle2 = {
    position: 'absolute',
    top: '0%',
    left: '50%',
    font: '3px',
    transform: 'translateX(-50%)',
    padding: '20px',
    backgroundColor: '#013A98',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'none',
    width: '100%',
    height: '100%',
    zIndex: '5',
    color: 'white',
  };

  const triangleStyle = {
    position: 'absolute',
    top: '-10px',
    left: '50%',
    backgroundColor: 'rgba(1, 58, 152, 0.12)',
    marginLeft: '-10px', // half of the triangle's width
    width: '0',
    height: '0',
    borderTop: '10px solid #fff', // height of the triangle
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
  };

  const handleUpperCardHover = (event) => {
    const hoverInfo = event.currentTarget.querySelector('.hover-info');
    if (!hoverInfo) return;

    const image = hoverInfo.querySelector('img');
    if (!image || !image.complete || image.naturalWidth === 0) return;

    // Display the hover box only if there is both text and a complete image
    hoverInfo.style.display = 'block';

    const triangle = hoverInfo.querySelector('.triangle');
    if (triangle) {
      triangle.style.display = 'block';
    }
  };



  const handleUpperCardLeave = (event) => {
    const hoverInfo = event.currentTarget.querySelector('.hover-info');
    hoverInfo.style.display = 'none';

    const triangle = event.currentTarget.querySelector('.triangle');
    triangle.style.display = 'none';
  };

  const boxContentStyle = {
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const handleLowerCardHover = (event) => {
    const hoverInfo = event.currentTarget.querySelector('.hover-info');
    const image = hoverInfo.querySelector('img');

    if (image && image.complete && image.naturalWidth !== 0) {
      // Display the hover box only if there is a complete image
      hoverInfo.style.display = 'block';
      hoverInfo.style.zIndex = '999';

      // Position the hover box below the card
      const cardRect = event.currentTarget.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      hoverInfo.style.top = `${cardRect.bottom + scrollTop - 10}px`; // 10px buffer

      // Add animation for the box content
      const boxContent = event.currentTarget.querySelector('.box-content');
      boxContent.style.opacity = 1;
    }
  };

  const handleLowerCardLeave = (event) => {
    const hoverInfo = event.currentTarget.querySelector('.hover-info');

    // Hide the hover box and reset the z-index
    hoverInfo.style.display = 'none';
    hoverInfo.style.zIndex = '2'; // Adjust the z-index based on your layout

    // Reset the opacity for the box content
    const boxContent = event.currentTarget.querySelector('.box-content');
    boxContent.style.opacity = 0;
  };
  const mediaQueryStyle = {
    '@media (max-width: 900px)': {
      '.lk': {
        flexDirection: 'column',
      },
    },
  };
  const issMobile = window.innerWidth < 1310;


  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function ImageSlider({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className='max-h-60 flex flex-row overflow-x-auto no-scrollbar'>
        <div>
          <img
            src={images[currentImageIndex]}
            alt={`Archived Image ${currentImageIndex}`}
            className="w-96 h-auto object-contain mt-1"
            onClick={() => handleNextImage()}
          />
          {/* Add navigation arrows */}
          <div className='absolute text-[20px] top-[45%] mt-2 text-white flex place-items-center justify-center animate-pulse' onClick={() => handlePrevImage()}>
            {/* Your Icon component for previous image */}
            <Icon icon="ic:round-less-than" />
          </div>
          <div className='absolute top-[45%] text-[20px] right-3 mt-2 text-white flex place-items-center justify-center animate-pulse' onClick={() => handleNextImage()}>
            {/* Your Icon component for next image */}
            <Icon icon="ic:round-greater-than" />
          </div>
        </div>
      </div>
    );
  }

  function ImageSlider1({ images }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className='max-h-60 flex flex-row overflow-x-auto no-scrollbar'>

        <Helmet>
          <title>Exploring Industry Advancements | Events at Reifenhauser India</title>
          <meta name="description" content="Stay updated on industry advancements through events at Reifenhauser India. Explore insightful gatherings, where innovation meets expertise" />
          <link rel="canonical" href="https://reifenhauserindia.com/#/events" />
        </Helmet>

        <div>
          <img
            src={images[currentImageIndex].img} // Use the URL from the current image object
            alt={`Archived Image ${currentImageIndex}`}
            className="w-96 h-auto object-contain mt-1 aspect-w-1 aspect-h-1"
          />

          {/* Add navigation arrows */}
          <div className='absolute p-3 cursor-pointer text-[20px] top-[45%] mt-2 text-white flex place-items-center justify-center animate-pulse' onClick={handlePrevImage}>
            <Icon icon="ic:round-less-than" />
          </div>
          <div className='absolute p-3 cursor-pointer top-[45%] text-[20px] right-3 mt-2 text-white flex place-items-center justify-center animate-pulse' onClick={handleNextImage}>
            <Icon icon="ic:round-greater-than" />
          </div>
        </div>
      </div>
    );
  }


  return (
    <>

      <div style={containerStyle}>
        <div style={imageContainerStyle} className="image-container  animate__animated animate__fadeIn animate__delay-0s">
          <img
            src={yu}
            alt="Rendezvous Image"
            style={{
              ...imageStyle,
              objectFit: 'cover',
              objectPosition: 'center 75%',
            }}
            className="event1"
          />
          <div className="event9" style={textInsideImage}>
            <p>Join Us</p>
          </div>
        </div>

        {Object.keys(currentEvents)
          .sort((a, b) => currentEvents[a].order - currentEvents[b].order)
          .map((year) => (
            // Only render the year section if there are events in currentEvents for that year
            currentEvents[year].length > 0 && (
              <div key={year}>
                <div className={`event3 text-2xl`}>{year}</div>
                {currentEvents[year]
                  .sort((a, b) => a.order - b.order)
                  .map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      style={sectionStyle2}
                      className="section-container text-2xs event100 group ety"
                      onMouseEnter={handleLowerCardHover}
                      onMouseLeave={handleLowerCardLeave}
                    >
                      <img className="eventi" src={evim} alt="Event Image" />
                      <div style={columnStyle}>
                        <h2 className="ety qasd mt-3">Event Name</h2>
                        <p className="ety">{event.eventName}</p>
                      </div>
                      <div style={columnStyle}>
                        <h2 className="ety qasd mt-3">Location</h2>
                        <p className="ety">{event.location}</p>
                      </div>
                      <div style={columnStyle}>
                        <h2 className="ety qasd mt-3">Date</h2>
                        <p className="ety">{event.date}</p>
                      </div>

                      <div style={hoverInfoStyle} className="hover-info">
                        <div style={triangleStyle} className="triangle"></div>
                        <img src={event.img} alt="Bottom Card Image jkg" className="w-[270px] h-[250px] object-cover object-center mt-1" />
                        {/* <img src={vg} alt="Bottom Card Image jkg" className="w-96 h-108 mt-1" /> */}
                      </div>
                    </div>
                  ))}
              </div>
            )
          ))}
        <br></br>
        <div className="event3 text-2xl">Archives of past events</div>



        <div style={{ ...cardContainerStyle, flexDirection: window.innerWidth <= 900 ? 'row' : 'row' }} className="lk overflow-x-auto">
          {window.innerWidth <= 900 ? (
            // If the window width is less than or equal to 900px, use the original code without the Slider
            Object.keys(archiveEvents)
              .sort((a, b) => archiveEvents[a].order - archiveEvents[b].order)
              .map((year) => (
                archiveEvents[year].length > 0 && (
                  <div key={year} className='flex flex-col'>
                    <div className='flex flex-row' style={{ overflowX: issMobile ? 'scroll' : 'scroll' }}>
                      {archiveEvents[year]
                        .sort((a, b) => a.order - b.order)
                        .map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            style={cardStyle}
                            className="event45 w-[20%] relative group lm gggg flex flex-col animate__animated animate__fadeIn animate__delay-1s"
                            onMouseEnter={handleUpperCardHover}
                            onMouseLeave={handleUpperCardLeave}
                          >
                            <div style={columnStyle3} className="event41 lm">
                              <h2 className="lm qasd">Event Name</h2>
                              <p className="lm">{event.eventName}</p>
                            </div>
                            <div style={columnStyle3} className="event411 lm">
                              <h2 className="lm mt-4 qasd">Location</h2>
                              <p className="lm">{event.location}</p>
                            </div>
                            <br></br><br></br>
                            <div style={columnStyle3} className="event412 lm">
                              <h2 className="lm qasd">Date</h2>
                              <p className="lm">{event.date}</p>
                            </div>
                            <img className="eventj flex-flex-col" src={even} alt="Bottom Card Image" />
                            <div style={hoverInfoStyle2} className="relative hover-info cvv">
                              <p>{event.description}</p>
                              {event.archivedImg && Object.keys(event.archivedImg).length > 0 && (
                                <ImageSlider1 images={Object.values(event.archivedImg).sort((a, b) => a.order - b.order)} />
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )))
            : (
              // If the window width is above 900px, use the Slider component
              <Slider>
                {Object.keys(archiveEvents)
                  .sort((a, b) => archiveEvents[a].order - archiveEvents[b].order)
                  .map((year) => (
                    archiveEvents[year].length > 0 && (
                      <div key={year} className='flex flex-col'>
                        <div className='flex flex-row' style={{ overflowX: issMobile ? 'scroll' : 'visible' }}>
                          {archiveEvents[year]
                            .sort((a, b) => a.order - b.order)
                            .map((event, eventIndex) => (
                              <div
                                key={eventIndex}
                                style={cardStyle}
                                className="event45 w-[20%] relative group lm gggg flex flex-col animate__animated animate__fadeIn animate__delay-1s"
                                onMouseEnter={handleUpperCardHover}
                                onMouseLeave={handleUpperCardLeave}
                              >
                                <div style={columnStyle3} className="event41 lm">
                                  <h2 className="lm qasd">Event Name</h2>
                                  <p className="lm">{event.eventName}</p>
                                </div>
                                <div style={columnStyle3} className="event411 lm">
                                  <h2 className="lm mt-4 qasd">Location</h2>
                                  <p className="lm">{event.location}</p>
                                </div>
                                <br></br><br></br>
                                <div style={columnStyle3} className="event412 lm">
                                  <h2 className="lm qasd">Date</h2>
                                  <p className="lm">{event.date}</p>
                                </div>
                                <img className="eventj flex-flex-col" src={even} alt="Bottom Card Image" />
                                <div style={hoverInfoStyle2} className="relative hover-info cvv">
                                  <p>{event.description}</p>
                                  {event.archivedImg && Object.keys(event.archivedImg).length > 0 && (
                                    <ImageSlider1 images={Object.values(event.archivedImg).sort((a, b) => a.order - b.order)} />
                                  )}


                                  {/* <ImageSlider1 images={Object.values(event.archivedImg).sort((a, b) => a.order - b.order)} /> */}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )
                  ))}
              </Slider>
            )}
        </div>


        <br></br><br></br><br></br><br></br>
      </div >


    </>
  );
}

export default Events;
