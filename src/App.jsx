import { useEffect, useState } from 'react'
import './App.css'
import FooterBar from './Components/FooterBar'
import TopNavBar from './Components/TopNavBar'
import Home from './Pages/Home'
import LoaderPage from "./Components/LoaderPage"
import RideCard from './Components/RideCard'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './Pages/UserProfile'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const finishLoading = () => setIsLoading(false)

    if (document.readyState === 'complete') {
      finishLoading()
      return
    }

    window.addEventListener('load', finishLoading, { once: true })
    return () => window.removeEventListener('load', finishLoading)
  }, [])

  return (
    <>
      <LoaderPage isLoading={isLoading} />
      <header>
        <TopNavBar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myprofile' element={<UserProfile />} />
        </Routes>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </>

  )
}

export default App
