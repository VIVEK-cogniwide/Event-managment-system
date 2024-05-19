import React from "react";
import "../start/Start.css";
import illustrate from "../../assets/undraw_access_account_re_8spm.svg";

const Start =()=> {
    return(
        <div className="content">
            <div className="illustrate">
                <img src={illustrate} alt=""/>
            </div>
        <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our site. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
  
</form>
</div>
    );
}
export default Start;