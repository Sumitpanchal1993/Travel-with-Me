import React from 'react'
import Logo from "../assets/Logo.png"
import "./TopNavBar.css"
import { Link } from 'react-router-dom'

function TopNavBar() {
  return (
    <>
      <div className='topNavBarBase'>
        <div className='topNavLogo'>
          <img src={Logo} alt="" />
          <div>
            <p>Travel</p>
            <p>With</p>
            <p>Me</p>
          </div>
        </div>
        <div className='topNavoptions'>
          <div>
            <ul>
              <li><Link to={"/registerride"}>Register Ride</Link></li>
              <li><Link to={"/findride"}>Find Ride</Link></li>
              <li><Link to={"/mytrips"}>My Trips</Link></li>
              <li><Link to={"/myprofile"}>My Profile</Link></li>
            </ul>
          </div>
          <div>
            <button>Login</button>
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavBar