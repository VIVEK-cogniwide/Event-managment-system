import React, { useState, useEffect } from "react";
import axios from "axios";
import "../login-modal/LoginModal.css";
import { Navigate } from "react-router-dom";

const Login = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    axios
      .post("http://localhost:8080/login-user", { email, password })
      .then((response) => {
        setUser(response.data.user);
        setEvents(response.data.events);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Invalid email or password");
      });
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8080/{userId}/events`)
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user events:", error);
        });
    }
  }, [user]);

  const handleUpdateEvent = (eventId, updatedEvent) => {
    axios
      .patch(`http://localhost:8080/{eventId}/events`, updatedEvent)
      .then((response) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) => (event.id === eventId ? updatedEvent : event))
        );
      })
      .catch((error) => {
        console.error("Error updating event:", error);
      });
  };

  const handleDeleteEvent = (eventId) => {
    axios
      .delete(`http://localhost:8080/{eventId}/events`)
      .then((response) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };

  const handleLogout = () => {
    axios
     .post("http://localhost:8080/user-logout")
     .then((response) => {
        setUser(null);
        setEvents([]);
        setIsLoggedIn(false);
        Navigate('/');
      })
     .catch((error) => {
        console.error("Error logging out:", error);
      });

    
        axios.post('http://localhost:8080/user-login', {params:{ email, password },})
            .then(response => {
                onLogin(response.data);
                onClose();
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });

  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user && user.firstName ? user.firstName : 'User'}</h2>
          <h3>Your Enrolled Events:</h3>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <h4>{event.eventName}</h4>
                  <p><b>DATE:</b> {new Date(event.eventDate).toLocaleDateString()}</p>
                  <p><b>LOCATION:</b> {event.location}</p>
                  <p><b>DESCRIPTION:</b> {event.description}</p>
                  <div className="button-groups">
                  <button type="button" onClick={() => handleUpdateEvent(event.id, { /* updated event data */ })}>
                    Update
                  </button><br></br>
                  <button type="button" onClick={() => handleDeleteEvent(event.id)}>
                    Delete
                  </button>
                  <button onClick={handleLogout}>Logout</button>
                  </div>
                  
                 
                </li>
                
               
              ))}
              

            </ul>
          ) : (
            <p>You have not enrolled in any events.</p>
          )}
         
        </div>
      )}
    </div>
  );
};

export default Login;