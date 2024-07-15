import { useState } from 'react'
import './App.css'
import Joke from './assets/Components/Joke'
import Button from './assets/Components/Button'

function App() {
  

  return (
    <>
     <div className="bg-green-500 w-full h-auto items-cente ">
      <h1 className="text-black items-center p-5 underline text-2xl font-bold">Joke Generator Using React And Joke API </h1>
      
       <Joke/>
        
     </div>
    
    </>
  )
}

export default App
