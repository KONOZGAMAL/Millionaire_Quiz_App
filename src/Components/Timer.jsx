// import React from 'react'

import { useState , useEffect } from "react";

export default function Timer({setStopTimer,addClass}) {
  const [timer,setTimer]=useState(30);
  useEffect(()=>{
      if (timer===0) {
        setStopTimer(true)
      }
    let interval = setInterval(() => {
          setTimer((prev)=>prev-1)
      }, 1000);
      return()=> clearInterval(interval)
  },[setStopTimer,timer])
  useEffect(()=>{
      setTimer(30)
  },[addClass])
  return (
    <div>{timer}</div>
  )
}
