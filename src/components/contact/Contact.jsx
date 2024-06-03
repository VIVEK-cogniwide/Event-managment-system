import React from "react";
import mail from "../../assets/undraw_mail_sent_re_0ofv.svg";
import call from "../../assets/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_calling_mcgf_gyrw_2jtb_-1-_eb38_-1-_fikj_5ef3_-1-_b52m_-1-_7noa_-1-_qlvj_(1)_f9ev.png";
import address from "../../assets/undraw_Map_dark_re_36sy.png";
import underline from "../../assets/underline.jpeg";
import support from "../../assets/support.png";
import "../contact/Contact.css";
function GroupExample() {
  return (
    <div>
      <h2 className="header">
        Get In Touch<br></br>
        <img src={underline} alt="" />
      </h2>
      <div className="contact-us">
        <div className="card-9">
          <div className="card-image-9">
            <img src={mail} alt="" />
          </div>
          <div className="category-9">Email </div>
          <div className="heading-9">
            {" "}
            For general inquiries, please email us at info@eventhub.com.
          </div>
        </div>

        <div className="card-9">
          <div className="card-image-9">
            <img src={call} alt="" />
          </div>
          <div className="category-9">Phone </div>
          <div className="heading-9">
            Call us at +1 (800) 123-4567. Our support team is available from 9
            AM to 6 PM, Monday to Friday.
          </div>
        </div>

        <div className="card-9">
          <div className="card-image-9">
            <img src={address} alt="" />
          </div>
          <div className="category-9"> Address</div>
          <div className="heading-9">
            Visit us at:<br></br>
            EVENT HUB Headquarters 123 Event Street, Suite 400 Cityville, ST
            12345
          </div>
        </div>
      </div>
      <div className="support">
        <h2 className="header">
          Support<br></br>
          <img src={underline} alt="" />
        </h2>
        <div className="support-content">
          <div className="support-image">
            <img src={support} alt="" />
          </div>
          <div className="support-text">
            <h4>
              Customer Support Team At EVENT HUB, our dedicated Customer Support
              Team is here to help you every step of the way. Whether you need
              assistance with our services, troubleshooting issues, or have
              questions about your account, we are committed to providing you
              with the best possible support.Our Customer Support Team consists of highly trained professionals who are experts in event management and our system. 
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupExample;
