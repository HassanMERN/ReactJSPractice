
import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Featured from './Components/featured';
import Menu from './Components/Menu';
import { BrowserRouter, Route } from 'react-router-dom'
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
      </BrowserRouter>
      <Home />
      <Featured />
      <Menu />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
