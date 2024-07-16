import { useState } from 'react'
import './App.css'
import Joke from './assets/Components/Joke'
import Footer from './assets/Components/Navbar'

function App() {
  

  return (
    <>
     <div className="bg-gradient-to-r from-green-500 to-red-400 w-full h-auto items-center ">
      <h1 className="text-black items-center p-5 underline text-2xl font-bold">Joke Generator Using React And Joke API </h1>
      
       <Joke/>

        
     </div>
     <Footer/>
    
    </>
  )
}

export default App
