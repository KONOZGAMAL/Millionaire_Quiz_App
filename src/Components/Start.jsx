// import React from 'react'
import { useRef } from "react";
import "../app.css";
import useSound from "use-sound";
import play from "../assets/src_sounds_play.wav";
export default function Start({setDisplay,setUserName}){
  const [Play] = useSound(play)
 const inputRef = useRef(null);
 const handleElement=()=>{
   if (inputRef.current.value !== "") {
     setDisplay(false)
     Play()
     setUserName(inputRef.current.value);
    }
 }
  return (
    <div className="start">
      <input placeholder="enter your name"
      ref={inputRef}/>
      <button onClick={()=>handleElement()}>Start</button>
    </div>
  );
}
