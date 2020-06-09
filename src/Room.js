import React, {useState} from 'react';
import './Room.css';

function Room () {
    // const state =  useState(true);
    let [isLit, setLit] = useState(true);
    //let age = 12;
    let [temperature, settemperature] = useState(22);
    // console.log(state);

  return (
    <div className={`room ${isLit? "lit": "dark"}`}>

        This room is {isLit? "Lit" : "Dark"}

      <br />
      <button onClick={() => setLit(true)}> On </button>
      <button onClick={() => setLit(false)}> Off </button>
      
      <br />
      Room Temperature = {temperature} <br />
      <button onClick={() => {console.log("increase age arrow function"); settemperature(++temperature);}}> + </button>
      <button onClick={() => {console.log("increase age arrow function"); settemperature(--temperature);}}> - </button>


    </div>
  );
}

export default Room;