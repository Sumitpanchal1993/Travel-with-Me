import './App.css'
import FooterBar from './Components/FooterBar'
import RideCard from './Components/RideCard'
import TopNavBar from './Components/TopNavBar'
import BookRide from './Pages/BookRide'
import Home from './Pages/Home'
import LoaderPage from "./Pages/LoaderPage"

function App() {

  return (
    <>
    <header>
      <TopNavBar/>
    </header>
    <main>
      {true && <LoaderPage/> }      
      {/* <RideCard/> */}
      <Home/>
    </main>
    <footer>
      <FooterBar/>
    </footer>
    </>
      
  )
}

export default App
