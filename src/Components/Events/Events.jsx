import React from 'react';
import './Events.css';
import eventsData from './eventsData.json';
import eventsData2 from './eventsData2.json';
import eventsData3 from './eventsData3.json';
import evim from '../../assets/Images/Events/event1.svg';
import even from '../../assets/Images/Events/event2.svg';
import vg from '../../assets/Images/Events/b.svg';
import yu from '../../assets/Images/Events/a.svg';

const Events = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '100px', // Margin to prevent hover box from being cut off by the footer
  };

  const sectionStyle = {
    margin: '2% auto',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    position: 'relative',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginLeft: '2%',
  };

  const cardStyle = {
    flex: 1,
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    height: '300px',
    position: 'relative',
    overflow: 'hidden',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: '#013A98',
    fontWeight: 'bold',
    marginBottom: '10px',
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
    marginLeft: '3px',
    position: 'relative',
    top: '-70%',
    left: '18%',
    transform: 'translate(-50%, -50%)',
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
    height:'200px',
    zIndex: '5',
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
    hoverInfo.style.display = 'block';

    const triangle = event.currentTarget.querySelector('.triangle');
    triangle.style.display = 'block';
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

    // Display the hover box and bring it to the front
    hoverInfo.style.display = 'block';
    hoverInfo.style.zIndex = '999';

    // Position the hover box below the card
    const cardRect = event.currentTarget.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    hoverInfo.style.top = `${cardRect.bottom + scrollTop - 10}px`; // 10px buffer

    // Add animation for the box content
    const boxContent = event.currentTarget.querySelector('.box-content');
    boxContent.style.opacity = 1;
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

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle} className="image-container">
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
          <p>Join us for a friendly rendezvous</p>
        </div>
      </div>
      <div className="event3 text-2xl">Events 2023</div>
      {eventsData.map((event, index) => (
        <div
          key={index}
          style={sectionStyle}
          className="text-xl event100 group"
          onMouseEnter={handleUpperCardHover}
          onMouseLeave={handleUpperCardLeave}
        >
          <img className="eventi" src={evim} alt="Event Image" />
          <div style={columnStyle}>
            <h2>Event Name</h2>
            <p>{event.eventName}</p>
          </div>
          <div style={columnStyle}>
            <h2>Locations</h2>
            <p>{event.location}</p>
          </div>
          <div style={columnStyle}>
            <h2>Date</h2>
            <p>{event.date}</p>
          </div>
          <div style={hoverInfoStyle} className="hover-info">
            <div style={triangleStyle} className="triangle"></div>
            
            <img src={vg} alt="Bottom Card Image jkg" className="w-96 h-108 mt-1" />
          </div>
        </div>
      ))}
      <div className="event3 text-2xl">Events 2024</div>
      {eventsData2.map((event, index) => (
        <div
          key={index}
          style={sectionStyle}
          className="text-xl event100 group"
          onMouseEnter={handleUpperCardHover}
          onMouseLeave={handleUpperCardLeave}
        >
          <img className="eventi" src={evim} alt="Event Image" />
          <div style={columnStyle}>
            <h2>Event Name</h2>
            <p>{event.eventName}</p>
          </div>
          <div style={columnStyle}>
            <h2>Locations</h2>
            <p>{event.location}</p>
          </div>
          <div style={columnStyle}>
            <h2>Date</h2>
            <p>{event.date}</p>
          </div>
          <div style={hoverInfoStyle} className="hover-info">
            <div style={triangleStyle} className="triangle"></div>
           
            <img src={vg} alt="Bottom Card Image jkg" className="w-96 h-108 mt-1" />
          </div>
        </div>
      ))}
      <div className="event3 text-2xl">Archives of past events</div>
      <div style={cardContainerStyle}>
        {eventsData3.map((event, index) => (
          <div
            key={index}
            style={cardStyle}
            className="text-xl  event45 relative group"
            onMouseEnter={handleUpperCardHover}
            onMouseLeave={handleUpperCardLeave}
          >
            <div style={columnStyle} className="event41">
              <h2>Event Name</h2>
              <p>{event.eventName}</p>
            </div>
            <div style={columnStyle}>
              <h2>Locations</h2>
              <p>{event.location}</p>
            </div>
            <div style={columnStyle}>
              <h2>Date</h2>
              <p>{event.date}</p>
            </div>
            <img className="eventj flex-flex-col" src={even} alt="Bottom Card Image" />
            <div style={hoverInfoStyle} className="hover-info">
              <p>Additional Info</p>
              <img src={even} alt="Additional Info Image" className="w-16 h-16 mt-2" />
            </div>
          </div>
        ))}
      </div>
      <br></br><br></br><br></br><br></br>
    </div>
  );
};

export default Events;
