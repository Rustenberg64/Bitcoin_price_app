"use client"
import { useState } from "react";

export default function Bitcoin_Price() {

  const [time, setTime] = useState(0);

  return(
    <>
    <h1>Hello</h1>
    <button onClick={() => {setTime( prev => prev+1)}}>{time}</button>

    </>
  )

}