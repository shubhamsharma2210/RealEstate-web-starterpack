import './app.css'
import CompoLogo from './components/complogo/CompoLogo';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import GetStarted from './components/getStarted/GetStarted';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Residencies from './components/residencies/Residencies';
import ValueContainer from './components/valueContainer/ValueContainer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

      
      <Header />
      <Hero />
      </div>
      <CompoLogo/>
      <Residencies />
      <ValueContainer />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
