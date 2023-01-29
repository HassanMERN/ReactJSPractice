import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Featured from './Components/featured';
import Menu from './Components/Menu';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Featured/>
      <Menu/>
    </div>
  );
}

export default App;
