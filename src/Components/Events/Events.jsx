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

import aq from "./abg.svg";
import Slider from "../Blog/slider";
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
    marginBottom: '100px',
  };

  const sectionStyle = {
    margin: '1% auto',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    width: '95%',
    height: '35%',
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
    justifyContent: 'space-between',
  };

  const breakpoints = {
    mobile: '(max-width: 1600px)',
    desktop: '(min-width: 1601px)',
  };
  
  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    marginLeft: '2%',
    flexDirection: isMobile ? 'column' : 'row',
  };
  
  const cardStyle = {
    flex: 1,
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    height: '300px',
    position: 'relative',
    overflow: 'hidden',
    width: '300px',
    touchAction: isMobile ? 'auto' : 'none',
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
    width: '250px',
    height: '250px',
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
    marginLeft: '-10px',
    width: '0',
    height: '0',
    borderTop: '10px solid #fff',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
  };

  const handleUpperCardHover = (event) => {
    if (!isMobile) {
      const hoverInfo = event.currentTarget.querySelector('.hover-info');
      const image = hoverInfo.querySelector('img');

      if (
        hoverInfo.textContent.trim() !== '' &&
        image &&
        image.complete &&
        image.naturalWidth !== 0
      ) {
        hoverInfo.style.display = 'block';

        const triangle = event.currentTarget.querySelector('.triangle');
        triangle.style.display = 'block';
      }
    }
  };

  const handleUpperCardLeave = (event) => {
    if (!isMobile) {
      const hoverInfo = event.currentTarget.querySelector('.hover-info');
      hoverInfo.style.display = 'none';

      const triangle = event.currentTarget.querySelector('.triangle');
      triangle.style.display = 'none';
    }
  };

  const boxContentStyle = {
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const handleLowerCardHover = (event) => {
    if (!isMobile) {
      const hoverInfo = event.currentTarget.querySelector('.hover-info');
      const image = hoverInfo.querySelector('img');

      if (image && image.complete && image.naturalWidth !== 0) {
        hoverInfo.style.display = 'block';
        hoverInfo.style.zIndex = '999';

        const cardRect = event.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        hoverInfo.style.top = `${cardRect.bottom + scrollTop - 10}px`;

        const boxContent = event.currentTarget.querySelector('.box-content');
        boxContent.style.opacity = 1;
      }
    }
  };

  const handleLowerCardLeave = (event) => {
    if (!isMobile) {
      const hoverInfo = event.currentTarget.querySelector('.hover-info');
      hoverInfo.style.display = 'none';
      hoverInfo.style.zIndex = '2';

      const boxContent = event.currentTarget.querySelector('.box-content');
      boxContent.style.opacity = 0;
    }
  };

  const handleCardClick = (event) => {
    if (isMobile) {
      const hoverInfo = event.currentTarget.querySelector('.hover-info');
      const image = hoverInfo.querySelector('img');

      if (image && image.complete && image.naturalWidth !== 0) {
        hoverInfo.style.display = 'block';
        hoverInfo.style.zIndex = '999';

        const cardRect = event.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        hoverInfo.style.top = `${cardRect.bottom + scrollTop - 10}px`;

        const boxContent = event.currentTarget.querySelector('.box-content');
        boxContent.style.opacity = 1;
      }
    }
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={imageContainerStyle} className="image-container animate__animated animate__fadeIn animate__delay-0s">
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

        {Object.keys(currentEvents).map((year) => (
          currentEvents[year].length > 0 && (
            <div key={year}>
              <div className={`event3 text-3xl`}>{year}</div>
              {currentEvents[year].map((event, eventIndex) => (
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
                  <img className="evento flex-flex-col" src={aq} alt="Bottom Card Image" />
                  <div style={hoverInfoStyle} className="hover-info">
                    <div style={triangleStyle} className="triangle"></div>
                    <img src={event.img} alt="Bottom Card Image jkg" className="w-96 h-48 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          )
        ))}

        <div className="event3 text-3xl">Archives of past events</div>
        <div style={{ ...cardContainerStyle, flexDirection: isMobile ? 'column' : 'row' }} className="lk flex flex-row">
          <div className="lk flex flex-row">
            <Slider options={{ align: "center" }}>
              {Object.keys(archiveEvents).map((year) => (
                archiveEvents[year].length > 0 && (
                  <div key={year} className='flex flex-col'>
                    <div className='flex flex-row'>
                      {archiveEvents[year].map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          style={cardStyle}
                          className="event45 w-[20%] relative group lm gggg flex flex-col animate__animated animate__fadeIn animate__delay-1s"
                          onMouseEnter={handleUpperCardHover}
                          onMouseLeave={handleUpperCardLeave}
                          onClick={handleCardClick}
                        >
                          <div style={columnStyle3} className="event41 lm">
                            <h2 className="lm qasd">Event Name</h2>
                            <p className="lm">{event.eventName}</p>
                          </div>
                          <div style={columnStyle3} className="event411 lm">
                            <h2 className="lm mt-4 qasd">Locations</h2>
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
                            <div className='max-h-60 flex flex-row overflow-x-auto no-scrollbar'>
                              {Array.isArray(event.archivedImg) && event.archivedImg.map((image, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={image}
                                  alt={`Archived Image ${imgIndex}`}
                                  className="w-96 h-auto object-contain mt-1"
                                />
                              ))}
                              <div className='absolute text-[20px] top-[45%] mt-2 text-white flex place-items-center justify-center animate-pulse'>
                                <Icon icon="ic:round-less-than" />
                              </div>
                              <div className='absolute top-[45%] text-[20px] right-3 mt-2 text-white flex place-items-center justify-center animate-pulse'>
                                <Icon icon="ic:round-greater-than" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </Slider>
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
    </>

  );
}

export default Events;
