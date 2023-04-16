import './App.css';
import React,{useState} from 'react'


function App() {
  //this.setState({ image: './background_menu.jpg' });
  const [show,setShow]=useState(true)
  const [active, setActive] = useState(false);
  const play = ()=>{
    setActive(!active);
    setShow(!show)
    //this.setState({ image: './background_menu.jpg' });
  }
  return (
        
    <section className="mainContainer" style={{backgroundImage: `url(${active ? './background_menu.jpg' : './dirt_background.jpg'})` }}>
      <div className="App">
      {
        show?
        <div className="home">
          <p className='sokoban_txt'>SOKOBAN</p>
          <button className="play_btn" onClick={play}>Rozpocznij Gre</button>
          <button className="settings_btn">Ustawienia</button>
          <button className="exit_btn">Wyjscie</button>
        </div>:null
      }
      </div>
    </section>
    
  );
}

export default App;
