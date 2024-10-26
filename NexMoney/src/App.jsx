import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import Home from './assets/pages/Home'

function App() {
  
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
