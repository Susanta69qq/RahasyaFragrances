import React from 'react'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroller'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'

function App() {
  return (
    <div>
      <SmoothScroll />
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  )
}

export default App