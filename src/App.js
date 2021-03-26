import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Eats from './components/Eats';
import Business from './components/Business';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Eats />
      <Business />
    </div>
  );
}

export default App;
