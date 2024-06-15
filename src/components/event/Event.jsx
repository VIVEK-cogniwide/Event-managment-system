import React from "react";
import { useState } from "react";
import event from "../../assets/undraw_events_re_98ue.svg";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
import "../event/Event.css";

const Event = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: ""
    
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("description", eventData.description);
    formData.append("date", eventData.date);
    formData.append("location", eventData.location);
    
    
   
  
    axios.post('http://localhost:8080/events', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Event created:', response.data);
      // Handle success
    })
    .catch(error => {
      console.error('Error creating event:', error);
      // Handle error
    });

      

      

  };

  return (
    <div className="contain">
       <h2 className="head"><img src={event} alt=""/><br></br><b>Lets create an Event<br></br><FaArrowCircleRight /></b></h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
            />
          </div>
          
          
          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default Event;
