import React from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MdHub } from "react-icons/md";
import "../navbar/Nav.css";

const Nav = () => {

    const navigate = useNavigate(); // Hook for navigation

  const handleSignInClick = () => {
    navigate('/Upcoming'); // Navigate to the sign-in page
  };
  const loginclick = () => {
    navigate('/loginmodal');
  }

    return(
        <nav className="navbar">
        <div className="navbar-container">
           
                <p><b>Event  <MdHub />  Hub</b></p>
                
                <ul className="nav-menu">
            
            
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/events" activeClassName="active">
                        Events
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pricing" activeClassName="active">
                        Pricing
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
                <li className="nav-item">
                        <button className="upgrade-btn" onClick={loginclick}>
                            Login
                        </button>
                    </li>
                <li className="nav-item">
                        <button className="upgrade-btn"onClick={handleSignInClick}>
                            Upcoming
                        </button>
                    </li>
            </ul>
        </div>
    </nav>

    );
}
export default Nav;