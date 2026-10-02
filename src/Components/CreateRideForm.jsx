import './CreateRideForm.css'

function CreateRideForm() {
  return (
    <section className="ride-form-card">
      <div className="ride-form-header">
        <h3>Publish Your Next Trip</h3>
      </div>

      <div className="field-grid top-row">
        <label className="field">
          <span>Start Point</span>
          <div className="input-box">
            <span className="pin-dot" />
            <input value="Mumbai" readOnly />
          </div>
        </label>

        <label className="field">
          <span>End Point</span>
          <div className="input-box">
            <span className="pin-dot" />
            <input value="Pune" readOnly />
          </div>
        </label>

        <label className="field">
          <span>Date</span>
          <div className="input-box date-box">
            <input value="Select Date" readOnly />
          </div>
        </label>
      </div>

      <div className="field-grid second-row">
        <label className="field">
          <span>Time</span>
          <div className="input-box">
            <input value="Select Time" readOnly />
          </div>
        </label>

        <label className="field">
          <span>Seats Available</span>
          <div className="input-box select-box">
            <input value="1 - 4" readOnly />
          </div>
        </label>

        <label className="field">
          <span>Price Per Seat</span>
          <div className="input-box select-box">
            <input value="INR" readOnly />
          </div>
        </label>
      </div>

      <button type="button" className="primary-button">
        Register This Ride
      </button>
    </section>
  )
}

export default CreateRideForm