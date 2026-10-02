import { useEffect, useState } from 'react'
import './App.css'
import FooterBar from './Components/FooterBar'
import TopNavBar from './Components/TopNavBar'
import Home from './Pages/Home'
import LoaderPage from "./Pages/LoaderPage"

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
    <header>
      <TopNavBar/>
    </header>
    <main>
      <LoaderPage isLoading={isLoading} />
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
