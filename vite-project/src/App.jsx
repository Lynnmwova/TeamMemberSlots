import { useState } from 'react';

import './App.css';
import Header from './header';

import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './employees';


function App() {


  return (
    <main>
     <Header></Header>
     <Employees></Employees>
     <Footer></Footer>

    </main>
  )
}

export default App
