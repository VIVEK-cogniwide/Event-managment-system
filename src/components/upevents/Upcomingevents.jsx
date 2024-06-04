import React from "react";

import { useState } from "react";

import { useEffect } from "react";

import axios from "axios";

import eventsda from "../../assets/eventsda.jpeg";

import underline from "../../assets/underline.jpeg";

import { IoLocation } from "react-icons/io5";

import { BsFillCalendar2DateFill } from "react-icons/bs";

import "../upevents/Upcomingevents.css";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userId, setUserId] = useState('');
  

  useEffect(() => {
    
    axios
      .get("http://localhost:8080/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);
  const handleEnrollClick = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const requestBody = {
      eventId: selectedEvent.id,
      userId: parseInt(userId),
    };
    axios.post(`http://localhost:8080/events/register`,requestBody)
      .then((response) => {
        console.log('User registered for event:', response.data);
        alert('Successfully registered for the event');
        setSelectedEvent(null); 
        setUserId(''); 
        handleClose(); 
      })
      .catch((error) => {
        console.error('Error registering for event:', error);
      });
  };

  const handleClose = () => {
    setSelectedEvent(null);
    setUserId('');
   
  };

  return (
    <div className="upcoming-container">
      <h2 className="header">
        <b>Upcoming Events</b>
        <br></br>
        <img src={underline} alt=""/>
      </h2>
      <div id="upcoming-events">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <article className="card-code">
              <div className="card-int">
                <span className="card__span"><BsFillCalendar2DateFill />{event.eventDate}</span>
                <div className="img">
                  <img src={eventsda} alt=""/>
                </div>
                <div className="card-data">
                  <p className="title-card">
                    <h3>{event.eventName}</h3>
                    <p><IoLocation />
                      <i>{event.location}</i>
                    </p>
                  </p>
                  
                  <button className="button-card" onClick={() => handleEnrollClick(event)}>Show details</button>
                  
                  
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="event-details-modal">
          <div className="modal-content">
            <h2>{selectedEvent.eventName}</h2>
            <p><b>Date:</b> {new Date(selectedEvent.eventDate).toLocaleDateString()}</p>
            <p><b>Location:</b> {selectedEvent.location}</p>
            <p><b>Description:</b> {selectedEvent.description}</p>
            
            <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button type="submit">Enroll Now</button>
            </form>
            <button className="" onClick={handleClose}>close</button>
            </div>
            </div>
            
            
         
      )}
       
      
    </div>
  );
};

export default UpcomingEvents;
