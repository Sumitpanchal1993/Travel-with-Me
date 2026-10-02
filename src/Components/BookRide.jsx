import './BookRide.css'

const rideOffers = [
  { name: 'Rahul K.', rating: '4.8', price: 'INR 800', accent: 'sun' },
  { name: 'Priya S.', rating: '4.9', price: 'INR 950', accent: 'pink' },
]

function BookRide() {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="phone-header">
          <button type="button" className="back-btn">‹</button>
          <h3>Book Ride</h3>
          <span className="status-icons">◔</span>
        </div>

        <div className="book-form">
          <div className="journey-field-grid">
            <label className="mini-field">
              <span>From</span>
              <div className="mini-input">
                <span className="pin-icon" />
                <input value="Mumbai" readOnly />
              </div>
            </label>

            <label className="mini-field">
              <span>To</span>
              <div className="mini-input">
                <span className="pin-icon" />
                <input value="Pune" readOnly />
              </div>
            </label>

            <label className="mini-field full-width">
              <span>Date</span>
              <div className="mini-input date-input">
                <input value="Select Date" readOnly />
              </div>
            </label>
          </div>

          <div className="ride-offers">
            {rideOffers.map((ride) => (
              <div key={ride.name} className="offer-card">
                <div className={`avatar avatar-${ride.accent}`}>{ride.name.charAt(0)}</div>
                <div className="offer-details">
                  <div className="name-row">
                    <strong>{ride.name}</strong>
                    <span className="star">★</span>
                    <span>{ride.rating}</span>
                  </div>
                  <div className="fare">{ride.price}</div>
                </div>
                <button type="button" className="book-btn">Book Seat</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookRide