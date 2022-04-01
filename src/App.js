import './App.css';
import NavBar from './NavBar/NavBar'
import Header from './Header/Header'
import About from './About/About'
import Expertise from './Expertise/Expertise'
import Transition from './Transition/Transition'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Expertise />
      <Transition />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
