import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Calculator1 from './Components/Calculator2/normalcalculator'
import Calculator from './Components/Calculator/calculator'

function App() {
  const [isScientific, setIsScientific] = useState(false)

  return (
    <>
      {isScientific ? <Calculator1 /> : <Calculator />}

      <center>
        <div className="switch">
          <button 
            onClick={() => setIsScientific(false)} 
            className="switchbtn"
          >
            Simple Calculator
          </button>
          <button 
            onClick={() => setIsScientific(true)} 
            className="switchbtn"
          >
            Scientific Calculator
          </button>
        </div>
      </center>
    </>
  )
}

export default App