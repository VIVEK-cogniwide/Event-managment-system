import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import "../login-modal/LoginModal.css";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleSubmit = (e) => {
   
   

    e.preventDefault();
    
        axios.post('http://localhost:8080/login-user', {params:{ email, password },})
            .then(response => {
                onLogin(response.data);
                onClose();
            })
            .catch(error => {
                console.error('Error logging in:', error);
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
                  <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                  <p>Location: {event.location}</p>
                  <p>Description: {event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have not enrolled in any events.</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
