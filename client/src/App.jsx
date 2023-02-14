import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar,Welcome,Footer,Services,Transaction } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
     <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
     </div>
     <Services/>
     <Transaction/>
     <Footer/>
    </div>
  )
}

export default App
