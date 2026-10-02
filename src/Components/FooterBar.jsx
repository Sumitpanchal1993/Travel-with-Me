import { useState } from 'react'
import './FooterBar.css'

function FooterBar() {
  const [activeOption, setActiveOption] = useState('Find Ride')
  const options = [
    { label: 'Register Ride', icon: 'add_road' },
    { label: 'Find Ride', icon: 'search' },
    { label: 'My Trips', icon: 'luggage' },
    { label: 'My Profile', icon: 'person' },
  ]

  return (
    <nav className="footerBarBase" aria-label="Mobile navigation">
      <ul>
        {options.map(({ label, icon }) => (
          <li key={label}>
            <button
              type="button"
              className={activeOption === label ? 'active' : ''}
              aria-pressed={activeOption === label}
              onClick={() => setActiveOption(label)}
            >
              <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterBar