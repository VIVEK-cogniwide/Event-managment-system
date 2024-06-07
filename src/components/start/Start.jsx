import React from "react";
import "../start/Start.css";
import axios from "axios";
import { useState } from "react";
import illustrate from "../../assets/undraw_access_account_re_8spm.svg";

const Start = () => {
  
  
  const [Data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    
  });

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    axios.get('http://localhost:8080/register-user')
    axios.post(`http://localhost:8080/register-user`, {
        firstname: Data.firstname,
            lastname: Data.lastname,
            email: Data.email,
            password: Data.password
        
        
      })
      .then((response) => {
        console.log("User registered:", response.data);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };
  return (
    <div className="content">
      <div className="illustrate">
        <img src={illustrate} alt="" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our site. </p>
        <div className="flex">
          <label>
            <input
              required
              name="firstname"
              type="text"
              className="input"
              value={Data.firstname}
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required
              name="lastname"
              type="text"
              className="input"
              value={Data.lastname}
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            required
            name="email"
            type="email"
            className="input"
            value={Data.email}
            onChange={handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            name="password"
            type="password"
            className="input"
            value={Data.password}
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
        
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};
export default Start;
