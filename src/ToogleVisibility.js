import React, { useState } from "react";
import background from "./background_menu.jpg";
import './App.css';

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();
  const [show2, setShow2] = useState(true);

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
    setShow2(!show2)
  }
  var buttonText = show ? "Hide Component" : "Show Component";

  return (
    <div className="component-container">
      {show && children}
      {
        show2?
        <div className="home" style={{backgroundImage: `url(${background})`, }}>
          <p className='sokoban_txt'>SOKOBAN</p>
          <button className="play_btn" onClick={toggleShow}>Rozpocznij Gre</button>
          <button className="settings_btn">Ustawienia</button>
          <button className="exit_btn">Wyjscie</button>
        </div>
      :null
      }
    </div>
  );
}