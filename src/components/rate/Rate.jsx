import React from "react";

import underline from "../../assets/underline.jpeg";

import "../rate/Rate.css";

import notsure from "../../assets/notsure.png";



const Rate = () => {
  return (
    <div className="container-1">
      <h2 className="header">
        Our Pricing<br></br>
        <img src={underline} alt="" />
      </h2>
      <div className="container-fluid">
        <div className="card-2">
          <div className="header-2">
            <span className="title-2">FREE</span>
            <span className="price-2">For small teams</span>
            <span className="price-2">$ 0/-</span>
          </div>

          <ul className="lists-2">
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>More team members</span>
            </li>
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span> Android and iOS Widgets</span>
            </li>
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Upgraded calender</span>
            </li>
          </ul>
          <button type="button" class="action">
            Get Started
          </button>
        </div>
        {/* card-2 */}
        <div className="card-2">
          <div className="header-2">
            <span className="title-2">PRO</span>
            <span className="price-2">For big teams</span>
            <span className="price-2">$ 14/-</span>
          </div>

          <ul className="lists-2">
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>100+ boards</span>
            </li>
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Task alarm</span>
            </li>
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Guest view</span>
            </li>
          </ul>
          <button type="button" className="action">
            Get Started
          </button>
        </div>
        {/* card-3 */}
        <div className="card-2">
          <div className="header-2">
            <span className="title-2">BUSINESS</span>
            <span className="price-2">For companies only</span>
            <span className="price-2">$ 19/-</span>
          </div>

          <ul className="lists-2">
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Conference calls</span>
            </li>
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Work analysis</span>
            </li>
            <li className="list-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Enterprise security</span>
            </li>
          </ul>
          <button type="button" class="action">
            Get Started
          </button>
        </div>
      </div>
      <div className="sure">
        <div className="sure-text">
          <h1>
            <b>Not Sure Which Plan is Right for You?</b>
          </h1>
          <p>
            <i>
              <b>
                Contact our sales team to discuss your needs and find the
                perfect plan for your events. <br></br>We’re here to help you
                make every event a success!
              </b>
            </i>
          </p>
        </div>
        <div className="sure-image">
          <img src={notsure} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Rate;
