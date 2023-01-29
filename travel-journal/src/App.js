import './App.css';
import Nav from './Components/Nav';
import data from './Data/data.js'
import Destination from './Components/Destination';

function App() {
  const destinations = data.map(data=>{
      return(<Destination {...data}/>)
    })
  

  return (
    <div className="App">
      <Nav></Nav>
      {destinations}
    </div>
  );
}

export default App;
