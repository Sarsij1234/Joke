import React, { useState } from 'react'
import Button from './Button';

function Joke() {
    const[Joke,setJoke]=useState("");
    const fetchApi=()=>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res)=>res.json())
        .then((data)=>setJoke(data.joke))
    }
  return (
    <div className="p-10">
      <Button callApi={fetchApi}/>
      <p className="p-10">{Joke}</p>
    </div>
  )
}

export default Joke
