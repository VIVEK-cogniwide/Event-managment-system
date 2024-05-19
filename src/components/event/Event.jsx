import React from "react";
import { useState } from "react";
import event from "../../assets/undraw_events_re_98ue.svg";
import { FaArrowCircleRight } from "react-icons/fa";
import "../event/Event.css";

const Event = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: null
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setEventData({
        ...eventData,
        image: e.target.files[0]
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
    // Here you might want to add the logic to actually save the data
  };

  return (
    <div className="contain">
       <h2 className="head"><img src={event} /><br></br><b>Lets create an Event<br></br><FaArrowCircleRight /></b></h2>
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
          <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default Event;
