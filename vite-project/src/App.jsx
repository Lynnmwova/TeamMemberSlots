import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'
import Content from './contents'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <Header></Header>
     <Content></Content>
     <Footer></Footer>

    </main>
  )
}

export default App
