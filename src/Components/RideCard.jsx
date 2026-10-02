import './RideCard.css'
import avtar from "../assets/avtar.webp"


function RideCard() {
  return (
    <>
      <div className="rideCardBase">
        <div className="driver">
          <div className='carimage'>
            <img src={avtar} alt="Sumit" />
          </div>
          <div className="riderInfo">
            <p>Driver:  <span>Sumit Panchal</span></p>
            <p>Car : <span>Hyundai Santro</span></p>
            <p>rating: ⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="rideInfo">
          <div className='departure'>
            <p>Start time</p>
            <h3>9:30 PM</h3>
          </div>
          <div className='return'>
            <p>Return time</p>
            <h3>3:30 PM</h3>
          </div>
        </div>
        <div className="booking">
          <div className='seatAvailable'>
            <p>Seats Available</p>
            <div className='seatInfo'>
              <div >
                <p>To <span>2</span></p>
              </div>
              <div>
                <p>Return <span>2</span></p>
              </div>
            </div>
          </div>
           <div className='fare'>
            <p>Charges</p>
            <div className='fareInfo'>
              <div >
                <p>To <span>100/-</span></p>
              </div>
              <div>
                <p>Return <span>100/-</span></p>
              </div>
            </div>
          </div>
          <button>Book Now</button>
        </div>
      </div>
    </>
  )
}

export default RideCard