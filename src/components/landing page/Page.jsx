import React from "react";

import { NavLink } from "react-router-dom";

import image from "../../assets/undraw_completed_tasks_vs6q.svg";

import "../landing page/Page.css";

import underline from "../../assets/underline.jpeg";

import { FaRegCheckCircle } from "react-icons/fa";

import choose from "../../assets/undraw_selection_re_ycpo.png";

import { MdHub } from "react-icons/md";

const Page = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="text">
          <h2>
            
            <FaRegCheckCircle /> Build teams
          </h2>
          <h2>
            
            <FaRegCheckCircle /> Create Events
          </h2>
          <h2>
            
            <FaRegCheckCircle /> Enjoy the process
          </h2>
          <div className="start">
            <NavLink
              to="/starts"
              activeClassName="active"
              className="start-link"
            >
              <b>START --></b>
            </NavLink>
          </div>
        </div>
        <div className="image">
          <img src={image} alt=""/>
        </div>
      </div>
      <div className="goal">
        <h2 className="header"><b>Goals</b><br></br><img src={underline} /></h2>
        <div className="passage">
          <p>
            &diams; To provide comprehensive resources and tools for event
            planners to efficiently organize and coordinate teams.
          </p>
          <p>
            &diams; To enhance colloboration among team members,track progress
            and deadlines, and ensure the successful execution of events.
          </p>
          <p>
            &diams; To give the users a simple and easy to use web service to
            use on a daily basis.
          </p>
          <p>
            &diams; To empower event professionals with the knowledge and
            support they need to effectively manage teams and deliver
            exceptional events.
          </p>
        </div>
      </div>
      <div className="choose">
        <div className="choose-image">
          <img src={choose} alt="" />
        </div>

        <div className="choose-text">
          <h1>Why Choose Event <MdHub/> Hub?</h1>
          <p>
            <b>Easy to Use:</b>
            <i>
              Intuitive interface designed for event organizers of all levels.
            </i>
            <br></br>
            <b>Scalable Solutions:</b> <i>Plans that grow with your event needs.</i>
            <br></br>
           <b> Comprehensive Support:</b> <i>Plans that grow with your event needs.</i>
            <br></br>
           <b> Feature-Rich:</b>
            <i>From ticketing to analytics, all tools in one place.</i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;
