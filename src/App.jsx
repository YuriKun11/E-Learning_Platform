import { useState } from 'react'
import './App.css'
import '../src/assets/components/styles/styles.css'
import Course from './assets/components/Course'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommandLine from './assets/components/pages/CommandLine';
import Footer from './assets/components/Footer';
import Intro from './assets/components/pages/Intro';


import NavigationBar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
         <main className="container">
         <NavigationBar> </NavigationBar>
         <div className="content">
            <Routes>
              <Route path="/" element={<Course />}/>
              <Route path="/commands" element={<CommandLine />}/>
              <Route path="/intro" element={<Intro />}/>
            </Routes>
            </div>
         
         <Footer></Footer>
         </main>
         </Router>
     </>
  )
}

export default App
