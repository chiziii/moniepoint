import './App.css';
import Nav from './component/Nav.js'
import Body from './component/Body.js'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
