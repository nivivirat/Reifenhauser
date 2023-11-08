import React from 'react';
import './Events.css'; // You can create a CSS file for styling
import eventsData from './eventsData.json';
import eventsData2 from './eventsData2.json';
import eventsData3 from './eventsData3.json';
import evim from '../../assets/Images/Events/event1.svg';
const Events = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
     // Set the direction to column for the image and sections to be stacked vertically
  };
  const sectionStyle = {
    // backgroundColor: '#b0c4de',
    margin:'2% auto',
    color: 'white',
    padding: '20px',
     // Add margin at the top and bottom to create space between sections
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'95%',
    // margin:'auto',
  };
  const sectionStyle2 = {
    display: 'flex',
    flexDirection: 'row', // Change the direction to row for horizontal layout
    // backgroundColor: '#b0c4de',
    color: 'white',
    padding: '20px',
    margin: '10px 0', // Add margin at the top and bottom to create space between sections
    borderRadius: '8px',
    
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Set the width to 100%
  };

  const cardStyle = {
    // backgroundColor: '#b0c4de',
    flex: 1,
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column', // Set the direction to column for vertical layout inside each card
    color: '#013A98',
    fontWeight: 'bold',
    marginBottom: '10px',
    
    // Add margin at the bottom of each column
  };

  const imageContainerStyle = {
    textAlign: 'center',
    position: 'relative',
    height: '30vh',
    margin: '1%', // Set the margin to 1% from all directions
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    position: 'relative',
    
  };

  const textInsideImage = {
    position: 'absolute',
    top: '20%',
    left: '18%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    zIndex:'2',
  };

  return (
    <div>
      <div style={imageContainerStyle} className="image-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/6ee1/0b62/ecc1bf59244a34938d24ec38f4f58645?Expires=1700438400&Signature=llKCabxnB-vH2PDu0uOJzNoQOVk~hUT-3qjW36BiuAarXbsyEHHCn7CrXduw-Nwk0GlD31rhtbvoYaDTQ-hCETLObjBWHGcb4PRtauILxi2DBGM55giWzwnVe0bIwSrfWMQo2B6WNuDyA8DFgOi8cGOJZydC4C6FyyYoLEj~H2B-BDq4ZAh3gFQcK~znYm609DkXaaQCiYX82OAQUgEp~BcwD3VthUnTdH5G8WSnJKB7IZa~~0MclJDgCyMOzXmT4OmBhvfwhS-lEHn7Na-z1hDhy3a-l5PjtHFCfN3K~nmGgYDBllOYpTKs3WZechOGCyyAsch6h-n4Djrw5fGPmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Rendezvous Image"
          style={imageStyle}
          className="event1"
        />
        <div className="event9" style={textInsideImage} >
          <p>Join us for a friendly rendezvous</p>
        </div>
      </div>
      <div className="event3 text-2xl">Events 2023</div>
      {eventsData.map((event, index) => (
        <div key={index} style={sectionStyle} className="event100">
          <img className="eventi" src={evim}></img>
          <div style={columnStyle}>
            <h2>Event Name</h2>
            <p>{event.eventName}</p>
          </div>
          <div style={columnStyle}>
            <h2>Location</h2>
            <p>{event.location}</p>
          </div>
          <div style={columnStyle}>
            <h2>Date</h2>
            <p>{event.date}</p>
          </div>
        </div>
      ))}
      <div className="event3 text-2xl">Events 2024</div>
      {eventsData2.map((event, index) => (
        <div key={index} style={sectionStyle} className="event100">
          <img className="eventi" src={evim}></img>
          <div style={columnStyle}>
            <h2>Event Name</h2>
            <p>{event.eventName}</p>
          </div>
          <div style={columnStyle}>
            <h2>Location</h2>
            <p>{event.location}</p>
          </div>
          <div style={columnStyle}>
            <h2>Date</h2>
            <p>{event.date}</p>
          </div>
        </div>
      ))}
      <div className="event3 text-2xl">Archives of past events</div>
      <div style={cardContainerStyle} >
        {eventsData3.map((event, index) => (
          <div key={index} style={cardStyle} className="event45">
           
            <div style={columnStyle}>
              <h2>Event Name</h2>
              <p>{event.eventName}</p>
            </div>
            <div style={columnStyle}>
              <h2>Location</h2>
              <p>{event.location}</p>
            </div>
            <div style={columnStyle}>
              <h2>Date</h2>
              <p>{event.date}</p>
            </div>
            <img className="eventj" src={evim}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
;

export default Events;

