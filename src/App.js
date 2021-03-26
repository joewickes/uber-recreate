import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Eats from './components/Eats';
import Business from './components/Business';
import Reserve from './components/Reserve';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Eats />
      <Business />
      <Reserve />
    </div>
  );
}

export default App;
