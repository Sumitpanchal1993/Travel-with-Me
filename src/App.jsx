import './App.css'
import Bottomoptions from './Components/Bottomoptions'
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
      <RideCard/>
      <Home/>
    </main>
    <footer>
      <Bottomoptions/>
    </footer>
    </>
      
  )
}

export default App
