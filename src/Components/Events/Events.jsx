import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Icon } from '@iconify/react';
import './Events.css';
import Slider from "./slider";
import aq from "./abg.svg";
import even from "./Vector (1).svg";
import evim from '../../assets/Images/Events/event1.svg';

const Events = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [archiveEvents, setArchiveEvents] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    marginLeft: '2%',
    flexDirection: isMobile ? 'row' : 'row',
  };

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '100px', // Margin to prevent hover box from being cut off by the footer
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

  const ImageSlider = ({ images }) => {
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
  };

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const issMobile = window.innerWidth < 1310;

  return (
    <div style={containerStyle}>
      {/* Render current events */}
      {Object.keys(currentEvents).map((year) => (
        currentEvents[year].length > 0 && (
          <div key={year}>
            <div className={`event3 text-3xl`}>{year}</div>
            {currentEvents[year].map((event, eventIndex) => (
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
                  <ImageSlider images={event.archivedImg} />
                </div>
              </div>
            ))}
          </div>
        )
      ))}

      {/* Render archived events */}
      <div className="event3 text-3xl">Archives of past events</div>
      <div style={{ ...cardContainerStyle, flexDirection: window.innerWidth <= 900 ? 'row' : 'row' }} className="lk overflow-x-auto">
        {window.innerWidth <= 900 ? (
          // If the window width is less than or equal to 900px, use the original code without the Slider
          Object.keys(archiveEvents).map((year) => (
            archiveEvents[year].length > 0 && (
              <div key={year} className='flex flex-col'>
                <div className='flex flex-row' style={{ overflowX: issMobile ? 'scroll' : 'scroll' }}>
                  {archiveEvents[year].map((event, eventIndex) => (
                    <EventCard key={eventIndex} event={event} />
                  ))}
                </div>
              </div>
            )
          )))
         : (
          // If the window width is above 900px, use the Slider component
          <Slider>
            {Object.keys(archiveEvents).map((year) => (
              archiveEvents[year].length > 0 && (
                <div key={year} className='flex flex-col'>
                  <div className='flex flex-row' style={{ overflowX: issMobile ? 'scroll' : 'visible' }}>
                    {archiveEvents[year].map((event, eventIndex) => (
                      <EventCard key={eventIndex} event={event} />
                    ))}
                  </div>
                </div>
              )
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Events;
