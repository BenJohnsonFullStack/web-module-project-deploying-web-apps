import React from 'react'
import useSound from 'use-sound'
import squeak from '../audio/squeak.mp3'
import duck from '../images/duck.jpg'

export default function App() {

  const SqueakTheDuck = () => {
    const [duckSqueak] = useSound(squeak)

    return (
      <button 
      onClick={duckSqueak} 
      className="duck-button">
        Squeak the Duck
      </button>
    )
  }

  return (
    <div>
      <img src={duck} className="duck" />
      <SqueakTheDuck />
    </div>
  )
}
