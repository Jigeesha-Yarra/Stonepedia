
import {Component} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Stones from './components/Stones'
import About from './components/About'
import Contact from './components/Contact'

import "./App.css"

class App extends Component{
  render(){
    return(
      <Router>
        <div className="app-container">
          <Header/>
          <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/stones" element = {<Stones />} />
            <Route path="/about" element = {<About />} />
            <Route path="/contact" element = {<Contact />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div className="home-page-content">
    <h1>Welcome to StonePedia</h1>
    <p>Your go-to platform for premium stone products, expert advice, and timely delivery.</p>        
    <div className="home-featured">
      <h2>Our Services</h2>
      <p>Explore a wide variety of high-quality stones, professional guidance, and reliable delivery for all your construction and design needs.</p>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Premium Stones</h3>
          <p>We offer a wide selection of stones to suit every project’s requirements.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Consultation</h3>
          <p>Our specialists provide tailored advice to ensure you make the right choices.</p>
        </div>
        <div className="feature-card">
          <h3>Timely Delivery</h3>
          <p>Get your stone products delivered directly to your site on time, every time.</p>
        </div>
      </div>
    </div>
  </div>
)

export default App;
