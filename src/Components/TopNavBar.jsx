import React from 'react'
import Logo from "../assets/Logo.png"
import "./TopNavBar.css"

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
              <li>Register Ride</li>
              <li>Find Ride</li>
              <li>My Trips</li>
              <li>My Profile</li>
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