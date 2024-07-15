import React from 'react'


function Button(props) {
  return (
     
      <button className="bg-black text-white rounded-lg h-8 w-52 text-center "
      onClick={props.callApi}
      >
        
        Generate Jokes</button>
    
  )
}

export default Button
