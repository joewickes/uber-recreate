import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Eats from './components/Eats';
import Business from './components/Business';
import Reserve from './components/Reserve';
import Safety from './components/Safety';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Eats />
      <Business />
      <Reserve />
      <Safety />
      <About />
      <Contact />
    </div>
  );
}

export default App;
