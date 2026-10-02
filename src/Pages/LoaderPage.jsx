import Logo from "../assets/Logo.png"
import "./LoaderPage.css"

function LoaderPage({ isLoading = true, message = "Getting your journey ready" }) {
  if (!isLoading) return null

  return (
    <div className="loaderPageBase" role="status" aria-live="polite" aria-label={message}>
      <div className="loaderContent">
        <img className="loaderLogo" src={Logo} alt="Travel with Me" />
        <p className="loaderEyebrow">YOUR RIDE, YOUR ROUTE</p>
        <h1>Travel with Me</h1>
        <p className="loaderMessage">{message}</p>
        <div className="routeLoader" aria-hidden="true">
          <span className="routeStop routeStopStart" />
          <span className="routeTrack" />
          <span className="routeTraveler" />
          <span className="routeStop routeStopEnd" />
        </div>
      </div>
    </div>
  )
}

export default LoaderPage