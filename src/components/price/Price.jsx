import React from "react";

import underline from "../../assets/underline.jpeg";

import img_1 from "../../assets/s_three_columns-01.svg";

import img_2 from "../../assets/s_three_columns-02.svg";

import img_3 from "../../assets/s_three_columns-03.svg";

import news from "../../assets/undraw_newsletter_re_wrob.svg";

import "../price/Price.css";

const Price = () => {
  return (
    <div className="container-2">
      <h2 className="header">
        <b>Features</b>
        <br></br>
        <img src={underline} alt="desc"/>
      </h2>
      <div className="pricing">
        <div className="card-1">
          <div className="image-1">
            <img src={img_1} alt="desc" />
          </div>
          <div className="content-1">
            <a href="#">
              <span className="title-1">
                <b>Customized to your event</b>
              </span>
            </a>

            <p className="desc-1">
              You will always find the ideal choice adapted to your needs.From
              the basic event planning based on our attractive templates.
            </p>
          </div>
        </div>

        <div className="card-1">
          <div className="image-1">
            <img src={img_2} alt="desc" />
          </div>
          <div className="content-1">
            <a>
              <span className="title-1">
                <b>Customizable from A to Z</b>
              </span>
            </a>

            <p className="desc-1">
              Edit and customize your event details effortlessly with our
              user-friendly tools.No technical skills required.
            </p>
          </div>
        </div>

        <div className="card-1">
          <div className="image-1">
            <img src={img_3} alt="desc" />
          </div>
          <div className="content-1">
            <a>
              <span className="title-1">
                <b>All event data in your hands</b>
              </span>
            </a>

            <p className="desc-1">
              Don't miss any event data anymore and get all reports you need
              when and where you want.Analyze them easily with our user-friendly
              interface and enhance your event experience.
            </p>
          </div>
        </div>
      </div>
     
        <h2 className="header"><b>Subscribe </b><br></br><img src={underline} alt="desc"/></h2>
        <div className="file">
      <div className="subscribe"><h3 className="sub-head">Subscribe and <br></br>get in touch with<br></br> us.</h3><img src={news} alt=""/></div>
      <div className="popup">
        <form className="form-6">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 34 34"
              height="34"
              width="34"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2.5"
                stroke="#115DFC"
                d="M7.08385 9.91666L5.3572 11.0677C4.11945 11.8929 3.50056 12.3055 3.16517 12.9347C2.82977 13.564 2.83226 14.3035 2.83722 15.7825C2.84322 17.5631 2.85976 19.3774 2.90559 21.2133C3.01431 25.569 3.06868 27.7468 4.67008 29.3482C6.27148 30.9498 8.47873 31.0049 12.8932 31.1152C15.6396 31.1838 18.3616 31.1838 21.1078 31.1152C25.5224 31.0049 27.7296 30.9498 29.331 29.3482C30.9324 27.7468 30.9868 25.569 31.0954 21.2133C31.1413 19.3774 31.1578 17.5631 31.1639 15.7825C31.1688 14.3035 31.1712 13.564 30.8359 12.9347C30.5004 12.3055 29.8816 11.8929 28.6437 11.0677L26.9171 9.91666"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-width="2.5"
                stroke="#115DFC"
                d="M2.83331 14.1667L12.6268 20.0427C14.7574 21.3211 15.8227 21.9603 17 21.9603C18.1772 21.9603 19.2426 21.3211 21.3732 20.0427L31.1666 14.1667"
              ></path>
              <path
                stroke-width="2.5"
                stroke="#115DFC"
                d="M7.08331 17V8.50001C7.08331 5.82872 7.08331 4.49307 7.91318 3.66321C8.74304 2.83334 10.0787 2.83334 12.75 2.83334H21.25C23.9212 2.83334 25.2569 2.83334 26.0868 3.66321C26.9166 4.49307 26.9166 5.82872 26.9166 8.50001V17"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                stroke="#115DFC"
                d="M14.1667 14.1667H19.8334M14.1667 8.5H19.8334"
              ></path>
            </svg>
          </div>
          <div className="note">
            <label className="title-6">Subscribe for updates</label>
            <span className="subtitle">
              Subscribe to this weekly news letter so you don’t miss out on the
              new hot tech topics.
            </span>
          </div>
          <input
            placeholder="Enter your e-mail"
            title="Enter your e-mail"
            name="email"
            type="email"
            className="input_field"
          />
          <button className="submit">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
};
export default Price;
