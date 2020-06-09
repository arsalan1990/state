import React, {useState} from 'react';


function Room () {
    // const state =  useState(true);
    let [isLit, setLit] = useState(false);
    //let age = 12;
    let [age, setage] = useState(20);
    // console.log(state);

    function updatelit (){
        console.log('Button Clicked');
        //isLit = !isLit;
        setLit(!isLit);
    }
    function increaseage (){
        console.log('increase age Button Clicked');
        setage(++age);    
    
    }
  return (
    <div>

        This room is {isLit? "Lit" : "Dark"}
        <br />
        age = {age}
      <br />
      <button onClick={updatelit}> Toggle Light </button> <br />
      <button onClick={increaseage}> Increase Age </button>
    </div>
  );
}

export default Room;