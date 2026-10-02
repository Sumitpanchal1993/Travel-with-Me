import './FooterBar.css'

function FooterBar({ variant = 'top' }) {
  const topLinks = ['Share-A-Ride', 'Publish a Ride', 'Find a Ride', 'My Trips', 'Profile', 'Sign In']
  const footerItems = [
    { label: 'Home', icon: '⌂' },
    { label: 'Trips', icon: '▣' },
    { label: 'Bookings', icon: '☰' },
    { label: 'Profile', icon: '◔' },
  ]

  if (variant === 'bottom') {
    return (
      <div className="mobile-footer">
        {footerItems.map((item, index) => (
          <button key={item.label} type="button" className={index === 0 ? 'active' : ''}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </button>
        ))}
      </div>
    )
  }

  return (
    <header className="top-nav-bar">
      <div className="brand">
        <span className="brand-mark">⌂</span>
        <span>Share-A-Ride</span>
      </div>

      <nav className="top-links" aria-label="Main navigation">
        {topLinks.map((link) => (
          <button key={link} type="button" className={link === 'Publish a Ride' ? 'active' : ''}>
            {link}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default FooterBar