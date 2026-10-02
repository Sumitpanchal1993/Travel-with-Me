import './FooterBar.css'

function FooterBar() {
  return (
    <nav className="footerBarBase" aria-label="Mobile navigation">
      <ul>
        <li>
          <span className="material-symbols-rounded" aria-hidden="true">add_road</span>
          <span>Register Ride</span>
        </li>
        <li>
          <span className="material-symbols-rounded" aria-hidden="true">search</span>
          <span>Find Ride</span>
        </li>
        <li>
          <span className="material-symbols-rounded" aria-hidden="true">luggage</span>
          <span>My Trips</span>
        </li>
        <li>
          <span className="material-symbols-rounded" aria-hidden="true">person</span>
          <span>My Profile</span>
        </li>
      </ul>
    </nav>
  )
}

export default FooterBar