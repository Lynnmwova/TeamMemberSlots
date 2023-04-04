import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'

import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './employees'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <Header></Header>
     <Employees></Employees>
     <Footer></Footer>

 
    </main>
  )
}

export default App
