import './App.css';
import React,{useState} from 'react'
import Game from './Game'
import ToogleVisibility from "./ToogleVisibility";


function App() {
  //this.setState({ image: './background_menu.jpg' });
  const [active, setActive] = useState(false);
  
  return (
        
    <section className="mainContainer" style={{backgroundImage: `url(${active ? './background_menu.jpg' : './dirt_background.jpg'})` }}>
      <div className="App">
      <ToogleVisibility>
        <Game/>
      </ToogleVisibility>
      </div>
    </section>
    
  );
}

export default App;
