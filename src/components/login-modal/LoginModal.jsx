import React, { useState } from "react";
import axios from "axios";
import "../login-modal/LoginModal.css";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
   
   

    e.preventDefault();
    
        axios.post('http://localhost:8080/events/login', {params:{ email, password },})
            .then(response => {
                onLogin(response.data);
                onClose();
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
